import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">LIÊN HỆ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Địa chỉ:</h3>
              <p className="text-gray-600">123 Đường ABC, Quận XYZ, TP.HCM</p>
            </div>
            <div>
              <h3 className="font-semibold">Điện thoại:</h3>
              <p className="text-gray-600">0123 456 789</p>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <p className="text-gray-600">info@weddingstudio.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Giờ làm việc:</h3>
              <p className="text-gray-600">Thứ 2 - Chủ nhật: 8:00 - 22:00</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Gửi tin nhắn</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Họ tên</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập họ tên của bạn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tin nhắn</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
