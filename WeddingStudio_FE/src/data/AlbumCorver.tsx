export interface AlbumCover {
  _id: string;
  title: string; // Tiêu đề bìa album
  location: string; // ID địa điểm chụp
  coverImage: string; // Ảnh bìa đại diện
  description?: string; // Mô tả về bộ sưu tập này
  albumCount: number; // Số lượng album trong bìa này
  isActive: boolean; // Trạng thái hoạt động
  createdAt: string; // Ngày tạo
  updatedAt: string; // Ngày cập nhật
}
