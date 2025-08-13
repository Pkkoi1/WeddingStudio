import { ServiceAPI } from "../api/API";
import type { Service } from "../data/Service";

export const fetchServices = async (
  category?: string,
  page: number = 1,
  limit: number = 10
): Promise<{
  services: Service[];
  pagination: { current: number; pages: number; total: number };
}> => {
  try {
    const response = await ServiceAPI.getServices(category, page, limit);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const fetchServiceById = async (id: string | null): Promise<Service> => {
  try {
    const response = await ServiceAPI.getServiceById(id || "null");
    return response.data;
  } catch (error) {
    console.error(`Error fetching service with id ${id}:`, error);
    throw error;
  }
};

export const createService = async (
  data: Omit<Service, "_id" | "createdAt" | "updatedAt">
): Promise<Service> => {
  try {
    const response = await ServiceAPI.createService(data);
    return response.data;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
};

export const updateService = async (
  id: string,
  data: Partial<Omit<Service, "_id" | "createdAt" | "updatedAt">>
): Promise<Service> => {
  try {
    const response = await ServiceAPI.updateService(id, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating service with id ${id}:`, error);
    throw error;
  }
};

export const deleteService = async (id: string): Promise<void> => {
  try {
    await ServiceAPI.deleteService(id);
  } catch (error) {
    console.error(`Error deleting service with id ${id}:`, error);
    throw error;
  }
};
