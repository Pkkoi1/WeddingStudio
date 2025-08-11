import { AlbumCoverAPI } from "../api/API";

export const fetchPaginatedAlbumCovers = async (
  page: number,
  limit: number
) => {
  try {
    const response = await AlbumCoverAPI.getPaginatedAlbumCovers(page, limit);
    return response.data;
  } catch (error) {
    console.error("Error fetching paginated album covers:", error);
    throw error;
  }
};

export const createAlbumCover = async (data: any) => {
  try {
    const response = await AlbumCoverAPI.createAlbumCover(data);
    return response.data;
  } catch (error) {
    console.error("Error creating album cover:", error);
    throw error;
  }
};

export const updateAlbumCover = async (id: string, data: any) => {
  try {
    const response = await AlbumCoverAPI.updateAlbumCover(id, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating album cover with id ${id}:`, error);
    throw error;
  }
};

export const deleteAlbumCover = async (id: string) => {
  try {
    const response = await AlbumCoverAPI.deleteAlbumCover(id);
    return response.data;
  } catch (error) {
    console.error(`Error deleting album cover with id ${id}:`, error);
    throw error;
  }
};
