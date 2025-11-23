import {
  I360ProductResponse,
  IClientResponse,
  INewsResponse,
  IProductResponse,
  ISliderResponse
} from "@/interface/apiresp.interfaces";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const fetchAboutUs = async () => {
  try {
    const res = await ApiRequest.get(endpoints.cms.about);
    return res;
  } catch (error) {
    return error;
  }
};

// Faq
export const faqQuery = () => {
  try {
    const res = ApiRequest.get(endpoints.cms.faq);

    return res;
  } catch (error) {
    return error;
  }
};

export const ClientDetails = async (): Promise<IClientResponse[]> => {
  try {
    const res = await ApiRequest.get<IClientResponse[]>(endpoints.cms.clients);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getSliders = async (): Promise<ISliderResponse[]> => {
  try {
    const res = await ApiRequest.get<ISliderResponse[]>(endpoints.cms.sliders);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getIndustrySliders = async (): Promise<ISliderResponse[]> => {
  try {
    const res = await ApiRequest.get<ISliderResponse[]>(
      endpoints.cms.industrySliders
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getAllProducts = async (): Promise<IProductResponse[]> => {
  try {
    const res = await ApiRequest.get<IProductResponse[]>(
      endpoints.cms.allProducts
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getSingleProduct = async (
  id: string
): Promise<IProductResponse> => {
  try {
    const res = await ApiRequest.get<IProductResponse>(
      `${endpoints.cms.allProducts}/${id}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const get360Products = async (): Promise<I360ProductResponse[]> => {
  try {
    const res = await ApiRequest.get<I360ProductResponse[]>(
      endpoints.cms.get360Products
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getAllNews = async (): Promise<INewsResponse[]> => {
  try {
    const res = await ApiRequest.get<INewsResponse[]>(endpoints.cms.getNews);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getNews = async (id: string): Promise<INewsResponse> => {
  try {
    const res = await ApiRequest.get<INewsResponse>(
      `${endpoints.cms.getNews}/${id}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};
