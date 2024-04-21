"use client";

import { TikTokEmbed } from "react-social-media-embed";

const videos = [
  "https://www.tiktok.com/@zecretagent/video/7352851709376335120",
  "https://www.tiktok.com/@zecretagent/video/7352461731014266113",
  "https://www.tiktok.com/@zecretagent/video/7355048997834263825",
  "https://www.tiktok.com/@zecretagent/video/7352491007558044929",
  "https://www.tiktok.com/@zecretagent/video/7344703000901946625",
  "https://www.tiktok.com/@zecretagent/video/7345414005546028290",
];

const TikTok = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {videos.map((video) => (
        <TikTokEmbed data-autoplay={false} url={video} className="mx-auto" width={325} />
      ))}
    </div>
  );
};

export default TikTok;
