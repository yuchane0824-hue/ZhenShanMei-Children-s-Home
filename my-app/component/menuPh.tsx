"use client"

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { TbMenu2, TbX } from "react-icons/tb";

export default function MenuPh() {
  const [Open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!Open);
  };

  return (
    <div className="w-full relative z-50 bg-white shadow-sm"> 
      
      {/* 頂部導覽列 */}
      <div className="flex items-center justify-between px-4 py-2 h-[80px]">
        {/* LOGO */}
        <Link href="/Home" className="outline-none border-none">
          <Image src="/Logo_new.jpg" alt="LOGO" width={60} height={60}/>
        </Link>

        <button onClick={toggleMenu} className="text-3xl">
          {Open ? <TbX /> : <TbMenu2 />}
        </button>
      </div>

      {/* 直式下拉選單 */}
      {Open && (
        <div className="absolute top-full left-0 w-full flex flex-col 
        border-t bg-white border-gray-200 shadow-md">
          
          <Link href="/Home" onClick={toggleMenu}>
            <div className="px-6 py-6 text-lg border-b transition-all hover:font-bold
            text-gray-800 border-gray-200 hover:bg-gray-100 hover:text-[#16425B]">
              首頁
            </div>
          </Link>

          <Link href="/Branch" onClick={toggleMenu}>
            <div className="px-6 py-6 text-lg border-b transition-all hover:font-bold
            text-gray-800 border-gray-200 hover:bg-gray-100 hover:text-[#16425B]">
              服務據點
            </div>
          </Link>

          <Link href="/Services" onClick={toggleMenu}>
            <div className="px-6 py-6 text-lg border-b transition-all hover:font-bold
            text-gray-800 border-gray-200 hover:bg-gray-100 hover:text-[#16425B]">
              產品與服務
            </div>
          </Link>

          <Link href="/Joinus" onClick={toggleMenu}>
            <div className="px-6 py-6 text-lg border-b transition-all hover:font-bold
            text-gray-800 border-gray-200 hover:bg-gray-100 hover:text-[#16425B]">
              加入我們
            </div>
          </Link>

        </div>
      )}
    </div>
  );
}