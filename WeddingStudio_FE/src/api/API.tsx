import axios from "axios";

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
  createAlbumCover: async (data: any) => {
    try {
      const response = await apiClient.post("/album-covers", data);
      return response.data;
    } catch (error) {
      console.error("Error creating album cover:", error);
      throw error;
    }
  },
  updateAlbumCover: async (id: string, data: any) => {
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
