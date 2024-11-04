import { Link, useNavigate } from "react-router-dom";
import { Nav, Container, Image } from "react-bootstrap";
import ImgCodeWindow from '../assets/code-window.png';
import { useAuth } from "../provider/authProvider";

const MenuAuth = () => {
    const navigate = useNavigate();

    const { setToken } = useAuth();
    
    const handleLogout = () => {
      setToken();
      navigate("/", { replace: true });
    };

  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-success text-decoration-none"
        >
          <Image src={ImgCodeWindow} width='auto' height='30' className="me-2" />
          Full Stack Bank
        </Link>
        <Nav variant="pills" color="success" defaultActiveKey="/bank/home" className="justify-content-center col-md-6">
            <Nav.Item className="mx-3" onClick={() => navigate("/bank/home")}>
                <Nav.Link  eventKey="/bank/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-3">
                <Nav.Link onClick={() => navigate("/bank/transactions")} eventKey="/bank/transactions">Transactions</Nav.Link>
            </Nav.Item>
            
            <Nav.Item className="mx-3">
                <Nav.Link onClick={() => navigate("/bank/users")} eventKey="/bank/users">Users</Nav.Link>
            </Nav.Item>

            <Nav.Item className="mx-3">
                <Nav.Link onClick={() => navigate("/bank/profile")} eventKey="/bank/profile">Profile</Nav.Link>
            </Nav.Item>

        </Nav>
        <Nav className="col-md-3">
          <div className="text-end w-100">
            <Link to="/bank/logout">
              <button onClick={handleLogout} type="button" className="btn btn-success me-2">
                Logout
              </button>
            </Link>
          </div>
        </Nav>
      </header>
    </Container>
  );
};

export default MenuAuth;
