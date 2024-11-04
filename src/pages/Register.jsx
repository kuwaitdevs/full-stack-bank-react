import Meta from '../components/Meta'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import imgCreditCard from '../assets/credit-card.png';

const Register = () => {
  // page content
  const pageTitle = 'Register'

  return (
    <Container>
        <Meta title={pageTitle}/>
        <Row className='g-5'>
            <Col sm="12" md="12" lg="6">
                <Image src={imgCreditCard} fluid />
            </Col>
            <Col sm="12" md="12" lg="6">
                <div className='text-center mt-5'>
                    <h4 className='text-success'>Log in to your account</h4>
                    <p className='text-capitalize'>If you have an account, 
                        <Link to="/login" className="nav-link px-2 link-primary">Login here</Link>
                    </p>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload a profile picture</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Row>
                        <Col sm="12" >
                            <Button variant="success" className='w-100' type="submit">
                                Register
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Register