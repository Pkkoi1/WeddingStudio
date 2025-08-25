import { commentAPI } from "../api/API";

// Kiểu dữ liệu cho comment trả về từ backend
export interface Comment {
  _id: string;
  news: string;
  user: {
    name: string;
    email: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
}

// Lấy danh sách bình luận cho 1 news
export const fetchCommentsByNews = async (
  newsId: string
): Promise<Comment[]> => {
  const data = await commentAPI.getCommentsByNews(newsId);
  return data;
};

// Tạo bình luận mới cho 1 news
export const createComment = async (
  newsId: string,
  name: string,
  email: string,
  content: string
): Promise<Comment> => {
  const data = await commentAPI.createComment(newsId, { name, email, content });
  return data;
};

// Kiểu dữ liệu cho response xóa comment
export interface DeleteCommentResponse {
  message: string;
  deletedCommentId?: string;
}

// Xóa bình luận
export const deleteComment = async (
  commentId: string,
  token?: string
): Promise<DeleteCommentResponse> => {
  const data = await commentAPI.deleteComment(commentId, token);
  return data;
};
