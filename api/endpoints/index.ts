export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = `${process.env.NEXT_APP_BASE_URL}/uploads`;
export const baseCommonUrlMedia = `${process.env.NEXT_APP_BASE_URL}/img`;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/${url}`;
};
export const ThreeSixtymediaUrl = (url: string) => {
  return `${baseUrlMedia}/360/sides/${url}`;
};
export const prodcutMediaUrl = (url: string) => {
  return `${baseUrlMedia}/product/${url}`;
};
export const careerMediaUrl = (url: string) => {
  return `${baseUrlMedia}/career/${url}`;
};
export const newsMediaUrl = (url: string) => {
  return `${baseUrlMedia}/news/${url}`;
};
export const ourStoryMediaUrl = (url: string) => {
  return `${baseUrlMedia}/page/${url}`;
};
export const blogMediaUrl = (url: string) => {
  return `${baseUrlMedia}/blog/${url}`;
};
export const cmsMediaUrl = (url: string) => {
  return `${baseUrlMedia}/blog/${url}`;
};

export const caseStudyMediaUrl = (url: string) => {
  return `${baseUrlMedia}/casestudy/${url}`;
};
export const commonMediaUrl = (url: string) => {
  return `${baseCommonUrlMedia}/page/${url}`;
};

export const endpoints = {
  auth: {
    signup: "user/existence",
    signUpProfile: "user/signup",
    login: "user/login",
    profileDetails: "user/profile/get",
    profileUpdate: "user/profile/update"
  },
  cms: {
    about: "aboutpolicy/details",
    faq: "faq/all",
    clients: "/clients",
    sliders: "/sliders",
    industrySliders: "/industry-sliders",
    allProducts: "/products",
    getSingleProduct: "/products",
    get360Products: "/product360",
    getNews: "/news",
    subMenu: "/home-sub-menu",
    footerLinks: "/quicklinks",
    companyLinks: "/companylinks",
    ourStoryPage: "/about",
    getWorks: "/works/12",
    getJobs: "/jobs",
    blogs: "/blogs",
    footerSocial: "/website",
    csr: "/csr-page",
    eWaste: "/ewaste-page",
    caseStudy: "/casestudy-page",
    blogBanner: "/blog-banner-data/14",
    caseStudyBanner: "/case-study-banner-data/15"
  }
};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,
  endpoints.auth.signUpProfile,
  endpoints.auth.login,
  endpoints.auth.profileUpdate
];
