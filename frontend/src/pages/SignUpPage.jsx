import { Link, useNavigate } from "react-router-dom";
import { motion, spring } from "framer-motion";
import * as apiClient from "../api-clients";

import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await apiClient.signUpApi(data);
    console.log(res);
    if (res.status === 201) {
      navigate("/user-homepage");
    }
    console.log(data);
  });

  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="container sign-up-form-container">
        <h2 className="sign-up-form-header">Sign Up Here</h2>
        <label className="sign-up-label">
          Full Name
          <input
            autoComplete="off"
            className="sign-up-input"
            {...register("fullName", { required: "This field is required" })}
            type="text"
          />
          {errors.fullName && (
            <span className="form-error">{errors.fullName.message}</span>
          )}
        </label>
        <label className="sign-up-label">
          Email
          <input
            autoComplete="off"
            {...register("email", { required: "This field is required" })}
            className="sign-up-input"
            type="email"
          />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}
        </label>
        <label className="sign-up-label">
          Password
          <input
            autoComplete="off"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be greater than 6 characters",
              },
            })}
            className="sign-up-input"
            type="password"
          />
          {errors.password && (
            <span className="form-error">{errors.password.message}</span>
          )}
        </label>
        <motion.button
          initial={{ background: "#139a43" }}
          whileHover={{ scale: 0.95, background: "#053b06" }}
          whileTap={{ scale: 1.02 }}
          transition={{ type: spring, duration: 0.3 }}
          className="sign-up-btn"
        >
          Sign Up
        </motion.button>
        <p className="sign-up-text">
          Already have an account ? <Link to="/sign-in">Sign In here</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpPage;
