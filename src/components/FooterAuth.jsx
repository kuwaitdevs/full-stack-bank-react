import { Link } from "react-router-dom";
import { Nav, Container, Image,Row, Col } from "react-bootstrap";
import ImgCodeWindow from '../assets/code-window.png';

const FooterAuth = () => {
	const year = new Date().getFullYear();
	return (
		<Container>
			<Row>
				<Col className='mx-auto' lg="10">
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
									<Link to="/about" className="nav-link px-2 link-secondary">
										About
									</Link>
								</li>
								<li>
									<Link to="/privacy-policy" className="nav-link px-2 link-secondary">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link to="/license" className="nav-link px-2 link-secondary">
										Licensing
									</Link>
								</li>
								<li>
									<Link to="/contact" className="nav-link px-2 link-secondary">
										Contact
									</Link>
								</li>
							</ul>
						</Nav>
					</header>
					<footer className="text-center text-capitalize mt-2 mb-5">
						&copy; {year} CODED™. All Rights Reserved.
					</footer>
				</Col>
			</Row>
		</Container>
	);
};

export default FooterAuth;
