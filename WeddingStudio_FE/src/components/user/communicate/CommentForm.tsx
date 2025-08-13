import React, { useState } from "react";

interface CommentFormProps {
  onSubmit: (data: { name: string; email: string; comment: string }) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !comment) return;
    onSubmit({ name, email, comment });
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold mb-4">Viết bình luận của bạn:</h3>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          className="border border-gray-300 rounded px-4 py-3 flex-1"
          placeholder="Họ tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded px-4 py-3 flex-1"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        className="border border-gray-300 rounded px-4 py-3 w-full mb-4 min-h-[100px]"
        placeholder="Viết bình luận của bạn..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          style={{ backgroundColor: "#d44b4b", color: "white" }}
          className="cursor-pointer px-10 py-3 rounded-full font-semibold text-base hover:bg-[#b93d3d] transition"
        >
          GỬI BÌNH LUẬN
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
