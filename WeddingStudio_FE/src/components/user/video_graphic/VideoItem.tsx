import { Play } from "lucide-react";

interface VideoItemProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoAlt: string;
}

export default function VideoItem({
  title,
  thumbnailUrl,
  videoAlt,
}: VideoItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={thumbnailUrl || "/placeholder.svg"}
          alt={videoAlt}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Hover Overlay with Play Button */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-8 w-8 text-[#e74c3c] fill-current" />
          </div>
        </div>
        {/* Video Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          HD
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-[#e74c3c] font-amatic">
          {title}
        </h3>
      </div>
    </div>
  );
}
