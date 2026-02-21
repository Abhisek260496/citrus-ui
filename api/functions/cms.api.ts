import {
  CaseStudyData,
  CsrPageData,
  EwastePageData,
  I360ProductResponse,
  IBlogMeta,
  IBlogResponse,
  ICareerResponse,
  ICertificateResponse,
  IClientResponse,
  IFooterQuickLinksResponse,
  INewsResponse,
  IOurStoryResponse,
  IPostAPiResponse,
  IProductResponse,
  ISalesSuppPayload,
  ISliderResponse,
  ISubMenuReponse,
  ITechnicalSalesPayload,
  IWarrantySuppPayload,
  IWorkWithUsResponse,
  WebsiteSettings
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

export const getSubMenu = async (): Promise<ISubMenuReponse[]> => {
  try {
    const res = await ApiRequest.get<ISubMenuReponse[]>(
      `${endpoints.cms.subMenu}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getFooterQuickLinks = async (): Promise<
  IFooterQuickLinksResponse[]
> => {
  try {
    const res = await ApiRequest.get<IFooterQuickLinksResponse[]>(
      `${endpoints.cms.footerLinks}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getFooterCompanyLinks = async (): Promise<
  IFooterQuickLinksResponse[]
> => {
  try {
    const res = await ApiRequest.get<IFooterQuickLinksResponse[]>(
      `${endpoints.cms.companyLinks}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getFooterSocialLinks = async (): Promise<WebsiteSettings> => {
  try {
    const res = await ApiRequest.get<WebsiteSettings>(
      `${endpoints.cms.footerSocial}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getOurStory = async (): Promise<IOurStoryResponse[]> => {
  try {
    const res = await ApiRequest.get<IOurStoryResponse[]>(
      `${endpoints.cms.ourStoryPage}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getWorks = async (): Promise<IWorkWithUsResponse> => {
  try {
    const res = await ApiRequest.get<IWorkWithUsResponse>(
      `${endpoints.cms.getWorks}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getJobs = async (): Promise<ICareerResponse[]> => {
  try {
    const res = await ApiRequest.get<ICareerResponse[]>(
      `${endpoints.cms.getJobs}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getJob = async (id: string): Promise<ICareerResponse> => {
  try {
    const res = await ApiRequest.get<ICareerResponse>(
      `${endpoints.cms.getJobs}/${id}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const submitJob = async (
  payload: FormData
): Promise<IPostAPiResponse> => {
  try {
    const res = await ApiRequest.post<IPostAPiResponse>(
      `${endpoints.cms.submitJob}`,
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getBlogs = async (): Promise<IBlogResponse[]> => {
  try {
    const res = await ApiRequest.get<IBlogResponse[]>(`${endpoints.cms.blogs}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getBlog = async (id: string): Promise<IBlogResponse> => {
  try {
    const res = await ApiRequest.get<IBlogResponse>(
      `${endpoints.cms.blogs}/${id}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCSR = async (): Promise<CsrPageData> => {
  try {
    const res = await ApiRequest.get<CsrPageData>(`${endpoints.cms.csr}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getEWaste = async (): Promise<EwastePageData> => {
  try {
    const res = await ApiRequest.get<EwastePageData>(`${endpoints.cms.eWaste}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCaseStudy = async (): Promise<CaseStudyData[]> => {
  try {
    const res = await ApiRequest.get<CaseStudyData[]>(
      `${endpoints.cms.caseStudy}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const getBlogBanner = async (): Promise<IBlogMeta> => {
  try {
    const res = await ApiRequest.get<IBlogMeta>(`${endpoints.cms.blogBanner}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCaseStudyBanner = async (): Promise<any> => {
  try {
    const res = await ApiRequest.get<any>(`${endpoints.cms.caseStudyBanner}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCertificates = async (): Promise<ICertificateResponse[]> => {
  try {
    const res = await ApiRequest.get<ICertificateResponse[]>(
      `${endpoints.cms.certificates}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const techSuppSubmit = async (
  payload: ITechnicalSalesPayload
): Promise<IPostAPiResponse> => {
  try {
    const res = await ApiRequest.post<IPostAPiResponse>(
      `${endpoints.cms.techSuppSubmit}`,
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const warrantySuppSubmit = async (
  payload: IWarrantySuppPayload
): Promise<IPostAPiResponse> => {
  try {
    const res = await ApiRequest.post<IPostAPiResponse>(
      `${endpoints.cms.warrentySuppSubmit}`,
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const salesSuppSubmit = async (
  payload: ISalesSuppPayload
): Promise<IPostAPiResponse> => {
  try {
    const res = await ApiRequest.post<IPostAPiResponse>(
      `${endpoints.cms.salesSuppSubmit}`,
      payload
    );
    return res;
  } catch (error) {
    throw error;
  }
};
