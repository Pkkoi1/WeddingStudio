import { Heart } from "lucide-react";
import VideoItem from "./VideoItem";

export default function VideoGraphic() {
  const videos = [
    {
      id: "1",
      title: "ALBUM TẠI CÔ TÔ",
      thumbnailUrl: "/tropical-wedding.png",
      videoAlt: "Wedding video at Co To",
    },
    {
      id: "2",
      title: "ALBUM TẠI ÁO",
      thumbnailUrl: "/mountain-wedding.png",
      videoAlt: "Wedding video in Austria",
    },
    {
      id: "3",
      title: "ALBUM TẠI PHÚ QUỐC",
      thumbnailUrl: "/tropical-wedding.png",
      videoAlt: "Wedding video in Phu Quoc",
    },
  ];

  return (
    <section className="relative py-16 bg-cover bg-center px-[10%] ">
      {/* Marble texture overlay */}
      <div className="absolute inset-0 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-amatic">
            VIDEO GRAPHIC
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gray-400"></div>
            <Heart className="h-6 w-6 text-[#e74c3c] mx-2" />
            <div className="w-20 h-px bg-gray-400"></div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Quay phim cưới HD – Hãy để chúng tôi ghi lại những khoảnh khắc hạnh
            phúc nhất trong đời bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {videos.map((video) => (
            <VideoItem
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              videoAlt={video.videoAlt}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          <div className="h-2 w-2 bg-[#e74c3c] rounded-full"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Floating Heart Icon */}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="bg-[#e74c3c] text-white p-3 rounded-full shadow-lg hover:bg-[#c0392b] transition-colors duration-300 cursor-pointer">
          <Heart className="h-6 w-6 fill-current" />
        </div>
      </div>
    </section>
  );
}
