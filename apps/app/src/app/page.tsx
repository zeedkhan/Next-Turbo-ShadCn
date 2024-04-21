import { cn } from "@turbocharger/utils";
import SocialMediaContent from "@/components/shared/social-media-content";

const Home = () => {
  return (
    <div className="mx-10 mt-16 md:mx-20">
      <div className="w-full">
        <div className="flex flex-col space-y-4">
          <h1
            className={cn(
              "font-display pt-2 text-center text-4xl font-bold text-transparent [text-wrap:balance]",
              "bg-gradient-to-br from-black to-blue-500 bg-clip-text",
              "dark:bg-gradient-to-br dark:from-white dark:to-blue-500 dark:bg-clip-text "
            )}
          >
            ผู้เชี่ยวชาญด้านการซื้อ - ขายรถ
          </h1>
          <h2
            className={cn(
              "font-display text-center text-3xl font-bold text-transparent [text-wrap:balance]",
              "bg-gradient-to-br from-black to-blue-500 bg-clip-text",
              "dark:bg-gradient-to-br dark:from-white dark:to-blue-500 dark:bg-clip-text "
            )}
          >
            ด้วยประสบการณ์กว่า 20 ปี
          </h2>
        </div>
      </div>

      <div className="pt-14 text-center text-gray-600 md:mx-20 md:py-8">
        <p className="leading-loose dark:text-white">
          เราเชี่ยวชาญในการให้บริการทางด้านการซื้อ - ขายรถใหม่และมือสองในประเทศไทย
          ด้วยความเชี่ยวชาญกว่า 20 ปีในวงการรถยนต์
        </p>
        <p className="mt-2 leading-loose dark:text-white">
          ทีมงานของเราพร้อมให้คำปรึกษาและบริการที่ดีที่สุดเพื่อให้คุณพบรถที่ตรงกับความต้องการและงบประมาณของคุณ
          ไม่ว่าคุณจะซื้อหรือขายรถ เราคือสถานที่ที่คุณควรมองหา!
        </p>
      </div>

      <SocialMediaContent />
    </div>
  );
};

export default Home;
