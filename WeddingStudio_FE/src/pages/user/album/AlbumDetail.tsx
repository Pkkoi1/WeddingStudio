import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Album } from "../../../data/Album";
import { fetchAlbumById } from "../../../utils/Album";
import AlbumCollection from "../../../components/user/album/AlbumCollection";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Share from "../../../components/user/communicate/Share";

const AlbumDetail: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        if (albumId) {
          const data = await fetchAlbumById(albumId);
          setAlbum(data);
        }
      } catch (e) {
        setAlbum(null);
        console.error("Error fetching album detail:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [albumId]);

  if (loading) {
    return <p className="text-center py-10">Đang tải dữ liệu...</p>;
  }
  if (!album) {
    return (
      <p className="text-center py-10 text-red-500">Không tìm thấy album.</p>
    );
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Album", href: "/album" },
          { label: album.title },
        ]}
      />
      <section className="container mx-auto px-4 lg:px-[10%] py-8 w-screen bg-white">
        <h1 className="text-3xl font-amatic font-bold text-[#d36e6e] text-center mb-2 uppercase tracking-widest">
          {album.title}
        </h1>
        <div className="text-center text-2xl font-semibold text-[#e74c3c] mb-2">
          {album.price?.toLocaleString("vi-VN")}₫
        </div>
        <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
          {album.description}
        </p>
        <AlbumCollection images={album.images} />
        <Share></Share>
      </section>
    </>
  );
};

export default AlbumDetail;
