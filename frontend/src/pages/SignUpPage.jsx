import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors);

  return (
    <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="container sign-up-form-container">
        <h2 className="sign-up-form-header">Sign Up Here</h2>
        <label className="sign-up-label">
          Full Name
          <input
            className="sign-up-input"
            {...register("firstName", { required: "This field is required" })}
            type="text"
          />
          {errors.firstName && (
            <span className="form-error">{errors.firstName.message}</span>
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
              maxLength: {
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
