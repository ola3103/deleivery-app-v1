import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

const SignInPage = () => {
  return (
    <form className="sign-in-form">
      <div className="container sign-in-form-container">
        <h2 className="sign-in-form-header">Sign In Here</h2>
        <label className="sign-in-label">
          Email
          <input className="sign-in-input" type="email" />
        </label>
        <label className="sign-in-label">
          Password
          <input className="sign-in-input" type="password" />
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
