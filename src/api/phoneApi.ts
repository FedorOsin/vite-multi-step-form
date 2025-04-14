import axios from "axios";

export const checkPhone = async (phone: string) => {
  const response = await axios.get(
    `/phones?number=${encodeURIComponent(phone)}`
  );

  return response.data.length > 0;
};
