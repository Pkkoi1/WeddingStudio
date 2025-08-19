import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";

const About: React.FC = () => {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu" },
  ];

  return (
    <div className="container bg-white w-screen">
      <Breadcrumb items={breadcrumbItems} />
      <div className="text-left lg:px-[10%] px-4 mt-5 h-full">
        <h1 className="text-lg font-bold my-8">
          Studio ảnh cưới hàng đầu tại Việt Nam
        </h1>
        <div className=" text-gray-600">
          <p className="mb-4">
            Bạn chuẩn bị lập gia đình? Bạn muốn có một cuốn album ảnh cưới đẹp
            và độc đáo?
          </p>
          <p className="mb-4">
            Bạn mong muốn khán giả trầm trồ thích thú khi chiêm ngưỡng cuốn
            album ảnh cưới của mình?
          </p>
          <p className="mb-4">
            Bạn cần một dịch vụ hoàn hảo, xứng đáng để đặt niềm tin tuyệt đối
            cho ngày quan trọng và ý nghĩa nhất của đời người?
          </p>
          <p className="mb-4">
            Vivian có những đối tác sẵn sàng song hành để cung cấp cho khách
            hàng những dịch vụ tốt nhất với chi phí hợp lý nhất.
          </p>
          <p className="mb-4">
            Chúng tôi luôn luôn có những ý tưởng mới mẻ, sáng tạo trong nghệ
            thuật hình ảnh, đội ngũ trẻ năng động, nhiệt huyết, đam mê nghề.
            Biết cách cư xử và ứng phó với các tình huống.
          </p>
          <p className="mb-4">
            Đẳng cấp của thương hiệu Wedding Studio là tạo ra được sự hoàn hảo
            cho một concept về ảnh, phục vụ tận tâm và làm hài lòng các đối
            tác/cá nhân ở trong nước và nước ngoài.
          </p>
          <p className="mb-4">
            Ảnh viện Wedding Studio được biết đến từ năm 2007, đến tháng 6 năm
            2014 chúng tôi chính thức thành lập Công ty TNHH TM & DV Áo cưới
            Wedding Studio Hà Nội.
          </p>
          <p className="mb-4">
            Sau 9 năm tạo dựng thương hiệu Wedding Studio tiến tới tương lai với
            mục tiêu triển khai toàn diện các dịch vụ/sản phẩm/thiết bị hỗ trợ
            và đưa giải pháp tổ chức sự kiện liên quan tới ngành ảnh tại Hà Nội
            và khu vực phía Bắc.
          </p>
          <p className="mb-4">
            Wedding Studio luôn có các thiết bị hiện đại để phục vụ các sự kiện
            chuyên nghiệp, tổ chức và cung ứng các sản phẩm/dịch vụ về ảnh,
            decor, video...
          </p>
          <p className="mb-4">
            Không ngừng đổi mới, trau dồi kiến thức và kỹ năng, cùng sự hợp tác
            với những Make-up Artist chuyên nghiệp, những nhà thiết kế váy cưới
            hàng đầu Việt Nam và đội ngũ Wedding Planner trẻ trung, năng động,
            sáng tạo… chúng tôi tự hào mang tới Quý khách hàng một dịch vụ cưới
            chất lượng đỉnh cao mang thương hiệu Wedding Studio.
          </p>
          <p className="mb-4">
            Hãy đến với Wedding Studio để cảm nhận tất cả sự nhiệt tình, chuyên
            nghiệp và độc đáo nhất!
          </p>
          <p className="pb-4">
            Hãy trao gửi niềm tin tại Wedding Studio - Chúng tôi có Năng lực
            giải đáp tất cả những mong muốn của Bạn và đảm bảo đem tới Quý khách
            những sản phẩm tốt nhất, giá trị trường tồn cùng thời gian.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
