import { Link } from "react-router-dom";
import GeneralButton from "./GeneralButton";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-item container">
        <li className="single-nav-item">
          <Link>Logo</Link>
        </li>
        <li className="single-nav-item sign-in-link">
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li className="single-nav-item ">
          <GeneralButton btnText="Sign Up" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
