export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grap-server-server.herokuapp.com"
    : "http://localhost:8080";
