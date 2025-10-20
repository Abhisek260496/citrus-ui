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


