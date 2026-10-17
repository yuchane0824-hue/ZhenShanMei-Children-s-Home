"use client"
import Link from "next/link";
import Image from 'next/image';


export default function MenuPC() {

  return (
    <div className="bg-white w-full flex items-stretch h-auto md:h-[85px] shadow-sm">
        <Link href="/Home" className="flex-1 flex outline-none border-none">
        <div className="text-black text-[18px] gap-3 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:text-gray-700">
            <span>首頁</span>
            </div>
        </Link>

        <Link href="/News" className="flex-1 flex outline-none border-none">
        <div className="text-black text-[18px] gap-3 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:text-gray-700">
            <span>最新消息</span>
            </div>
        </Link>

        <Link href="/AboutUs" className="flex-1 flex">
        <div className="text-black text-[18px] gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            認識真善美
        </div>
        </Link>

        <Link href="/OurKids" className="flex-1 flex">
        <div className="text-black text-[18px] gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            認識學童
        </div>
        </Link>

        <Link href="/JoinUs" className="flex-1 flex">
        <div className="text-black text-[18px] gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            志工招募
        </div>
        </Link>

        <Link href="/ChildCare" className="flex-1 flex">
        <div className="text-black text-[18px] gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            學童安置
        </div>
        </Link>

        <Link href="/SupportUs" className="flex-1 flex">
        <div className="text-black text-[18px] gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            愛心捐助
        </div>
        </Link>

        <Link href="/MessageBoard" className="flex-1 flex">
        <div className="text-black text-[18px] gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            留言板
        </div>
        </Link>
    </div>
  );
}
