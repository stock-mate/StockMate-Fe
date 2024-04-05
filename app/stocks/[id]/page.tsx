import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { getStock } from "@/app/lib/stocks";
import ChartComponent from "@/app/ui/chart";

const page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { query: string };
}) => {
  const { id } = params;
  const { longName } = await getStock(id);
  const { query } = searchParams || "";

  return (
    <>
      <Header query={query} />
      <main className="max-w-5xl w-full h-screen mt-10">
        <div className="flex items-center gap-3 border p-4">
          <h1 className="text-3xl font-semibold">{longName}</h1>
          <div className="flex gap-4 items-center">
            <span className="font-medium text-xl text-red-500">84,400</span>
            <span className="font-light text-red-500">+3.66%</span>
            <span className="font-light text-red-500">↑800</span>
          </div>
        </div>
        <div className="border">
          <ChartComponent />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
