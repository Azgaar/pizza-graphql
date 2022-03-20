const CLIENT_APP = process.env.CLIENT_APP_PORT || "localhost:3000";
const GRAPHQL_SERVER = process.env.GRAPHQL_PORT || "localhost:3001";
const SERVER_PROTOCOL = process.env.REACT_APP_SERVER_PROTOCOL || "http";
export const IMAGES_URL = `${SERVER_PROTOCOL}://${CLIENT_APP}/public/images`;
export const GRAPHQL_URL = `${SERVER_PROTOCOL}://${GRAPHQL_SERVER}/graphql`;
