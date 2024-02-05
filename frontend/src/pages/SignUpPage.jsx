import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";
import * as apiClient from "../api-clients";

import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    apiClient.signUpApi(data);
    console.log(data);
  });

  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="container sign-up-form-container">
        <h2 className="sign-up-form-header">Sign Up Here</h2>
        <label className="sign-up-label">
          Full Name
          <input
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
