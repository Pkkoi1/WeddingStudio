export interface AlbumImage {
  url: string;
  caption?: string;
}

export interface Album {
  _id: string;
  title: string;
  description?: string;
  coverImage: string;
  images: AlbumImage[];
  category: "wedding" | "prewedding" | "engagement" | "portrait";
  location:
    | {
        _id: string;
        name: string;
        city?: string;
        address?: string;
        category?: string;
        features?: string[];
      }
    | string;
  tags?: string[];
  isPublic: boolean;
  price: number;
  albumCover?: string;
  createdAt: string;
  updatedAt: string;
}
