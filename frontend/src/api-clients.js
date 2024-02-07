import axios from "axios";
import handleNotification from "./utils/notification";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signUpApi = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/auth/sign-up`,
      data,
      { withCredentials: true }
    );
    handleNotification("success", "Registration Successful");
    return response;
  } catch (error) {
    console.log(error);
    handleNotification("error", error.response.data.message);
  }
};

export const signInApi = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/auth/sign-in`,
      data,
      { withCredentials: true }
    );
    console.log(response);
    handleNotification("success", "Log in successful");
    return response;
  } catch (error) {
    console.log(error);
    handleNotification("error", error.response.data.message);
  }
};
