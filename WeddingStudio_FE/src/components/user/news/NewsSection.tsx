import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import { fetchNewsByService } from "../../../utils/News";
import type { News } from "../../../data/News";
import { useParams } from "react-router-dom";

const NewsSection: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  const [news, setNews] = useState<News[]>([]); // Ensure news is always an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await fetchNewsByService(id || null); // Pass null if id is not provided
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news by service:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!news.length) {
    return (
      <div className="text-center text-gray-600">Không có tin tức nào.</div>
    );
  }

  return (
    <div className="flex-1 bg-white">
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-bold text-red-500 mb-4 font-amatic">
          TIN TỨC
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Để giúp các bạn có những album tuyệt vời, độc đáo và thú vị, đội ngũ
          những nhiếp ảnh gia nhiệt tình, sáng tạo và sự thông minh trong việc
          lựa chọn những concept cũng như stylist chất lượng sẽ giúp các cặp đôi
          trong từng chi tiết để có những khung hình đẹp nhẹ nhàng, tươi sáng và
          tự nhiên.
        </p>
      </div>

      <div>
        {news.map((item) => (
          <NewItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
