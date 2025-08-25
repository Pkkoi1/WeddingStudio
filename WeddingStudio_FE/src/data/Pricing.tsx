const pricingPackages = [
  {
    slug: "goi-vip-1",
    packageName: "GÓI VIP 1",
    price: "3.850.000 VND",
    originalPrice: "4.500.000 VND",
    description:
      "Gói cơ bản phù hợp cho các cặp đôi mới bắt đầu, bao gồm những dịch vụ thiết yếu nhất cho ngày cưới của bạn.",
    features: [
      {
        title: "Tặng Vest cưới",
        description: "Vest cưới cao cấp cho chú rể, nhiều mẫu mã đa dạng",
      },
      {
        title: "Tặng vé phim trường",
        description: "Vé chụp ảnh tại phim trường Wedding Studio",
      },
      {
        title: "2 Ảnh phóng 50x75",
        description:
          "2 ảnh cưới được phóng to khổ 50x75cm, in trên giấy cao cấp",
      },
      {
        title: "1 Ảnh để bàn",
        description: "1 ảnh cưới khổ nhỏ để bàn, khung ảnh đẹp",
      },
      {
        title: "1 Album khổ (20×20)",
        description: "Album ảnh cưới khổ 20x20cm, 20 trang",
      },
      {
        title: "1 váy cưới",
        description: "1 váy cưới cao cấp cho cô dâu",
      },
      {
        title: "Trang điểm tại nhà cô dâu",
        description: "Dịch vụ trang điểm chuyên nghiệp tại nhà",
      },
    ],
    highlights: [
      "Tiết kiệm 650.000 VND so với giá gốc",
      "Phù hợp cho ngân sách hạn chế",
      "Bao gồm các dịch vụ cơ bản nhất",
    ],
    isHighlighted: false,
  },
  {
    slug: "goi-vip-2",
    packageName: "GÓI VIP 2",
    price: "5.200.000 VND",
    originalPrice: "6.000.000 VND",
    description:
      "Gói phổ biến nhất, cân bằng giữa chất lượng và giá cả, phù hợp cho đa số các cặp đôi.",
    features: [
      {
        title: "Tặng Vest cưới",
        description: "Vest cưới cao cấp cho chú rể, nhiều mẫu mã đa dạng",
      },
      {
        title: "Tặng vé phim trường",
        description: "Vé chụp ảnh tại phim trường Wedding Studio",
      },
      {
        title: "2 Ảnh phóng 60x90",
        description:
          "2 ảnh cưới được phóng to khổ 60x90cm, in trên giấy cao cấp",
      },
      {
        title: "1 Album 25x25cm",
        description: "Album ảnh cưới khổ 25x25cm, 30 trang",
      },
      {
        title: "1 ảnh để bàn",
        description: "1 ảnh cưới khổ nhỏ để bàn, khung ảnh đẹp",
      },
      {
        title: "1 váy cưới",
        description: "1 váy cưới cao cấp cho cô dâu",
      },
      {
        title: "Trang điểm tại nhà cô dâu",
        description: "Dịch vụ trang điểm chuyên nghiệp tại nhà",
      },
    ],
    highlights: [
      "Tiết kiệm 800.000 VND so với giá gốc",
      "Gói được lựa chọn nhiều nhất",
      "Ảnh phóng to kích thước lớn hơn",
    ],
    isHighlighted: true,
  },
  {
    slug: "goi-vip-3",
    packageName: "GÓI VIP 3",
    price: "6.800.000 VND",
    originalPrice: "8.000.000 VND",
    description:
      "Gói cao cấp được khuyến nghị, bao gồm nhiều dịch vụ premium và ưu đãi đặc biệt.",
    features: [
      {
        title: "Tặng Vest cưới",
        description: "Vest cưới cao cấp cho chú rể, nhiều mẫu mã đa dạng",
      },
      {
        title: "Tặng vé phim trường",
        description: "Vé chụp ảnh tại phim trường Wedding Studio",
      },
      {
        title: "2 Ảnh phóng 60x90",
        description:
          "2 ảnh cưới được phóng to khổ 60x90cm, in trên giấy cao cấp",
      },
      {
        title: "1 Album 25x25cm",
        description: "Album ảnh cưới khổ 25x25cm, 40 trang",
      },
      {
        title: "1 ảnh để bàn",
        description: "1 ảnh cưới khổ nhỏ để bàn, khung ảnh đẹp",
      },
      {
        title: "1 váy cưới",
        description: "1 váy cưới cao cấp cho cô dâu",
      },
      {
        title: "Trang điểm tại nhà cô dâu",
        description: "Dịch vụ trang điểm chuyên nghiệp tại nhà",
      },
    ],
    highlights: [
      "Tiết kiệm 1.200.000 VND so với giá gốc",
      "GÓI ĐƯỢC KHUYẾN NGHỊ",
      "Album có nhiều trang hơn",
      "Ưu đãi đặc biệt cho khách hàng",
    ],
    isHighlighted: false,
  },
  {
    slug: "goi-vip-4",
    packageName: "GÓI VIP 4",
    price: "12.800.000 VND",
    originalPrice: "15.000.000 VND",
    description:
      "Gói cao cấp nhất với đầy đủ dịch vụ premium, phù hợp cho những cặp đôi muốn có trải nghiệm hoàn hảo nhất.",
    features: [
      {
        title: "Tặng Vest cưới",
        description: "Vest cưới cao cấp cho chú rể, nhiều mẫu mã đa dạng",
      },
      {
        title: "Tặng vé phim trường",
        description: "Vé chụp ảnh tại phim trường Wedding Studio",
      },
      {
        title: "2 Ảnh phóng 60x90",
        description:
          "2 ảnh cưới được phóng to khổ 60x90cm, in trên giấy cao cấp",
      },
      {
        title: "1 Album 25x25cm",
        description: "Album ảnh cưới khổ 25x25cm, 50 trang",
      },
      {
        title: "1 ảnh để bàn",
        description: "1 ảnh cưới khổ nhỏ để bàn, khung ảnh đẹp",
      },
      {
        title: "1 váy cưới",
        description: "1 váy cưới cao cấp cho cô dâu",
      },
      {
        title: "Trang điểm tại nhà cô dâu",
        description: "Dịch vụ trang điểm chuyên nghiệp tại nhà",
      },
    ],
    highlights: [
      "Tiết kiệm 2.200.000 VND so với giá gốc",
      "Gói cao cấp nhất",
      "Album có số trang nhiều nhất",
      "Dịch vụ VIP toàn diện",
    ],
    isHighlighted: false,
  },
];

export default pricingPackages;
