export interface NewsContent {
  text: string;
  img?: string;
}

export interface News {
  _id: string;
  title: string;
  admin: string; // Admin ID
  location?: string; // Location ID
  service?: string; // Service ID
  content: NewsContent[];
  createdAt: string;
  updatedAt: string;
}
