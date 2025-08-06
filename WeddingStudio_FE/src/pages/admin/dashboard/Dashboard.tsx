import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">
            Tổng khách hàng
          </h3>
          <div className="text-3xl font-bold text-blue-600">150</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Đơn hàng mới</h3>
          <div className="text-3xl font-bold text-green-600">25</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">
            Doanh thu tháng
          </h3>
          <div className="text-3xl font-bold text-purple-600">120M</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Album ảnh</h3>
          <div className="text-3xl font-bold text-orange-600">89</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Đơn hàng gần đây</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span>Nguyễn Văn A</span>
              <span className="text-green-600">Hoàn thành</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Trần Thị B</span>
              <span className="text-yellow-600">Đang xử lý</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Lê Văn C</span>
              <span className="text-blue-600">Mới</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Thống kê nhanh</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Gói cơ bản</span>
              <span className="font-semibold">45%</span>
            </div>
            <div className="flex justify-between">
              <span>Gói tiêu chuẩn</span>
              <span className="font-semibold">35%</span>
            </div>
            <div className="flex justify-between">
              <span>Gói premium</span>
              <span className="font-semibold">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
