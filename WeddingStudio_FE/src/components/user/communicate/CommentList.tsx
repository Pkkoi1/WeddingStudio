import React from "react";

interface Comment {
  name: string;
  comment: string;
  createdAt?: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4">Bình luận:</h3>
    {comments.length === 0 ? (
      <div className="text-gray-500">Chưa có bình luận nào.</div>
    ) : (
      <ul>
        {comments.map((c, idx) => (
          <li key={idx} className="mb-6 border-b pb-4">
            <div className="font-semibold text-[#e74c3c]">{c.name}</div>
            <div className="text-gray-700 mb-1">{c.comment}</div>
            {c.createdAt && (
              <div className="text-xs text-gray-400">{c.createdAt}</div>
            )}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default CommentList;
