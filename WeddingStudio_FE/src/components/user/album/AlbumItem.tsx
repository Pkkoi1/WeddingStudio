import { MapPin } from "lucide-react";

interface AlbumItemProps {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
}

const AlbumItem: React.FC<AlbumItemProps> = ({
  id,
  title,
  location,
  imageUrl,
  imageAlt,
}) => {
  const handleClick = () => {
    console.log(`Album ${id} clicked!`); // Logic click trong component con
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleClick} // Sử dụng hàm click định nghĩa trong component con
    >
      <div className="relative h-64 w-full">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#e74c3c] mb-2 font-amatic">
          {title}
        </h3>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">Địa chỉ chụp: {location}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
