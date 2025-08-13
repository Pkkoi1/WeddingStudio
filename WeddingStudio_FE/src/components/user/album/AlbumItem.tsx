import { MapPin, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AlbumItemProps {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  type?: "cover" | "album";
}

export default function AlbumItem({
  id,
  title,
  location,
  imageUrl,
  imageAlt,
  type = "cover",
}: AlbumItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "cover") {
      navigate(`/album/cover/${id}`);
    } else {
      console.log("Album id:", id);
      // TODO: Xử lý logic khi click vào album
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={handleClick} // Attach the click handler here
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Link className="h-8 w-8 text-[#e74c3c]" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#e74c3c] mb-2 font-amatic">
          {title}
        </h3>
        <div className="flex justify-center items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">
            Địa chỉ chụp: <strong className="font-semibold">{location}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
