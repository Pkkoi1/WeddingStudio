import React, { useEffect, useState } from "react";
import SidebarNav from "../../../components/common/SidebarNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import { fetchNewsById } from "../../../utils/News";
import type { News } from "../../../data/News";
import { fetchCommentsByNews, createComment } from "../../../utils/Comment";
import type { Comment as CommentType } from "../../../utils/Comment";
import Share from "../../../components/user/communicate/Share";
import CommentForm from "../../../components/user/communicate/CommentForm";
import CommentList from "../../../components/user/communicate/CommentList";

const ServiceDetail: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const [news, setNews] = useState<News | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (newsId) {
        try {
          const newsData = await fetchNewsById(newsId);
          setNews(newsData);
          // Lấy comment từ API mới
          const commentList = await fetchCommentsByNews(newsId);
          setComments(commentList);
        } catch (error) {
          setNews(null);
          setComments([]);
          console.error("Error fetching news by ID:", error);
        }
      }
    };
    fetchData();
  }, [newsId]);

  const handleCommentSubmit = async (data: {
    name: string;
    email: string;
    comment: string;
  }) => {
    if (!newsId) return;
    try {
      // Gửi comment lên backend với đủ name, email, content
      const newComment = await createComment(
        newsId,
        data.name,
        data.email,
        data.comment
      );
      setComments([...comments, newComment]);
    } catch (error) {
      // Có thể hiển thị thông báo lỗi ở đây
      console.error("Error creating comment:", error);
    }
  };

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dịch vụ", href: "/services" },
    ...(news ? [{ label: news.title }] : []),
  ];

  return (
    <div className="container w-full max-w-full px-0">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 bg-white px-2 md:px-4 lg:px-[10%] py-4 md:py-[2%] text-left">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block lg:w-1/4">
          <SidebarNav title="DỊCH VỤ" />
        </div>
        {/* Main content */}
        <div className="w-full lg:w-3/4">
          {news ? (
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-amatic text-red-500 mb-4">
                {news.title}
              </h1>
              <div
                className="text-gray-700 mb-6 text-base md:text-lg"
                style={{ whiteSpace: "pre-line" }}
              >
                {news.content?.[0]?.text}
              </div>
              {news.content?.[0]?.img && (
                <div className="flex justify-center max-w-[600px]">
                  <img
                    src={news.content[0].img}
                    alt={news.title}
                    className="max-w-full h-auto rounded shadow"
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
      {/* Sidebar for mobile/tablet */}
      <div className="block lg:hidden px-2 md:px-4">
        <SidebarNav title="DỊCH VỤ" />
      </div>
    </div>
  );
};

export default ServiceDetail;
