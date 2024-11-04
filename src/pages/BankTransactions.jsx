import Meta from '../components/Meta';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

const BankTransactions = () => {
    const pageTitle = 'Bank Transactions';
    const [value, onChange] = useState([new Date(), new Date()]);

    return (
        <div>
            <Meta title={pageTitle} />
            <Container>
                <Row>
                    <Col xs="1"></Col>
                    <Col xs="9">
                        <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                    </Col>
                    <Col xs="auto">
                        <Button variant="light">Search</Button>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
                <Row>
                    <Col className="text-center mb-3 mt-4">
                        <span>Filter: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Form.Check inline="true" label="All" name="group1" type={'radio'} id="chkAll" />
                        <Form.Check inline="true" label="Deposit" name="group1" type={'radio'} id="chkDeposit" />
                        <Form.Check inline="true" label="Withdraw" name="group1" type={'radio'} id="chkWithdraw" />
                        <Form.Check inline="true" label="Transfer" name="group1" type={'radio'} id="chkTransfer" />
                        <Form.Check inline="true" label="By Date" name="group1" type={'radio'} id="chkByDate" />
                    </Col>
                </Row>
				<Row>
					<Col className="text-center " xs="4"></Col>
                    <Col className="text-start " xs="2">From</Col>
					<Col className="text-start " xs="2">To</Col>
					<Col className="text-center" xs="4"></Col>
                </Row>
                <Row>
					<Col className="text-center mb-3 " xs="4"></Col>
                    <Col className="text-center mb-3 " xs="4">
                        <DateRangePicker className={'form-control'} onChange={onChange} value={value} />
                    </Col>
					<Col className="text-center mb-3 " xs="4"></Col>
                </Row>
				<Row>
					<Col className="mb-3 mx-auto" xs="10">
					<Card className="shadow-sm">
                        <Card.Body>
							<Row className='mt-2'>
								<Col>
									<span className="h6">
										-200
									</span>
								</Col>
								<Col>
									<span className="h6">
										28/05/2024
									</span>
								</Col>
								<Col>
									<span className="h6">
										transfer
									</span>
								</Col>
							</Row>
                            <Card.Text className="text-center mb-2 mt-2">

                            </Card.Text>
                        </Card.Body>
                    </Card>
					</Col>
                </Row>
            </Container>
        </div>
    );
};

export default BankTransactions;
