import Meta from '../components/Meta';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ApiProfile from 'apis/ApiProfile';
import { useEffect, useState } from 'react';

const BankProfile = () => {
    const pageTitle = 'Bank Profile';
    const [profile, setProfile] = useState({
        balance: '',
        image: '',
        username: '',
    });

    const getProfileData = async () => {
        try {
            const response = await ApiProfile({});
            console.log();
            setProfile(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfileData();
    }, []);

    return (
        <Container>
            <Meta title={pageTitle} />
            <Row>
                <Col sm="5" className="mx-auto">
                    <Card>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className="mx-auto mt-3 text-center" xs={4} md={4}>
                                        <Image
                                            fluid
                                            src={profile.image || 'https://place-hold.it/90x90/666/fff.png/000'}
                                            roundedCircle
                                            className="my-3"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                            <Card.Title className="text-center">{profile.username}</Card.Title>
                            <Card.Text className="text-center">Balance: {profile.balance} KWD</Card.Text>
                            <Form>
                                <Form.Group controlId="formFile" className="mb-3 text-center">
                                    <Form.Label>Upload a profile picture</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Form>
                            <div className="text-center">
                                <Button variant="light">Save</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BankProfile;
