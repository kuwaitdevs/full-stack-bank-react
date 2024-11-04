import Meta from '../components/Meta'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Logout = () => {
  // page content
  const pageTitle = 'Privacy Policy'
  const { setToken } = useAuth();
  const navigate = useNavigate();

  setToken();
  navigate("/", { replace: true });

  return (
    <div>
      <Meta title={pageTitle}/>
    </div>
  )
}

export default Logout