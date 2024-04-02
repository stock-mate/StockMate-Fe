import Header from "@/app/ui/header";
import RankingItem from "@/app/ui/ranking-item";
import Footer from "@/app/ui/footer";

export default function Home() {
  const liHTML = new Array(10).fill(0).map((_, idx) => <RankingItem idx={idx} />);

  return (
    <>
      <Header />
      <main className="max-w-5xl w-full h-[65rem] mt-10">
        <div className="flex">
          <section className="border w-1/2 p-4 rounded-lg mr-2">
            <h2 className="text-xl font-semibold pb-4">실시간 거래량</h2>
            <ol>{liHTML}</ol>
          </section>

          <section className="border w-1/2 p-4 rounded-lg">
            <h2 className="text-xl font-semibold pb-4">인기 급상승</h2>
            <ol>{liHTML}</ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
