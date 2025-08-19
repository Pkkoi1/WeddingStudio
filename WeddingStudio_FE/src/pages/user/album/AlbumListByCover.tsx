import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AlbumItem from "../../../components/user/album/AlbumItem";
import type { Album } from "../../../data/Album";
import { fetchAlbumsByCover } from "../../../utils/Album";
import Breadcrumb from "../../../components/common/Breadcrumb";

const AlbumListByCover: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const coverId = location.state?.coverId;
  const coverTitle = location.state?.coverTitle || slug || "Album";
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        if (coverId) {
          const response = await fetchAlbumsByCover(coverId);
          setAlbums(response || []);
        }
      } catch (error) {
        console.error("Error fetching albums by cover:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, [coverId]);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Album", href: "/album" },
          { label: coverTitle },
        ]}
      />
      <section className="container mx-auto py-8 px-4 lg:px-[10%] bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font-amatic text-center">
          Danh sách <span className="text-[#e74c3c]">{coverTitle}</span>
        </h2>
        {loading ? (
          <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
        ) : albums.length === 0 ? (
          <p className="text-center text-gray-500">Không có album nào.</p>
        ) : (
          <div className="grid grid-cols-2  lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <AlbumItem
                key={album._id}
                id={album._id}
                title={album.title}
                location={
                  typeof album.location === "string"
                    ? album.location
                    : album.location?.city || "Không xác định"
                }
                imageUrl={album.coverImage}
                imageAlt={album.description || "Album cover"}
                type="album"
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default AlbumListByCover;
