// components
import Menu from "../components/Menu";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Menu />
      <main><Outlet /></main>
      <Footer />
    </>
  );
};

export default Layout;
