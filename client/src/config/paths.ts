const SERVER_HOST = process.env.REACT_APP_SERVER_URI || "localhost:3001";
const SERVER_PROTOCOL = process.env.REACT_APP_SERVER_PROTOCOL || "http";
export const IMAGES_URL = `${SERVER_PROTOCOL}://${SERVER_HOST}/public/images`;
export const GRAPHQL_URL = `${SERVER_PROTOCOL}://${SERVER_HOST}/graphql`;
