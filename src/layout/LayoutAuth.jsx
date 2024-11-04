import MenuAuth from "../components/MenuAuth";
import FooterAuth from "../components/FooterAuth.jsx";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <>
      <MenuAuth />
      <main><Outlet/></main>
      <FooterAuth />
    </>
  );
};

export default LayoutAuth;
