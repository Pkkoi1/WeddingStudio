import { AlbumAPI } from "../api/API";
import type { Album } from "../data/Album";

interface AlbumPagination {
  current: number;
  pages: number;
  total: number;
}

export const fetchAlbums = async (
  category?: string,
  page: number = 1,
  limit: number = 12
): Promise<{ albums: Album[]; pagination: AlbumPagination }> => {
  try {
    const data = await AlbumAPI.getAlbums(category, page, limit);
    return data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
};

export const fetchAlbumById = async (id: string): Promise<Album> => {
  try {
    const data = await AlbumAPI.getAlbumById(id);
    return data;
  } catch (error) {
    console.error(`Error fetching album with id ${id}:`, error);
    throw error;
  }
};

export const fetchAlbumsByCover = async (
  albumCover: string
): Promise<Album[]> => {
  try {
    const data = await AlbumAPI.getAlbumsByCover(albumCover);
    return data;
  } catch (error) {
    console.error(`Error fetching albums by cover ${albumCover}:`, error);
    throw error;
  }
};
