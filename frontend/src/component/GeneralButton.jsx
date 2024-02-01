import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

const GeneralButton = ({ btnText }) => {
  return (
    <Link className="link-to-signup-btn" to="/sign-up">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: spring, duration: 0.3 }}
        className="general-btn"
      >
        {btnText}
      </motion.button>
    </Link>
  );
};

export default GeneralButton;
