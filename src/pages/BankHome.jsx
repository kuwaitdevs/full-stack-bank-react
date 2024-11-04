import Meta from '../components/Meta';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BankHome = () => {
    const pageTitle = 'Bank Home';

    return (
        <Container>
            <Meta title={pageTitle} />
            <Row className="mb-4">
                <Col lg="4" className="mx-auto">
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Title className="text-center mb-2 mt-2">Your available balance:</Card.Title>
                            <Card.Text className="text-center mb-2 mt-2">
                                <span className="h2">
                                    19000 <span className="text-success h2">KWD</span>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="4" className="mx-auto">
                    <Card className="shadow">
                        <Card.Body>
                            <Row className="g-2">
                                <Col className="text-end" sm="5">
                                    Deposit{' '}
                                </Col>
                                <Col sm="7">
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                        label="Withdraw"
                                    />
                                </Col>
                            </Row>
                            <Card.Title className="text-center mb-2 mt-2">Amount</Card.Title>
                            <Row>
                                <Col className="text-center">
                                    <Form.Control type="number" placeholder="Amount" />
                                    <Button className="mt-3" size="lg" variant="light">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BankHome;
