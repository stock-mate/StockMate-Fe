import type { Metadata } from "next";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "stock mate",
  description: "실시간 주식 정보를 보여주는 stock mate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col items-center pt-10 font-Pretendard">
        {children}
      </body>
    </html>
  );
}
