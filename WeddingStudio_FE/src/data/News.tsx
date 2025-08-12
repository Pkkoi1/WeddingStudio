export interface NewsContent {
  text: string;
  img?: string;
}

export interface ServiceReference {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminReference {
  _id: string;
  fullName: string; // Add fullName property
  email: string;
  avatar?: string;
}

export interface News {
  _id: string;
  title: string;
  admin: AdminReference; // Update admin to be an object
  location?: string; // Location ID
  service?: ServiceReference; // Updated to include service details
  content: NewsContent[];
  createdAt: string;
  updatedAt: string;
}
