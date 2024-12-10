import axios from "axios";
import api from "./api";

//baseURL api.js에서 설정
//baseURL: 'http://localhost:8070'

export const myAuctionProduct = async () => {
  const res = await axios.get("/data/myAuctionData.json");
  return res.data;
};

export const getAuctionItems = async (filters) => {
  const { category, priceRange, searchQuery, sort } = filters;
  const { minPrice, maxPrice } = priceRange;

  const config = filters
    ? {
        params: {
          category,
          minPrice,
          maxPrice,
          searchQuery,
          sort,
        },
      }
    : {};

  const res = await api.get("/auction-items", config);
  console.log("api요청", "/auction-items", config);
  console.log("res데이터", res.data);
  return res.data;
};

export const getAuctionDetail = async () => {
  const res = await axios.get("/data/auctionDetail.json");
  return res.data;
};
