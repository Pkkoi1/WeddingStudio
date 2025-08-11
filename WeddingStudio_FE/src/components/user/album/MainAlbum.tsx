import { Heart } from "lucide-react";
import AlbumItem from "./AlbumItem";

const MainAlbum: React.FC = () => {
  // Sample album data
  const albums = [
    {
      id: "1",
      title: "ALBUM TẠI CÔ TÔ",
      location: "Vĩnh Phúc",
      imageUrl: "/tropical-wedding.png",
      imageAlt: "Wedding album at Co To",
    },
    {
      id: "2",
      title: "ALBUM TẠI ÁO",
      location: "Áo",
      imageUrl: "/mountain-wedding.png",
      imageAlt: "Wedding album in Austria",
    },
    {
      id: "3",
      title: "ALBUM TẠI PHÚ QUỐC",
      location: "Phú Quốc",
      imageUrl: "/tropical-wedding.png",
      imageAlt: "Wedding album in Phu Quoc",
    },
    {
      id: "4",
      title: "ALBUM TẠI ĐÀ LẠT",
      location: "Đà Lạt",
      imageUrl: "/wedding-couple-flower-mountains.png",
      imageAlt: "Wedding album in Da Lat",
    },
    {
      id: "5",
      title: "ALBUM TẠI HỘI AN",
      location: "Hội An",
      imageUrl: "/wedding-couple-ancient-town-lanterns.png",
      imageAlt: "Wedding album in Hoi An",
    },
    {
      id: "6",
      title: "ALBUM TẠI SÀI GÒN",
      location: "Sài Gòn",
      imageUrl: "/modern-city-wedding.png",
      imageAlt: "Wedding album in Saigon",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-amatic">
          ALBUM TIÊU BIỂU
        </h2>
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-px bg-gray-300"></div>
          <Heart className="h-6 w-6 text-[#e74c3c] mx-2" />
          <div className="w-20 h-px bg-gray-300"></div>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Những Album tiêu biểu mà chúng tôi đã thực hiện được
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <AlbumItem
            key={album.id}
            id={album.id}
            title={album.title}
            location={album.location}
            imageUrl={album.imageUrl}
            imageAlt={album.imageAlt}
          />
        ))}
      </div>
    </section>
  );
};

export default MainAlbum;
