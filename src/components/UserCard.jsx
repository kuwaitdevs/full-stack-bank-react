import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


function BankUserCard() {
  return (
    <Card className='shadow-sm'>
    <Row>
        <Col className='mx-auto mt-3' xs={3} md={3}>
            <Image src="https://place-hold.it/90x90/666/fff.png/000" roundedCircle />
        </Col>
    </Row>
    <Card.Body>
        <Card.Title className='text-center'>Wahab</Card.Title>
        <Card.Text className='text-center'>
            Balance: 120202
        </Card.Text>
        <Row>
            <Col className='text-center'>
                <Button variant="success">Transfer</Button>
            </Col>
        </Row>
    </Card.Body>
</Card>
  )
}

export default BankUserCard