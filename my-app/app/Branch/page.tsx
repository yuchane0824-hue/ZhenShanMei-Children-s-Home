"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { TbMapPinFilled } from "react-icons/tb";

const branchData = [
  {
    id: 'nanzih',
    name: '高雄大誠站',
    city: '高雄市',
    address: '高雄市楠梓區德惠路136號',
    phone: '07-3661956',
    time: '24 小時全年無休',
    services: ['人工加油、自助加油、洗車服務'],
    image: '/CPC_Kh03.jpg',
    top: '61%', 
    left: '50%'
  },
  {
    id: 'zhongli',
    name: '中壢華勛站',
    city: '桃園市',
    address: '桃園市中壢區華美三路518號', 
    phone: '(03) -4663579',
    time: '06:30 - 22:00',
    services: ['人工加油、自助加油、洗車服務'],
    image: '/CPC_Kh03.jpg',
    top: '23%', 
    left: '70%'
  },
    {
    id: 'hukou',
    name: '新竹成功路站',
    city: '新竹縣',
    address: '新竹縣湖口鄉信勢村25鄰成功路485號',
    phone: '035-998989',
    time: '24 小時全年無休',
    services: ['人工加油、洗車服務、自助加油'],
    image: '/CPC_Kh03.jpg',
    top: '31%', 
    left: '70%'
  },
  {
    id: 'yangmei',
    name: '屏東天寶站',
    city: '屏東市',
    address: '屏東市復興南路二段28號',
    phone: '(08) -7511055',
    time: '24 小時全年無休',
    services: ['人工加油、自助加油、洗車服務'],
    image: '/CPC_Kh03.jpg',
    top: '27%', 
    left: '75%'
  }
];

export default function Branch() {
  // 狀態：目前選中的分站
  const [activeTab, setActiveTab] = useState(branchData[0].id);
  const currentBranch = branchData.find(data => data.id === activeTab) || branchData[0];

  return (
    <div className="w-full p-10 sm:p-[70px] bg-white min-h-screen">
      
      {/* 漸顯特效 CSS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>

      {/* 主頁面 */}
      <h1 className="font-noto text-5xl font-black text-center text-[#16425B] tracking-widest">服務據點</h1>
      <div className="w-25 h-px mt-5 mx-auto rounded-full bg-[#16425B]/60"></div>

      <div className="animate-fade-up mt-15 grid grid-cols-1 lg:grid-cols-3 gap-25 max-w-7xl mx-auto">   
        {/* 互動台灣地圖 */}
          <div className="px-10 w-full relative col-span-1 aspect-[3/4] sm:aspect-square lg:aspect-auto">
            <Image src="/Taiwan.png" alt="Taiwan" fill className="object-contain opacity-30" /> 
            
            {/* 地圖上的圖釘 */}
            {branchData.map((branch) => (
              <button
              key={`map-${branch.id}`}
              onClick={() => setActiveTab(branch.id)}
              className={`absolute flex justify-center items-center transform -translate-x-1/2 -translate-y-full 
                transition-all duration-300 hover:scale-110 group
                ${activeTab === branch.id ? 'text-[#16425B] z-10' : 'text-gray-400 z-0'}
              `}
              style={{ top: branch.top, left: branch.left }}
            >

              <TbMapPinFilled className="w-3 h-3"/>
              <div className={`
                absolute left-full ml-1 text-[14px] whitespace-nowrap font-medium
                ${activeTab === branch.id ? 'opacity-100' : 'opacity-100'}
              `}>
                {branch.name}
              </div>
            </button>
            ))}
          </div>


        {/* 右側頁籤與站點資訊 */}
        <div className="flex flex-col h-full col-span-2">
          
          {/* 1. 上方頁籤  */}
          <div className="flex flex-row overflow-x-auto scrollbar-hide shrink-0 
          gap-3 pb-1 border-b-2 border-gray-100">
            {branchData.map((tab) => (
              <button
                key={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-3 font-bold text-[18px] whitespace-nowrap transition-colors duration-300
                  ${activeTab === tab.id 
                    ? 'bg-[#16425B] text-white' // 作用中
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-200' // 未作用
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* 2. 詳細資訊 */}
          <div className="flex-1 mt-6">
            <div 
              key={activeTab} 
              className="p-10 sm:p-10 animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center shadow-sm
              border border-gray-200 border-t-4 border-t-[#16425B] bg-[#16425B]/5"
            >

              <div>
                  {/* 標題 */}
                  <h2 className="font-noto text-4xl font-bold text-gray-700 tracking-wider">
                    {currentBranch.name}
                  </h2>
                  <div className="w-20 h-px mt-5 mb-8 rounded-full bg-[#16425B]/60"></div>
                  
                  {/* 下方資訊 */}
                  <div className="flex flex-col space-y-5 text-[17px]">
                    <div className="flex items-start">
                      <div className="text-[#16425B] font-bold min-w-[90px]">據點地址</div>
                      <div className="flex flex-col items-start">
                        <div className="text-gray-700">{currentBranch.address}</div>
                        {/* 點擊導航 */}
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentBranch.address)}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 px-4 py-1.5 text-sm text-white bg-[#16425B] 
                          transition-colors hover:bg-[#16425B]/90 inline-block"
                        >
                          開啟 Google 導航 →
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#16425B] font-bold min-w-[90px]">聯絡電話</div>
                      <div className="text-gray-700">{currentBranch.phone}</div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#16425B] font-bold min-w-[90px]">營業時間</div>
                      <div className="text-gray-700">{currentBranch.time}</div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-[#16425B] font-bold min-w-[90px]">服務項目</div>
                      <div className="text-gray-700">{currentBranch.services}</div>
                    </div>
                  </div>
              </div>
              
              <div className="relative w-full aspect-square sm:aspect-auto sm:h-full shadow-lg">
                <Image 
                  src={currentBranch.image}
                  alt={currentBranch.name}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
