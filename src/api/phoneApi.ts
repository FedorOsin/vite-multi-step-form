import axios from "axios";

export const checkPhone = async (phone: string) => {
  const response = await axios.get(
    `http://localhost:3001/phones?number=${phone}`
  );
  return response.data.length > 0;
};
