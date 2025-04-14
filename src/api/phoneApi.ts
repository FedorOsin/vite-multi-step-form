import axios from "axios";

export const checkPhone = async (phone: string) => {
  const response = await axios.get(
    `https://67fcd75f1f8b41c81687bc90.mockapi.io/phones?number=${encodeURIComponent(
      phone
    )}`
  );
  return response.data.length > 0;
};
