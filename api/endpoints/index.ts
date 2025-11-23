export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = `${process.env.NEXT_APP_BASE_URL}`;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/${url}`;
};
export const ThreeSixtymediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/360/sides/${url}`;
};
export const prodcutMediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/product/${url}`;
};
export const newsMediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/news/${url}`;
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
    getNews: "/news"
  }
};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,
  endpoints.auth.signUpProfile,
  endpoints.auth.login,
  endpoints.auth.profileUpdate
];
