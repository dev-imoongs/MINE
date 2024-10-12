import axios from "axios";

export const myAuctionProduct = async () => {
  const response = await axios.get("/data/myAuctionData.json");
  console.log(response.data);
  return response.data;
};

export const auctionItems = async () => {
  const res = await axios.get("/data/auctionItemData.json");
  return res.data;
};
