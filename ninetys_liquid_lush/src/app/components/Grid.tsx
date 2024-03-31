import React from "react";
import Image from "next/image";
import { Leckerli_One } from "next/font/google";

const leckerli_one = Leckerli_One({ subsets: ["latin"], weight: "400" });

export default function Grid() {
  return (
    <div className={leckerli_one.className}>
      <header className="flex justify-center bg-clip-text bg-gradient-to-b from-[#E10094] to-[#5E1675] mt-5 mb-10 text-[#E10094] text-5xl text-transparent">
        Our Vibes
      </header>
      <div className="flex justify-center mb-10">
        <div className="gap-x-10 gap-y-5 grid grid-cols-2 grid-rows-2 w-[50vw]">
          <div className="col-span-1 row-span-1 bg-F5F5F5-100 rounded-md">
            <Image
              src={"/bg1.png"}
              alt="bg1"
              width={400}
              height={30}
              className="h-full"
            ></Image>
          </div>
          <div className="col-span-1 row-span-1 bg-F5F5F5-100 rounded-md">
            <Image
              src={"/bg2.png"}
              alt="bg2"
              width={400}
              height={30}
              className="h-full"
            ></Image>
          </div>
          <div className="col-span-1 row-span-1 bg-F5F5F5-100 rounded-md">
            <Image
              src={"/bg3.png"}
              alt="bg3"
              width={400}
              height={30}
              className="h-full"
            ></Image>
          </div>
          <div className="col-span-1 row-span-1 bg-F5F5F5-100 rounded-md">
            <Image
              src={"/bg4.png"}
              alt="bg4"
              width={400}
              height={30}
              className="h-full"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
