import axios from "axios";
import type { AlbumCover } from "../data/AlbumCorver";
import type { Service } from "../data/Service";
import type { News } from "../data/News";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AlbumCoverAPI = {
  getAlbums: async () => {
    try {
      const response = await apiClient.get("/albums");
      return response.data;
    } catch (error) {
      console.error("Error fetching albums:", error);
      throw error;
    }
  },
  getAlbumById: async (id: string) => {
    try {
      const response = await apiClient.get(`/albums/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching album with id ${id}:`, error);
      throw error;
    }
  },
  createAlbumCover: async (data: Omit<AlbumCover, "_id">) => {
    try {
      const response = await apiClient.post("/album-covers", data);
      return response.data;
    } catch (error) {
      console.error("Error creating album cover:", error);
      throw error;
    }
  },
  updateAlbumCover: async (
    id: string,
    data: Partial<Omit<AlbumCover, "_id">>
  ) => {
    try {
      const response = await apiClient.put(`/album-covers/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating album cover with id ${id}:`, error);
      throw error;
    }
  },
  deleteAlbumCover: async (id: string) => {
    try {
      const response = await apiClient.delete(`/album-covers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting album cover with id ${id}:`, error);
      throw error;
    }
  },
  getPaginatedAlbumCovers: async (page: number = 1, limit: number = 12) => {
    try {
      const response = await apiClient.get(`/album-covers`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching paginated album covers:", error);
      throw error;
    }
  },
};

export const ServiceAPI = {
  getServices: async (
    category?: string,
    page: number = 1,
    limit: number = 10
  ) => {
    try {
      const response = await apiClient.get("/services", {
        params: { category, page, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      throw error;
    }
  },
  getServiceById: async (id: string) => {
    try {
      const response = await apiClient.get(`/services/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching service with id ${id}:`, error);
      throw error;
    }
  },
  createService: async (
    data: Omit<Service, "_id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const response = await apiClient.post("/services", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating service:", error);
      throw error;
    }
  },
  updateService: async (
    id: string,
    data: Partial<Omit<Service, "_id" | "createdAt" | "updatedAt">>
  ) => {
    try {
      const response = await apiClient.put(`/services/${id}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating service with id ${id}:`, error);
      throw error;
    }
  },
  deleteService: async (id: string) => {
    try {
      const response = await apiClient.delete(`/services/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting service with id ${id}:`, error);
      throw error;
    }
  },
};

export const NewsAPI = {
  getAllNews: async () => {
    try {
      const response = await apiClient.get("/news");
      return response.data;
    } catch (error) {
      console.error("Error fetching all news:", error);
      throw error;
    }
  },
  getNewsById: async (id: string) => {
    try {
      const response = await apiClient.get(`/news/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching news with id ${id}:`, error);
      throw error;
    }
  },
  getNewsByService: async (serviceId: string) => {
    try {
      const response = await apiClient.get(`/news/service/${serviceId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching news for service ${serviceId}:`, error);
      throw error;
    }
  },
  createNews: async (data: Omit<News, "_id" | "createdAt" | "updatedAt">) => {
    try {
      const response = await apiClient.post("/news", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating news:", error);
      throw error;
    }
  },
  updateNews: async (
    id: string,
    data: Partial<Omit<News, "_id" | "createdAt" | "updatedAt">>
  ) => {
    try {
      const response = await apiClient.put(`/news/${id}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating news with id ${id}:`, error);
      throw error;
    }
  },
  deleteNews: async (id: string) => {
    try {
      const response = await apiClient.delete(`/news/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting news with id ${id}:`, error);
      throw error;
    }
  },
};
