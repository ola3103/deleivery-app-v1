import { Link, useNavigate } from "react-router-dom";
import { motion, spring } from "framer-motion";
import { useForm } from "react-hook-form";
import * as apiClient from "../api-clients";

const SignInPage = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await apiClient.signInApi(data);
    if (res.status === 200) {
      navigate("/user-homepage");
    }
    console.log(res.status);
  });

  return (
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="container sign-in-form-container">
        <h2 className="sign-in-form-header">Sign In Here</h2>
        <label className="sign-in-label">
          Email
          <input
            autoComplete="off"
            {...register("email", { required: "This field is required" })}
            className="sign-in-input"
            type="email"
          />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}
        </label>
        <label className="sign-in-label">
          Password
          <input
            autoComplete="off"
            {...register("password", {
              required: "this field is required",
              minLength: {
                value: 6,
                message: "password must be greater than 6 character",
              },
            })}
            className="sign-in-input"
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
          className="sign-in-btn"
        >
          Sign In
        </motion.button>
        <p className="sign-up-text">
          Don&apos;t have an account ? <Link to="/sign-up">Sign up here</Link>
        </p>
      </div>
    </form>
  );
};

export default SignInPage;
