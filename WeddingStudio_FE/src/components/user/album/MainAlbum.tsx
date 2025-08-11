import { useEffect, useState } from "react";
import { fetchPaginatedAlbumCovers } from "../../../utils/AlbumCover";
import { Heart } from "lucide-react";
import AlbumItem from "./AlbumItem";
import type { AlbumCover } from "../../../data/AlbumCorver";

const MainAlbum: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumCover[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const response = await fetchPaginatedAlbumCovers(1, 12); // Fetch the first page with a limit of 12
        setAlbums(response.albumCovers);
      } catch (error) {
        console.error("Error fetching albums:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

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

      {loading ? (
        <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumItem
              key={album._id}
              id={album._id}
              title={album.title}
              location={album.location || "Không xác định"}
              imageUrl={album.coverImage}
              imageAlt={album.description || "Album cover"}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MainAlbum;
