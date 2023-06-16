import React, { ChangeEvent, useState } from 'react';
import {Button, ButtonGroup, Col, Container, Form, Row} from 'react-bootstrap';

function Calculator() {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [result, setResult] = useState(0);

    function handleAddition() {
        setResult(+firstValue + +secondValue);
    }

    function handleSubtraction() {
        setResult(+firstValue - +secondValue);
    }

    function handleMultiplication() {
        setResult(+firstValue * +secondValue);
    }
    function handleDivision() {
        if (+secondValue !== 0) {
            setResult(+firstValue / +secondValue);
        }
    }

    return (
        <Container>
            <div>
                <h1 className="text-center">Calculate whatever you want</h1>
            </div>
            <div>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="floatingInputFirst">
                                <Form.Label>Enter the first value</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="firstValue"
                                    value={firstValue}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setFirstValue(event.target.value);
                                    }}
                                    placeholder="0.00"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="floatingInputSecond">
                                <Form.Label>Enter the second value</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="secondValue"
                                    value={secondValue}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                        setSecondValue(event.target.value);
                                    }}
                                    placeholder="0.00"
                                />
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>
                <Row className="justify-content-center mt-2 mb-2">
                        <ButtonGroup size="lg" className="w-50">
                            <Button variant="secondary" onClick={handleAddition}>
                                +
                            </Button>
                            <Button variant="secondary" onClick={handleSubtraction}>
                                -
                            </Button>
                            <Button variant="secondary" onClick={handleMultiplication}>
                                X
                            </Button>
                            <Button variant="secondary" onClick={handleDivision}>
                                /
                            </Button>
                        </ButtonGroup>
                </Row>

                <Row>
                    <Col md={12}>
                        <h1 className="text-center">Result {result}</h1>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Calculator;
