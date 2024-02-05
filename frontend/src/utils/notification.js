import { toast } from "react-toastify";

const handleNotification = (status, message) => {
  if (status === "success") {
    return toast.success(message);
  } else if (status === "error") {
    return toast.error(message);
  }
};

export default handleNotification;
