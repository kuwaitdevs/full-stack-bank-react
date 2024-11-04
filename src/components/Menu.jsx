import { Link } from "react-router-dom";
import { Nav, Container, Image } from "react-bootstrap";
import ImgCodeWindow from '../assets/code-window.png';
const Menu = () => {
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
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/register" className="nav-link px-2 link-secondary">
                Register
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <Link to="/login">
              <button type="button" className="btn btn-success me-2">
                Login
              </button>
            </Link>
          </div>
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
