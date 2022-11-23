import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const requests = axios.create({ baseURL });

const search = (params) => {
  return {
    url: `/search?${params}`,
    method: "get",
  };
};

const imageDetail = (id) => {
  return {
    url: `/search?nasa_id=${id}`,
    method: "get",
  };
};

export const searchImages = (params) => {
  return requests(search(params));
};

export const getImageDetails = (id) => {
  return requests(imageDetail(id));
};

export const getImageCollection = (id) => {
  return axios({
    url: `https://images-assets.nasa.gov/image/${id}/collection.json`,
    method: "get",
  });
};
