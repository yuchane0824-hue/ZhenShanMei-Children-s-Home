"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-20 py-15 bg-[#16425B] text-white">                 

        {/* 聯絡資訊 */}
        <div className="flex flex-col space-y-2 text-white font-light text-[15px]">          
          
          <div className="flex items-start">
            <span className="min-w-[80px] tracking-widest">電話</span>
            <span>(07) 123-4567</span>
          </div>
            
          <div className="flex items-start">
            <span className="min-w-[80px] tracking-widest ">電子信箱</span>
            <a href="mailto:zhenshanmei@gmail.com">zhenshanmei@gmail.com</a>
          </div>
            
          <div className="flex items-start">
            <span className="min-w-[80px] tracking-widest">地址</span>
            <span>台北市XX區XX路136號</span>
          </div>

        </div>
    </div>
  );
}