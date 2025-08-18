import type { AlbumImage } from "../../../data/Album";

interface AlbumCollectionProps {
  images: AlbumImage[];
}

const AlbumCollection: React.FC<AlbumCollectionProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-all bg-white p-4"
        >
          <img
            src={img.url}
            alt={img.caption || `Ảnh ${idx + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default AlbumCollection;
