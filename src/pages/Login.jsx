import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

import imgCreditCard from '../assets/credit-card.png';
import ApiLogin from '../apis/ApiLogin';
import { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useAuth } from '../provider/authProvider';

const Login = () => {
    const { setToken } = useAuth();
    const pageTitle = 'Login';
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [loginLoading, setLoginLoading] = useState(false);
    const navigate = useNavigate();

    let [toast, setToast] = useState({
        show: false,
        header: '',
        body: '',
    });

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const loginUser = async () => {
        setLoginLoading(true);
        try {
            const response = await ApiLogin({
                username,
                password,
            });

            setToken(response.data.token);
            navigate('/bank/home', { replace: true });
        } catch (error) {
            setToast({
                show: true,
                header: 'Error',
                body: 'Wrong username/password',
            });
            return;
        } finally {
            setLoginLoading(false);
        }
    };

    return (
        <Container>
            <Meta title={pageTitle} />
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                <Toast
                    onClose={() => setToast({ header: '', body: '', show: false })}
                    show={toast.show}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto">{toast.header}</strong>
                        <small></small>
                    </Toast.Header>
                    <Toast.Body>{toast.body}</Toast.Body>
                </Toast>
            </ToastContainer>
            <Row className="g-5">
                <Col sm="12" md="12" lg="6">
                    <Image src={imgCreditCard} fluid />
                </Col>
                <Col sm="12" md="12" lg="6">
                    <div className="text-center mt-5">
                        <h4 className="text-success">Log in to your account</h4>
                        <p className="text-capitalize">
                            If you don't have an account,
                            <Link to="/register" className="nav-link px-2 link-primary">
                                Register here
                            </Link>
                        </p>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={handleUsernameChange} type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>

                        <Row>
                            <Col sm="12">
                                <Button className="float-end" variant="link">
                                    Forgot Password?
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <Button
                                    disabled={loginLoading}
                                    onClick={loginUser}
                                    variant="light"
                                    type="submit"
                                    className="w-100"
                                >
                                    {loginLoading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />{' '}
                                            Loading...
                                        </>
                                    ) : (
                                        <> Login </>
                                    )}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
