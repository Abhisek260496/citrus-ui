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
export interface IRelatedProduct {
  product_id: number;
  related_id: number;
  title: string;
  processor: string;
  memory: string;
  storage: string;
  product_slug: string;
  os: string;
  product_img: string;
  created_at: string;
  updated_at: string;
}

export interface IProductResponse extends IProduct {
  sections: any[];
  related_products: IRelatedProduct[];
}

export interface ICommonProductSection {
  id?: number;
  product_id?: number;
  section_title?: string | null;
  section_subtitle?: string | null;
  section_subtitle_one?: string | null;
  section_content?: string;
  section_image?: string | null;
  section_video?: string | null;
  section_background_image?: string | null;
  product_banner_content?: string | null;
  section_image_one?: string | null;
  section_sub_title_one?: string | null;
  section_sub_title_two?: string | null;
}

export interface Each360ProductResponse {
  id: number;
  product_360_id: number;
  side_image: string;
  created_at: string;
  updated_at: string;
}
export interface I360ProductResponse {
  product_360_id: number;
  product_name: string;
  thumb_image: string;
  is_active: boolean;
  images: Each360ProductResponse[];
}

export interface INewsResponse {
  news_id: number;
  news_title: string;
  news_description: string;
  news_image: string;
  news_main_image: string | null;
  news_slug: string;
  news_link: string;
  news_right_text: string | null;
  banner_image: null;
  meta_title: string;
  meta_description: string;
  meta_keword: string | null;
  news_is_active: number;
  news_created_by_id: number;
  news_created_at: string;
  news_updated_at: string;
}

export interface ISubMenuReponse {
  id: number;
  title: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface IFooterQuickLinksResponse {
  id: number;
  title: string;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface IOurStoryResponse {
  id?: number;
  title?: string;
  banner_title?: string;
  banner_content?: string;
  banner_bg_img?: string | null;
  banner_sub_elmts_one?: string;
  banner_sub_elmts_one_desc?: string;
  banner_sub_elmts_two?: string;
  banner_sub_elmts_two_desc?: string;
  banner_sub_elmts_three?: string;
  banner_sub_elmts_three_desc?: string;
  banner_sub_desc_one?: string;
  banner_sub_desc_two?: string;
  banner_sub_desc_three?: string;
  banner_sub_image?: string | null;
  slug?: string | null;

  block_one_title?: string;
  block_one_bg?: string | null;
  block_one_sub_img_1?: string | null;
  block_one_sub_img_2?: string | null;
  block_one_sub_img_3?: string | null;
  block_one_sub_img_4?: string | null;

  block_two_title?: string;
  block_two_sub_title?: string;
  block_two_sub_title_one?: string;
  block_two_sub_icon_one?: string | null;
  block_two_sub_itext_one?: string;
  block_two_sub_title_two?: string;
  block_two_sub_icon_two?: string | null;
  block_two_sub_itext_two?: string;
  block_two_sub_title_three?: string;
  block_two_sub_icon_three?: string | null;
  block_two_sub_itext_three?: string;
  block_two_sub_title_four?: string;
  block_two_sub_icon_four?: string | null;
  block_two_sub_itext_four?: string;

  block_three_title?: string;
  block_three_sub_title?: string;
  block_three_image?: string | null;
  block_three_image_alt_tag?: string | null;
  block_three_description?: string;

  block_four_title?: string | null;
  block_four_sub_title?: string | null;
  block_four_image?: string | null;
  block_four_image_one?: string | null;
  block_four_description?: string | null;
  block_four_button_name?: string | null;
  block_four_button_link?: string | null;

  block_five_title?: string | null;
  block_five_sub_title?: string | null;
  block_five_image?: string | null;
  block_five_description?: string | null;
  block_five_button_name?: string | null;
  block_five_button_link?: string | null;

  banner_image?: string | null;

  sub_id?: number;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keyword?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface IWorkWithUsResponse {
  id: number;
  title: string;
  main_title: string | null;
  content: string | null;
  sub_title: string | null;
  image: string | null;
  slug: string;
  button_name: string | null;
  button_link: string | null;
  mission: string | null;
  vission: string | null;

  block_one_title: string | null;
  block_one_description: string | null;
  block_one_title_one: string | null;
  block_one_description_one: string | null;
  block_one_title_two: string | null;
  block_one_description_two: string | null;
  block_one_title_three: string | null;
  block_one_description_three: string | null;
  block_one_sub_title: string | null;
  block_one_button_name: string | null;
  block_one_button_link: string | null;
  block_one_address: string | null;
  block_one_phone: string | null;
  block_one_location_link: string | null;
  block_one_email: string | null;
  block_one_website: string | null;
  block_one_image: string | null;
  block_one_image1: string | null;
  block_one_image2: string | null;
  block_one_image_alt_tag: string | null;

  block_two_title: string | null;
  block_two_sub_title: string | null;
  block_two_image: string | null;
  block_two_image_alt_tag: string | null;
  block_two_description: string | null;
  block_two_button_name: string | null;
  block_two_button_link: string | null;

  block_three_title: string | null;
  block_three_sub_title: string | null;
  block_three_image: string | null;
  block_three_image_alt_tag: string | null;
  block_three_description: string | null;
  block_three_button_name: string | null;
  block_three_button_link: string | null;

  block_four_title: string | null;
  block_four_sub_title: string | null;
  block_four_image: string | null;
  block_four_image_alt_tag: string | null;
  block_four_description: string | null;
  block_four_button_name: string | null;
  block_four_button_link: string | null;

  block_five_title: string | null;
  block_five_sub_title: string | null;
  block_five_image: string | null;
  block_five_description: string | null;
  block_five_button_name: string | null;
  block_five_button_link: string | null;

  banner_image: string | null;
  sub_id: number;

  meta_title: string | null;
  meta_description: string | null;
  meta_keyword: string | null;

  created_at: string | null;
  updated_at: string | null;
}

export interface ICareerResponse {
  career_id: number;
  career_title: string;
  career_type: string;
  career_location: string;
  career_slug: string;
  career_banner_image: string | null;
  career_description: string;
  career_responsibilities: string;
  career_requirements: string;

  meta_title: string | null;
  meta_description: string | null;
  meta_keyword: string | null;

  career_is_active: number;
  career_created_at: string;
  career_updated_at: string;
}
