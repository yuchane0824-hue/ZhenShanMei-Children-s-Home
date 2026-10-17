"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-20 py-15 bg-[#16425B] text-white">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-20">
        
        {/* 導覽列 */}
        <div className="flex flex-col">
          <h3 className="font-noto text-2xl font-bold tracking-widest
          mb-5 pb-2 border-b border-white/20 inline-block">導覽列
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 space-y-2 text-white font-light text-[15px]">          
            <Link href="/Home" className="flex items-start">
              <span className="min-w-[80px] tracking-widest">首頁</span>
            </Link>                    
            <Link href="/Branch" className="flex items-start">
              <span className="min-w-[80px] tracking-widest">服務據點</span>
            </Link>                   
            <Link href="/Services" className="flex items-start">
              <span className="min-w-[80px] tracking-widest">產品與服務</span>
            </Link>
            <Link href="/Joinus" className="flex items-start">
              <span className="min-w-[80px] tracking-widest">加入我們</span>
            </Link>
          </div>
        </div>

        {/* 聯絡資訊 */}
        <div className="flex flex-col">
          <h3 className="font-noto text-2xl font-bold tracking-widest
          mb-5 pb-2 border-b border-white/20 inline-block">聯絡資訊
          </h3>

          <div className="flex flex-col space-y-2 text-white font-light text-[15px]">          
            <div className="flex items-start">
              <span className="min-w-[80px] tracking-widest">服務專線</span>
              <span>(07) 123-4567</span>
            </div>
            
            <div className="flex items-start">
              <span className="min-w-[80px] tracking-widest ">電子信箱</span>
              <a href="mailto:dacheng.cpc@gmail.com">dacheng.cpc@gmail.com</a>
            </div>
            
            <div className="flex items-start">
              <span className="min-w-[80px] tracking-widest">服務時間</span>
              <span>24 小時全年無休</span>
            </div>
          </div>
        </div>

        {/* 服務據點 */}
        <div className="sm:col-span-2 flex flex-col">
          <h3 className="font-noto text-2xl font-bold tracking-widest 
          mb-5 pb-2 border-b border-white/20 inline-block">服務據點
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5
           text-white font-light text-[15px]">
            <div>
              <h4 className="mb-1 tracking-widest">高雄總站</h4>
              <p>高雄市楠梓區德惠路136號</p>
            </div>
            
            <div>
              <h4 className="mb-1 tracking-widest">新竹湖口站</h4>
              <p>新竹縣湖口鄉信勢村25鄰成功路485號</p>
            </div>
            
            <div>
              <h4 className="mb-1 tracking-widest">桃園中壢站</h4>
              <p>桃園市中壢區華美三路518號</p>
            </div>
            
            <div>
              <h4 className=" mb-1 tracking-widest">桃園楊梅站</h4>
              <p>桃園市楊梅區旗楠路 4 號</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}