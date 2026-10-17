"use client"
import Image from 'next/image'

{/* 職缺資料 */} 
const jobsData = [
  {
    id: 1,
    title: "早班服務人員",
    salary: "月薪 38,000 - 50,000 元",
    location: "高雄總站",
    time: "07:00 - 15:00",
    description: "負責車輛加油、洗車服務，熟悉基本電腦操作，推廣多角化商品、環境清潔維護。"
  },
  {
    id: 2,
    title: "中班服務人員",
    salary: "月薪 34,000 - 38,000 元",
    location: "高雄總站",
    time: "15:00 - 23:00",
    description: "執行加油站日常營運作業，協助帳務結算與設備基礎維護。適合喜歡晚起或夜間活動者，享有夜間津貼補助。"
  },
  {
    id: 3,
    title: "儲備站長 / 幹部",
    salary: "月薪 40,000 - 55,000 元",
    location: "依公司分發 (高雄區)",
    time: "排班制 (依站點營運彈性調整)",
    description: "負責加油站整體營運管理、人員調度與教育訓練、客訴處理及業績目標達成。需具備兩年以上相關管理經驗，具備危險物品運送人員證照者佳。"
  }
];

{/* 公司福利 */} 
const benefitsData = [
  { 
    id: '01', 
    title: '優渥薪酬與獎金', 
    desc: '提供具競爭力的本薪，並享有年終獎金、三節禮金、績效獎金及夜班/輪班津貼，讓您的付出獲得實質的豐厚回報。' 
  },
  { 
    id: '02', 
    title: '完善保險與健康守護', 
    desc: '除法定勞保、健保與勞退提撥外，公司額外為同仁投保員工團體保險，並定期舉辦年度健康檢查，全面守護您與家人的健康。' 
  },
  { 
    id: '03', 
    title: '專業培訓與升遷', 
    desc: '無經驗可！我們提供完整的新人職前訓練、工安教育，並有順暢的考核與晉升管道，輔導考取相關危險物品運送等專業證照。' 
  },
  { 
    id: '04', 
    title: '貼心職場福利', 
    desc: '免費提供高質感企業制服與安全裝備。不定期舉辦員工聚餐、年終尾牙抽獎，並享有員工專屬的加油與洗車折扣優惠。' 
  }
];

export default function Joinus() {

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
        {/* 職缺介紹 */}
        <div className="p-10 sm:p-[100px] shadow-md border-b border-gray-200">
          <h1 className="font-noto text-5xl font-black text-center text-[#16425B] tracking-widest">目前職缺</h1>
          <div className="w-25 h-px mt-5 mx-auto rounded-full bg-[#16425B]/60"></div>

            <div className="animate-fade-up mt-15 gap-10 grid sm:grid-cols-2 grid-cols-1">        
              {jobsData.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-[#16425B]/5 border border-gray-200 border-t-3 border-t-[#16425B] p-7 
                  shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* 職稱*/}
                  <h2 className="font-noto text-3xl font-bold text-gray-900">
                    {job.title}
                  </h2>
                  <div className="w-10 h-[1px] bg-[#16425B] mt-3"></div>

                  {/* 職缺資訊*/}
                  <div className="flex flex-col mt-5 space-y-3 text-[17px]"> 
                    <div className="flex items-start">
                      <span className="text-[#16425B] font-bold min-w-[90px]">薪資待遇</span>
                      <span className="text-gray-700">{job.salary}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-[#16425B] font-bold min-w-[90px]">工作地點</span>
                      <span className="text-gray-700">{job.location}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-[#16425B] font-bold min-w-[90px]">工作時間</span>
                      <span className="text-gray-700">{job.time}</span>
                    </div>

                    <div className="flex items-start mt-2 pt-4 border-t border-gray-200">
                      <span className="text-[#16425B] font-bold min-w-[90px]">工作內容</span>
                      <span className="text-gray-700 leading-relaxed text-justify">
                        {job.description}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
        </div>

        {/* 公司福利 */}
        <div className="w-full p-10 sm:p-[100px] shadow-md border-b border-gray-200 bg-[#16425B]/5">
        <h2 className="font-noto text-5xl font-black text-center text-[#16425B] tracking-widest">公司福利</h2>
        <div className="w-25 h-px mt-5 mx-auto rounded-full bg-[#16425B]/60"></div>

        {/* 條列區塊  */}
        <div className="mt-15 max-w-4xl mx-auto flex flex-col">
          {benefitsData.map((benefit, index) => (
            <div 
              key={benefit.id}
              className="group flex flex-col sm:flex-row items-start py-7 border-b border-gray-200 first:border-t animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* 大數字 */}
              <div className="font-noto text-5xl font-black text-gray-300 mr-8 sm:mb-0 min-w-[60px] transition-colors duration-300 group-hover:text-[#16425B]/50">
                {benefit.id}
              </div>

              {/* 文字標題與內容 */}
              <div className="flex flex-col flex-1">
                <h3 className="font-noto text-2xl font-bold text-gray-700 tracking-wider transition-colors duration-300 group-hover:text-[#16425B]">
                  {benefit.title}
                </h3>
                <p className="mt-3 font-light text-[17px] leading-relaxed text-justify">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>       
     
      </div>
    </div>
  );
}
