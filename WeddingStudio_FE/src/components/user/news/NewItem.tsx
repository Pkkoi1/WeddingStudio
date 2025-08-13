import { User } from "lucide-react";
import type { News } from "../../../data/News";
import { useNavigate } from "react-router-dom";

const NewItem: React.FC<News> = ({ title, admin, content, _id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="mb-8 bg-white rounded-lg shadow-sm overflow-hidden text-left cursor-pointer hover:shadow-md transition"
      onClick={() => navigate(`/services/detail/${_id}`)}
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="relative h-64 md:h-full">
            <img
              src={content[0]?.img || "/placeholder.svg"} // Use the first image from content
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-red-500">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <User className="w-4 h-4 mr-1" />
            <span>Admin: {admin?.fullName || "Không xác định"}</span>{" "}
            {/* Hiển thị tên đầy đủ của admin */}
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            {content[0]?.text || "Không có mô tả"}{" "}
            {/* Use service description */}
          </p>
          <span className="text-red-500 hover:text-red-600 text-sm font-medium">
            Đọc thêm »
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
