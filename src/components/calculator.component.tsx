import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import React, {ChangeEvent, useState} from "react";

function Calculator() {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [result, setResult] = useState(0);

    function handleSubmit(event: any) {
        event.preventDefault();
    }

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
        <>
            <div>
                <h1 className="text-center">Calculate whatever you want</h1>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Row>

                        <Col md={8} lg={8} sm={8}>
                            <Row>
                                <Col md={6} lg={6} sm={6}>
                                    <div>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Enter the value"
                                            className="mb-3"
                                        >
                                            <Form.Control type="number" name="firstValue" value={firstValue}
                                                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                              setFirstValue(event.target.value)
                                                          }}
                                                          placeholder="0.00"/>
                                        </FloatingLabel>
                                    </div>
                                </Col>
                                <Col md={6} lg={6} sm={6}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Enter the value"
                                        className="mb-3"
                                    >
                                        <Form.Control type="number" name="secondValue" value={secondValue}
                                                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                          setSecondValue(event.target.value)
                                                      }}
                                                      placeholder="0.00"/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Col>
                                <h1 className="text-center">Result {result}</h1>
                            </Col>
                        </Col>
                        <Col md={4} lg={4} sm={4}>
                            <ButtonGroup size="lg" aria-label="Basic example">
                                <Button variant="secondary" name="addition" onClick={handleAddition}>+</Button>
                                <Button variant="secondary" onClick={handleSubtraction}>-</Button>
                                <Button variant="secondary" onClick={handleMultiplication}>X</Button>
                                <Button variant="secondary" onClick={handleDivision}>/</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default Calculator;