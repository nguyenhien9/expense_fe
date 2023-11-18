import moment from "moment/moment";

export const formatPrice = (number) => {
  return new Intl.NumberFormat("vi-Vi", {
    style: "currency",
    currency: "VND",
  }).format(number);
};
export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};
