import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import React, {useState} from "react";

function Calculator() {
    const [firstValue, setFirstValue ] = useState(0);
    const [secondValue, setSecondValue ] = useState(0);
    return (
        <>
            <div>
                <h1 className="text-center">Calculate whatever you want</h1>
            </div>
            <div>
                <Row >
                    <Col md={8} lg={8} sm={8}>
                        <Row>
                            <Col md={6} lg={6} sm={6}>
                                <div>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Enter the value"
                                        className="mb-3"
                                    >
                                        <Form.Control type="number" defaultValue={firstValue} placeholder="0.00" />
                                    </FloatingLabel>
                                </div>
                            </Col>
                            <Col md={6} lg={6} sm={6}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Enter the value"
                                    className="mb-3"
                                >
                                    <Form.Control type="number" defaultValue={secondValue} placeholder="0.00" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Col>
                            <h1 className="text-center">Result......</h1>
                        </Col>
                    </Col>
                    <Col md={4} lg={4} sm={4}>
                        <ButtonGroup size="lg"  aria-label="Basic example">
                            <Button variant="secondary">+</Button>
                            <Button variant="secondary">-</Button>
                            <Button variant="secondary">X</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Calculator;