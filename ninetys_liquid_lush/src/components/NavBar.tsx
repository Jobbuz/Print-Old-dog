import Link from "next/link";
import React from "react";

export default function NavBar() {
  const PageName = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/Menu" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact", path: "/Contact" },
  ];
  return (
    <>
      <nav className="flex flex-row justify-between bg-gradient-to-r from-[#219c90] to-[#5e1675] p-4">
        <h1 className="font-bold text-[#ffd23f]">90s LIQUID LUSH</h1>
        <div className="flex gap-x-[1rem] font-semibold text-[#ffd23f] text-[14px]">
          {PageName.map((page) => (
            <Link key={page.name} href={page.path} className="hover:underline">
              {page.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
