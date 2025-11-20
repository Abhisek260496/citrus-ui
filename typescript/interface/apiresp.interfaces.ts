import { userData } from "@/types/common.type";
import { BaseApiResponse } from "./common.interface";

export interface IgetSignUpQuery extends BaseApiResponse {
  data: userData;
}

export interface IClientResponse {
  client_id: number;
  client_title: string;
  client_image: string;
  client_is_active: number;
  client_created_at: string;
  client_updated_at: string;
}

export interface ISliderResponse {
  slider_id: number;
  slider_title: string;
  slider_image: string;
  slider_description: string;
  slider_is_active: 0 | 1;
  slider_created_at: string;
  slider_updated_at: string;
}
export interface Product {
  product_id: number;
  product_title: string;
  product_slug: string;
  product_banner_description: string | null;
  product_banner_type: "video" | "image" | string; // adjust if needed
  product_banner_content: string | null;
  banner_background_img: string | null;
  product_img: string | null;
  product_description: string | null;
  product_is_active: number; // or boolean if API later changes
  meta_title: string;
  meta_description: string;
  meta_keyword: string | null;
  product_created_at: string; // or Date
  product_updated_at: string; // or Date
  sections: any[];
}
