import axios from "axios";
import { createClient } from "microcms-js-sdk";

const xApi: string = process.env.API_KEY || "";
//
// export const getBlogs = () => {
//   axios.get("https://riku-s.microcms.io/api/v1/blog", {
//     headers: {
//       "API-KEY": xApi,
//     },
//   });
// };
//
// export const getBlogBy = (id: string) => (
//   axios.get("https://riku-s.microcms.io/api/v1/blog" + id, {
//     headers: {
//       "API-KEY": xApi,
//     },
//   });
// )
// ;

export const client = createClient({
  serviceDomain: "riku-s",
  apiKey: xApi,
});
