import { CustomFilter, Hero, SearchBar } from "@/Components";
import { getCars } from "@/utils/fetch";
import Image from "next/image";

export default async function Home() {
  const allCars = await getCars();
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="p-20 flex flex-col gap-5">
        <div>
          <h1 className="font-semibold text-2xl">Explore Cars</h1>
          <p>Explore through the cars of your choice.</p>
        </div>
        <div className="flex justify-between w-[70%]">
          <SearchBar/>
          <div className="flex ">
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
      </div>
    </main>
  );
}
