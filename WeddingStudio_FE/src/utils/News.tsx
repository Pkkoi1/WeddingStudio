import { NewsAPI } from "../api/API";
import type { News } from "../data/News";

export const fetchAllNews = async (): Promise<News[]> => {
  try {
    const response = await NewsAPI.getAllNews();
    return response.data;
  } catch (error) {
    console.error("Error fetching all news:", error);
    throw error;
  }
};

export const fetchNewsById = async (id: string): Promise<News> => {
  try {
    const response = await NewsAPI.getNewsById(id);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news with id ${id}:`, error);
    throw error;
  }
};

export const fetchNewsByService = async (
  serviceId: string
): Promise<News[]> => {
  try {
    const response = await NewsAPI.getNewsByService(serviceId);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news for service ${serviceId}:`, error);
    throw error;
  }
};

export const createNews = async (
  data: Omit<News, "_id" | "createdAt" | "updatedAt">
): Promise<News> => {
  try {
    const response = await NewsAPI.createNews(data);
    return response.data;
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};

export const updateNews = async (
  id: string,
  data: Partial<Omit<News, "_id" | "createdAt" | "updatedAt">>
): Promise<News> => {
  try {
    const response = await NewsAPI.updateNews(id, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating news with id ${id}:`, error);
    throw error;
  }
};

export const deleteNews = async (id: string): Promise<void> => {
  try {
    await NewsAPI.deleteNews(id);
  } catch (error) {
    console.error(`Error deleting news with id ${id}:`, error);
    throw error;
  }
};
