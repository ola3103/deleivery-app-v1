import Footer from "./Footer";
import UserNavBar from "./UserNavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-container">
        <UserNavBar />
        <div className="layout-box">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
