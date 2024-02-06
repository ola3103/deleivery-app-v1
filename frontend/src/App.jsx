import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UserHomepage from "./pages/UserHomepage";
import Orders from "./pages/Orders";
import Layout from "./component/Layout";
import Map from "./component/Map";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/user-homepage"
          element={
            <Layout>
              <UserHomepage />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route path="/map" element={<Map />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
