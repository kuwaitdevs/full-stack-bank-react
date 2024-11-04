import Meta from '../components/Meta';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BankUserCard from 'components/UserCard';

const BankUsers = () => {
    const pageTitle = 'Bank Users';
    
    return (
        <div>
            <Meta title={pageTitle} />
            <Container>
                <Row>
                    <Col xs="4">
                        <BankUserCard/>
                    </Col>
                    <Col xs="4">
                        <BankUserCard/>
                    </Col>
                    <Col xs="4">
                    <BankUserCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BankUsers;
