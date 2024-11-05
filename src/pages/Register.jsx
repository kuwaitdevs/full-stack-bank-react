import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import imgCreditCard from '../assets/credit-card.png';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ApiRegister from '../apis/ApiRegister';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useAuth } from '../provider/authProvider';

const Register = () => {
    // page content
    const pageTitle = 'Register';
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [base64IMG, setBase64IMG] = useState('');
    let [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useAuth();

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

    useEffect(() => {
        if (!selectedFile) {
            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(selectedFile);

        reader.onload = () => {
            setBase64IMG(reader.result);
        };
    }, [selectedFile]);

    const selectFile = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const registerUser = async () => {
        setLoading(true);
        try {
            const response = await ApiRegister({
                username,
                password,
                image: base64IMG,
            });

            setToken(response.data.token);
            navigate('/bank/home', { replace: true });
        } catch (error) {
            console.log(error);
            setToast({
                show: true,
                header: 'Error',
                body: error.response?.data?.error || 'error',
            });
            return;
        } finally {
            setLoading(false);
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
                    autohide={true}
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
                            If you have an account,
                            <Link to="/login" className="nav-link px-2 link-primary">
                                Login here
                            </Link>
                        </p>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={handleUsernameChange} type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload a profile picture</Form.Label>
                            <Form.Control accept=".jpg, .png|image/*" onChange={selectFile} type="file" />
                        </Form.Group>

                        <Row>
                            <Col sm="12">
                                <Button variant="success" className="w-100" disabled={loading} onClick={registerUser}>
                                    {loading ? (
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
                                        <> Register </>
                                    )}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
