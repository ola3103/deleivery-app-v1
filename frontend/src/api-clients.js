import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signUpApi = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/auth/sign-up`);
  } catch (error) {}
};
