import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from ".";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const errorBody = <T>(error: AxiosError<T>) => error.response?.data!;


const ApiRequest = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const res = await axiosInstance.get<T>(url);
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response?.data || err.message;
    }
  },
  post: async <T>(url: string, body: {}): Promise<T> => {
    try {
      const res = await axiosInstance.post<T>(url, body);
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response?.data || err.message;
    }
  }
};
export default ApiRequest;



