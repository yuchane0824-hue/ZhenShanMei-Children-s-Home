"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';

{/* 照片輪播牆 */}
const banner = [
  {
    url: "/CPC_Tao01.JPG",
    position: "object-[50%_0%]"
  },
  {
    url: "/CPC_Tao03.JPG",
    position: "object-[50%_100%]"
  },
  {
    url: "/CPC_Tao04.png",
    position: "object-[50%_20%]"
  },
  {
    url: "/CPC_Tao05.png",
    position: "object-[50%_50%]"
  }
];

export default function Home() {
  // 照片自動輪播狀態 (3秒換一張)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banner.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col"> 

    {/* 漸顯特效 */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>    

      {/* 主頁面 */}
      <div className="w-full">
        {/* 照片輪播牆 */}
        <div className="relative w-full aspect-[2.5/1] overflow-hidden shadow-md">
        
          {/* 圖片滑動軌道 */}
          <div className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {banner.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <Image 
                  src={slide.url} 
                  alt={`Banner ${index + 1}`} 
                  fill
                  className={`w-full h-full object-cover ${slide.position}`}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* 圖片標語 */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h1 className="font-noto text-5xl sm:text-7xl font-extrabold drop-shadow-lg">大 誠 加 油 站</h1>
            <p className="mt-5 text-xl sm:text-2xl tracking-widest drop-shadow-md">專業・熱忱・效率</p>
          </div>

          {/* 輪播指示點*/}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3">
            {banner.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-12 h-1.5 transition-colors duration-300 ${
                  currentIndex === index ? 'bg-[#16425B]' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`切換至第 ${index + 1} 張圖片`}
              />
            ))}
          </div>
        </div>

        {/* 公司理念 */}
        <div className="p-10 sm:p-[100px] grid sm:grid-cols-2 grid-cols-1 gap-10
        shadow-md border-b border-gray-200 animate-fade-up">
          <div className="flex flex-col justify-center transition-transform duration-500 hover:-translate-y-2">
            <h5 className="font-noto italic text-1xl font-bold text-[#16425B] tracking-widest">一誠文教事業</h5>
            <h1 className="font-noto mt-3 text-5xl font-black text-gray-700">服務第一、誠信至上</h1>
            <div className="w-50 h-[1px] rounded-full mt-5 bg-[#16425B]"></div>

            <p className="mt-5 text-md text-gray-700">
            大誠加油站創立以來，始終秉持「服務第一、誠信至上」的核心理念。
            我們嚴格把關提供最純淨、高品質的燃油，
            致力於打造一個讓每位駕駛人都能安心停靠的補給站。
            大誠加油站不只是一個提供能源的場所，更是您旅途中最堅實的後盾，
            以最真誠的態度，陪伴您安全、順暢地駛向每一個人生目的地。
            </p>
          </div>

          <div className="overflow-hidden shadow-md 
          transition-shadow hover:shadow-xl duration-500 group">
            <Image src="/CPC_Tao06.jpg" alt="mypic" 
            width={1440} height={1080}
            className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 經營方針 */}
        <div className="p-10 sm:p-[100px] grid sm:grid-cols-2 grid-cols-1 gap-10
        shadow-md border-b border-gray-200 bg-[#16425B]/5 animate-fade-up">
          <div className="overflow-hidden shadow-md 
          transition-shadow hover:shadow-xl duration-500 group">
            <Image src="/CPC_Tao05.png" alt="mypic" 
            width={1440} height={1080}
            className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center transition-transform duration-500 hover:-translate-y-2">
            <h1 className="font-noto text-[48px] font-black text-gray-700 tracking-widest">經營方針</h1>
            <p className="mt-3 text-md text-gray-700">
            我們以「專業、熱忱、效率」三大基石為經營方針，嚴格要求每一項服務細節與作業標準。
            </p>
            
            <div className="w-50 h-[1px] rounded-full mt-5 bg-[#16425B]"></div>
            <h1 className="font-noto mt-10 text-[48px] font-black text-gray-700 tracking-widest">團隊氛圍</h1>
            <p className="mt-3 text-md text-gray-700">
            大誠加油站致力於打破傳統冰冷、充滿油氣味的刻板印象。
            透過明亮整潔的環境規劃、安全流暢的動線，以及全體員工親切真誠的問候，
            我們期望讓每一位短暫停留的顧客，感受到舒適、充滿活力的氛圍。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
