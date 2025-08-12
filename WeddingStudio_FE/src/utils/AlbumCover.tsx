import { AlbumCoverAPI } from "../api/API";
import type { AlbumCover } from "../data/AlbumCorver";

export const fetchPaginatedAlbumCovers = async (
  page: number,
  limit: number
): Promise<{ albumCovers: AlbumCover[]; total: number }> => {
  try {
    const response = await AlbumCoverAPI.getPaginatedAlbumCovers(page, limit);
    return response.data;
  } catch (error) {
    console.error("Error fetching paginated album covers:", error);
    throw error;
  }
};

export const createAlbumCover = async (
  data: AlbumCover
): Promise<AlbumCover> => {
  try {
    const response = await AlbumCoverAPI.createAlbumCover(data);
    return response.data;
  } catch (error) {
    console.error("Error creating album cover:", error);
    throw error;
  }
};

export const updateAlbumCover = async (
  id: string,
  data: Partial<AlbumCover>
): Promise<AlbumCover> => {
  try {
    const response = await AlbumCoverAPI.updateAlbumCover(id, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating album cover with id ${id}:`, error);
    throw error;
  }
};

export const deleteAlbumCover = async (id: string): Promise<void> => {
  try {
    const response = await AlbumCoverAPI.deleteAlbumCover(id);
    return response.data;
  } catch (error) {
    console.error(`Error deleting album cover with id ${id}:`, error);
    throw error;
  }
};
