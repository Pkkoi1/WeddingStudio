import React from "react";

const Album: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ALBUM ẢNH CƯỚI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder cho album ảnh */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">Album {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
