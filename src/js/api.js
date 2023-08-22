import axios from "axios";
const key = "33350252-53a75f568ce69e642e03bf7bf";
const baseURL = "https://pixabay.com/api/";

export async function getImages(query) {
  const {data} = await axios
    .get(baseURL, {
      params: {
        key: key,
        q: query.keyWord,
        page: query.page ? query.page : 1
      },
    })
    .catch((error) => {
      console.log(error);
      if (error.config.url === url) {
        console.log("error", error);
        return error;
      }
    });

  return data;
}
