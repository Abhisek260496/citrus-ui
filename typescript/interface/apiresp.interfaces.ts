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
export interface IProduct {
  product_id?: number;
  product_title?: string;
  product_slug?: string;
  product_banner_description?: string | null;
  product_banner_title_1?: string | null;
  product_banner_title_2?: string | null;
  product_banner_title_3?: string | null;
  product_banner_type?: "image" | "video" | string;
  product_banner_content?: string | null;
  banner_background_img?: string | null;
  product_img?: string | null;
  product_description?: string | null;
}
export interface IProductResponse extends IProduct {
  sections: any[];
}

export interface ICommonProductSection {
  id?: number;
  product_id?: number;
  section_title?: string | null;
  section_subtitle?: string | null;
  section_content?: string;
  section_image?: string | null;
  section_video?: string | null;
  section_background_image?: string | null;
}
