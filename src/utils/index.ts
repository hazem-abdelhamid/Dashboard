import axios from "axios";
import axiosInstance from "./axiosInstance";
import { editFormValues } from "@/components/schema/EditFormSchema";

export async function getUsers() {
  try {
    const { data } = await axiosInstance.get("");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // network issues, invalid URL, server errors
      throw new Error(`Failed to fetch users: ${error.message}`);
    } else {
      throw new Error("Unable to fetch users");
    }
  }
}

export async function deleteUser(id: string | number) {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to delete user: ${error.message}`);
    } else {
      throw new Error("unable to delete user");
    }
  }
}

export async function editUser(
  updatedData: editFormValues,
  id: number | string
) {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedData);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to update user: ${error.message}`);
    } else {
      throw new Error("Unable to update user");
    }
  }
}

export async function getUser(id: string | number) {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to get user: ${error.message}`);
    } else {
      throw new Error(`Unable to update user`);
    }
  }
}
