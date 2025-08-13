import React, { useEffect, useState } from "react";
import SidebarNav from "../../../components/common/SidebarNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import { fetchNewsById } from "../../../utils/News";
import type { News } from "../../../data/News";
import Share from "../../../components/user/communicate/Share";
import CommentForm from "../../../components/user/communicate/CommentForm";
import CommentList from "../../../components/user/communicate/CommentList";

const serviceItems = [
  { label: "Album", href: "/album" },
  { label: "Dịch vụ", href: "/dich-vu", hasDropdown: true },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

const galleryItems = [
  { label: "Album", href: "/album" },
  { label: "Dịch vụ", href: "/dich-vu", hasDropdown: true },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
];

const ServiceDetail: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const [news, setNews] = useState<News | null>(null);
  const [comments, setComments] = useState<
    { name: string; comment: string; createdAt?: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      if (newsId) {
        try {
          const newsData = await fetchNewsById(newsId);
          // Nếu backend trả về comments, lấy, nếu không thì []
          setComments((newsData as any).comments || []);
          setNews(newsData);
        } catch (error) {
          setNews(null);
          setComments([]);
          console.error("Error fetching news by ID:", error);
        }
      }
    };
    fetchData();
  }, [newsId]);

  const handleCommentSubmit = (data: {
    name: string;
    email: string;
    comment: string;
  }) => {
    setComments([
      ...comments,
      {
        name: data.name,
        comment: data.comment,
        createdAt: new Date().toLocaleString(),
      },
    ]);
  };

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dịch vụ", href: "/services" },
    ...(news ? [{ label: news.title }] : []),
  ];

  return (
    <div className="container w-screen">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col lg:flex-row gap-8 bg-white px-[10%] py-[2%] text-left">
        <div className="lg:w-1/4">
          <SidebarNav title="DỊCH VỤ" items={serviceItems} />
          <SidebarNav title="THƯ VIỆN" items={galleryItems} />
        </div>
        <div className="lg:w-3/4">
          {news ? (
            <div>
              <h1 className="text-4xl font-amatic text-red-500 mb-4">
                {news.title}
              </h1>
              <div
                className="text-gray-700 mb-6"
                style={{ whiteSpace: "pre-line" }}
              >
                {news.content?.[0]?.text}
              </div>
              {news.content?.[0]?.img && (
                <div className="flex justify-center">
                  <img
                    src={news.content[0].img}
                    alt={news.title}
                    className="max-w-full h-auto rounded shadow"
                    style={{ maxWidth: 600 }}
                  />
                </div>
              )}
              <Share />
              <CommentList comments={comments} />
              <CommentForm onSubmit={handleCommentSubmit} />
            </div>
          ) : (
            <div>Đang tải...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
