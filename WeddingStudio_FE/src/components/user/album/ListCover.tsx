import { useEffect, useState } from "react";
import { fetchPaginatedAlbumCovers } from "../../../utils/AlbumCover";
import type { AlbumCover } from "../../../data/AlbumCorver";

const ListCover: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumCover[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const response = await fetchPaginatedAlbumCovers(1, 12);
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
    <section className="flex flex-col items-center justify-center container mx-auto pb-8 px-[10%] bg-white">
      <h2 className="text-4xl font-amatic font-bold text-[#d36e6e] my-4 tracking-widest">
        TẤT CẢ SẢN PHẨM
      </h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6 my-4">
        <p className="text-md text-gray-700 text-left p-6">
          Album ảnh cưới đẹp Đà Lạt của diễn viên Thành Đạt và Hotgirl Diệp Bảo
          Ngọc được Weding Studio thực hiện tại Đà lạt mộng mơ. Cô dâu Hotgirl
          Diệp Bảo Ngọc bên chú rể điển trai Thành Đạt trong trang phục cưới
          trắng tinh khôi, nụ cười tràn đầy hạnh phúc như tôn thêm nét đẹp thanh
          tú của cô dâu, đây là một cặp trai tài gái sắc của màn ảnh Việt.
        </p>
      </div>
      {loading ? (
        <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div
              key={album._id}
              className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105"
            >
              <img
                src={album.coverImage}
                alt={album.description || "Album cover"}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-amatic text-[#d36e6e] font-bold mb-2 text-center tracking-wider">
                {album.title}
              </h3>
              <div className="flex items-center justify-center text-gray-500 text-sm mb-1">
                <span className="mr-1">📍</span>
                <span>{album.location?.city || "Không xác định"}</span>
              </div>
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <span className="mr-1">Loại sản phẩm:</span>
                <span className="text-gray-800 font-semibold ml-1">
                  Album cưới
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ListCover;
