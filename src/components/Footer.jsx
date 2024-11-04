import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<Container>
			<Row>
				<Col className='mx-auto' lg="10">
					<hr/>
					<footer className="text-center text-capitalize mt-2 mb-5">
						&copy; {year} CODED™. All Rights Reserved.
					</footer>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
