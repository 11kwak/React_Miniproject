import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';


export const Header = () => {

    const [SignUpModalOn, setSignUpModalOn] = useState(false);
    const [SignInModalOn, setSignInModalOn] = useState(false);


    return (
        <>
            <SignUpModal show={SignUpModalOn} onHide={() => setSignUpModalOn(false)} />
            <SignInModal show={SignInModalOn} onHide={() => setSignInModalOn(false)} />

            <header>

                <Navbar bg="light" expand="lg">
                    <Container>

                        <Navbar.Brand >11kwak</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" style={{ position: 'absolute', right: 100, marginRight: "100px" }}>
                                <Nav.Link >
                                    <Button variant="primary"
                                        onClick={() => setSignInModalOn(true)}


                                    >로그인</Button>
                                </Nav.Link>
                                <Nav.Link >
                                    <Button variant="secondary"
                                        onClick={() => setSignUpModalOn(true)}>회원가입</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </header>
        </>
    )
}

