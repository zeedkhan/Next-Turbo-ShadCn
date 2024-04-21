"use client";

import { ReactElement, useState } from "react";
import { FaFacebook, FaLine, FaTiktok } from "react-icons/fa";
import { Button, Card, CardDescription, CardHeader, CardTitle } from "@turbocharger/ui";
import { cn } from "@turbocharger/utils";
import TikTok from "./tiktok";

type SocialMediaPlatforms = "Tiktok" | "Facebook" | "Line";

interface Socail {
  title: SocialMediaPlatforms;
  icon: ReactElement;
}

const socialMediaElements: Socail[] = [
  {
    title: "Tiktok",
    icon: <FaTiktok size={20} />,
  },
  {
    title: "Line",
    icon: <FaLine size={20} className="text-green-600" />,
  },
  {
    title: "Facebook",
    icon: <FaFacebook size={20} className="text-blue-700" />,
  },
];

const SocialMediaContent = () => {
  const [selectedSocialMedia, setSocialMedia] = useState<SocialMediaPlatforms>("Line");

  const handleClick = (social: SocialMediaPlatforms) => {
    setSocialMedia(social);
  };

  return (
    <Card className="mt-5 pb-8">
      <CardHeader>
        <CardTitle className="text-center">
          <p>ผลงานส่วนหนึ่งของทีมงานเรา</p>
        </CardTitle>
        <CardDescription className="pt-4 text-center dark:text-white">
          <p>ผลงานส่วนหนึ่งของทางเรา ที่เราได้นำมาเสนอ</p>
          <p>รถมีการซื้อขาย ตลอดเวลา</p>
          <p>รับชมตัวอย่างตาม Platforms ต่าง ๆ ได้ข้างล่าง</p>
        </CardDescription>

        <div className="flex space-x-2 pt-4">
          {socialMediaElements.map((social) => (
            <Button
              onClick={() => handleClick(social.title)}
              className={cn(
                "active:scale-95",
                "border dark:hover:bg-white",
                `${selectedSocialMedia === social.title ? "bg-blue-500  text-white hover:bg-blue-500 dark:hover:bg-blue-500" : "bg-slate-100/50 text-black dark:bg-white"}`
              )}
              key={social.title}
            >
              {social.icon}
              <p className="pl-2">{social.title}</p>
            </Button>
          ))}
        </div>
      </CardHeader>

      <div className="mt-5">
        {selectedSocialMedia === "Tiktok" && (
          <div>
            <TikTok />
          </div>
        )}
        {selectedSocialMedia === "Facebook" && <div>Facebook here</div>}
        {selectedSocialMedia === "Line" && <div>Line here</div>}
      </div>
    </Card>
  );
};

export default SocialMediaContent;
