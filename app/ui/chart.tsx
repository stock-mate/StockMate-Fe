"use client";

import React from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CurrentCoordinate,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  LineSeries,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize,
} from "react-financial-charts";
import { chartData } from "@/app/lib/placeholder-data";

const ChartComponent = ({
  chartData,
}: {
  chartData: any;
  // chartData: {
  //   date: string;
  //   open: number;
  //   low: number;
  //   high: number;
  //   close: number;
  //   volume: number;
  // }[];
}) => {
  const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (d) => new Date(d.date)
  );
  const height = 700;
  const width = 1000;
  const margin = { left: 0, right: 48, top: 0, bottom: 24 };

  // 이동 평균선을 계사하는 함수
  const ema12 = ema()
    .id(1)
    .options({ windowSize: 12 })
    .merge((d: { ema12: any }, c: any) => {
      d.ema12 = c;
    })
    .accessor((d: { ema12: any }) => d.ema12);

  const ema26 = ema()
    .id(2)
    .options({ windowSize: 26 })
    .merge((d: { ema26: any }, c: any) => {
      d.ema26 = c;
    })
    .accessor((d: { ema26: any }) => d.ema26);

  const elder = elderRay();

  const calculatedData = elder(ema26(ema12(chartData))); // 아무데서도 안쓰는데 지우면 맨 밑 데이터가 안나온다
  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(chartData);
  const pricesDisplayFormat = format(".2f");
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const elderRayHeight = 100;
  const elderRayOrigin = (_: any, h: number) => [0, h - elderRayHeight];
  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_: any, h: number) => [0, h - barChartHeight - elderRayHeight];
  const chartHeight = gridHeight - elderRayHeight;
  const yExtents = (data: { high: any; low: any }) => {
    return [data.high, data.low];
  };
  const dateTimeFormat = "%d %b";
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  const barChartExtents = (data: { volume: any }) => {
    return data.volume;
  };

  const candleChartExtents = (data: { high: any; low: any }) => {
    return [data.high, data.low];
  };

  const yEdgeIndicator = (data: { close: any }) => {
    return data.close;
  };

  const volumeColor = (data: { close: number; open: number }) => {
    return data.close > data.open ? "rgba(38, 166, 154, 0.3)" : "rgba(239, 83, 80, 0.3)";
  };

  const volumeSeries = (data: { volume: any }) => {
    return data.volume;
  };

  const openCloseColor = (data: { close: number; open: number }) => {
    return data.close > data.open ? "#26a69a" : "#ef5350";
  };

  return (
    // container -> style 세팅, 차트에 활용되는 데이터
    <ChartCanvas
      height={height}
      ratio={3}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
      zoomAnchor={lastVisibleItemBasedZoomAnchor}
    >
      <Chart id={2} height={barChartHeight} origin={barChartOrigin} yExtents={barChartExtents}>
        <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
      </Chart>
      {/* 실제 차트  */}
      <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
        {/* x축 */}
        <XAxis showGridLines showTickLabel={false} />
        {/* y축 */}
        <YAxis showGridLines tickFormat={pricesDisplayFormat} />
        {/* 차트 */}
        <CandlestickSeries />
        {/* 빨간 라인선 그래프 */}
        <LineSeries yAccessor={ema26.accessor()} strokeStyle={ema26.stroke()} />
        <CurrentCoordinate yAccessor={ema26.accessor()} fillStyle={ema26.stroke()} />
        {/* 파란 라인선 그래프 */}
        <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} />
        <CurrentCoordinate yAccessor={ema12.accessor()} fillStyle={ema12.stroke()} />
        <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
        {/* 끝 아이템 레이블 */}
        <EdgeIndicator
          itemType="last"
          rectWidth={margin.right}
          fill={openCloseColor}
          lineStroke={openCloseColor}
          displayFormat={pricesDisplayFormat}
          yAccessor={yEdgeIndicator}
        />
        {/* 왼쪽 위 레이블 */}
        <MovingAverageTooltip
          origin={[8, 24]}
          options={[
            {
              yAccessor: ema26.accessor(),
              type: "EMA",
              stroke: ema26.stroke(),
              windowSize: ema26.options().windowSize,
            },
            {
              yAccessor: ema12.accessor(),
              type: "EMA",
              stroke: ema12.stroke(),
              windowSize: ema12.options().windowSize,
            },
          ]}
        />
        <ZoomButtons />
        <OHLCTooltip origin={[8, 16]} />
      </Chart>
      {/* 아래 차트 */}
      <Chart
        id={4}
        height={elderRayHeight}
        yExtents={[0, elder.accessor()]}
        origin={elderRayOrigin}
        padding={{ top: 8, bottom: 8 }}
      >
        {/* 아래 차트 x축 */}
        <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" />
        {/* 아래 차트 y축 */}
        <YAxis ticks={4} tickFormat={pricesDisplayFormat} />
        {/* 호버 시 x축 눈금 */}
        <MouseCoordinateX displayFormat={timeDisplayFormat} />
        {/* 호버 시 y축 눈금 */}
        <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
        {/* 아래 실제 차트 */}
        <ElderRaySeries yAccessor={elder.accessor()} />
        {/* 왼쪽 위 차트 레이블 */}
        <SingleValueTooltip
          yAccessor={elder.accessor()}
          yLabel="Elder Ray"
          yDisplayFormat={(d: any) =>
            `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(d.bearPower)}`
          }
          origin={[8, 16]}
        />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default ChartComponent;
