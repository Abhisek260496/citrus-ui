export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = `${process.env.NEXT_APP_BASE_URL}/uploads`;

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
export const newsMediaUrl = (url: string) => {
  return `${baseUrlMedia}/news/${url}`;
};
export const ourStoryMediaUrl = (url: string) => {
  return `${baseUrlMedia}/page/${url}`;
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
    ourStoryPage: "/about"
  }
};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,
  endpoints.auth.signUpProfile,
  endpoints.auth.login,
  endpoints.auth.profileUpdate
];
