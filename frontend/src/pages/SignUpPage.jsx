import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

const SignUpPage = () => {
  return (
    <form className="sign-up-form">
      <div className="container sign-up-form-container">
        <h2 className="sign-up-form-header">Sign Up Here</h2>
        <label className="sign-up-label">
          Full Name
          <input className="sign-up-input" type="text" />
        </label>
        <label className="sign-up-label">
          Email
          <input className="sign-up-input" type="email" />
        </label>
        <label className="sign-up-label">
          Password
          <input className="sign-up-input" type="password" />
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
