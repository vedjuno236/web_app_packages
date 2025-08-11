const isProduction = import.meta.env.VITE_WEB_PRODUCTION === "true";
export default {
  VITE_WEB_HEADER: import.meta.env.VITE_WEB_HEADER,
  VITE_WEB_HEADER_NAME: import.meta.env.VITE_WEB_HEADER_NAME,

  VITE_WEB: isProduction
    ? import.meta.env.VITE_WEB_PROD_PATH
    : import.meta.env.VITE_WEB_UAT_PATH,
  VITE_WEB_AUTH: isProduction
    ? import.meta.env.VITE_WEB_PROD_AUTH_PATH
    : import.meta.env.VITE_WEB_UAT_AUTH_PATH,
};


