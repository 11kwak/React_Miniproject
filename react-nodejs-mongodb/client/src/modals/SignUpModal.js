import { render } from '@testing-library/react'
import React from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login'
import { HorizonLine } from '../components/HorizonLine'

const SignUpModal = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Comfirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button style={{ width: "100%" }} variant="info" type="button" className="my-3">
                            Sign Up
                        </Button>
                        <HorizonLine text={"OR"} />
                        <GoogleLogin
                            render={renderProps => {
                                return <Button onClick={renderProps.onClick} disabled={renderProps.disabled}

                                    style={{ backgroundColor: "#176BEF", borgerColor: "#176BEF", width: "100%" }}
                                >
                                    <i className="fab fa-google"></i> &nbsp; Sign Up with Google
                                </Button>
                            }}
                        />


                    </Form>
                </Modal.Body>

            </Container>
        </Modal>
    );
}



export default SignUpModal
