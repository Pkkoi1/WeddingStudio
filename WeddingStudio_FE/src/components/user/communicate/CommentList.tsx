import React from "react";

// Kiểu dữ liệu comment lấy từ backend
export interface Comment {
  user: {
    name: string;
    email: string;
  };
  content: string;
  createdAt?: string;
}

interface CommentListProps {
  comments: Comment[];
}

const AVATAR_URL =
  "https://static.vecteezy.com/system/resources/previews/048/926/072/non_2x/gold-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg";

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4">Bình luận:</h3>
    {comments.length === 0 ? (
      <div className="text-gray-500">Chưa có bình luận nào.</div>
    ) : (
      <ul>
        {comments.map((c, idx) => (
          <li key={idx} className="mb-6  pb-4 flex items-start gap-3">
            <img
              src={AVATAR_URL}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="flex-1">
              <div className="font-semibold mb-2 text-[#e74c3c]">
                {c.user?.name || "Ẩn danh"}
              </div>
              {c.createdAt && (
                <div className="text-xs text-gray-400 mb-2">
                  {new Date(c.createdAt).toLocaleString()}
                </div>
              )}
              <div className="text-gray-700 mb-1">{c.content}</div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default CommentList;
