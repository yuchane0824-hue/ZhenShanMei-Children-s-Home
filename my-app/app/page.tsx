import Image from "next/image";
import MenuPC from "../component/menuPC"
import MenuPh from "../component/menuPh"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* 選單 */}      
      <div className="w-full">
        <div className="block sm:hidden">
        <MenuPh />
        </div>

        <div className="sm:block hidden">
          <MenuPC />
        </div>
      </div>      

      {/* 主頁面 */}
      <div className="w-full">
        <div>
          {/* 上半部 */}
          <div className="flex p-[20px] gap-5">

            <div className="p-[10px] mt-3 rounded-md md:w-1/2" style={{backgroundColor: '#EFF0EA'}}>
              <p className="text-lg font-bold">學經歷</p>
              <p>2022 加入政治大學心理學系</p>
              <p>2023 心理系系代</p>
              <p>2025 雙主修數位內容學程</p>        
            </div>

            <div className="p-[10px] mt-3 rounded-md md:w-1/2" style={{backgroundColor: '#EFF0EA'}}>
              <p className="text-lg font-bold">專長</p>
              <p>影片剪輯 Davinci Resolve, Premiere Pro, Capcut</p>
              <p>動畫建模 Blender（學習中）</p>
            </div>

          </div>

          {/* 下半部 */}
          <div className="flex p-[20px]">
            <Image src="/IMG_3614.JPG" alt="mypic" width={1980} height={1020}/>
          </div>
        </div>
      </div>
    </div>
  );
}
