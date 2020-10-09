import React from 'react'
import './Cabecalho.css'
import { Navbar, Nav, Container, Form, FormControl, Button, Card, Image, Col, Figure, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="danger" variant="dark">
                <Container>
                    <Row>
                        <Col md={3} >
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    alt="171x180"
                                    src="https://lh3.googleusercontent.com/-hE2cgSFDrI0/X2VAhV9TjHI/AAAAAAAAA1I/XahgScp-gJcyvkePRFeJydda3KjNYUkRQCLcBGAsYHQ/logo1.png"
                                />
                            </Figure>
                        </Col>


                        <Col md={{ span: 1, offset: 7}}>
                            <h1>OLA</h1>
                        </Col>

                        <Col md={{ span: 3, offset: 3 }}>
                            <h1></h1>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <p></p>
            <Navbar bg="danger" variant="dark">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Cardápio</Nav.Link>
                    <Link className="nav-link" to="/paginaInicial">PaginaInicial</Link>
                    <Nav.Link href="#features">Meus Pedidos</Nav.Link>
                    <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
                    <Nav.Link href="#pricing">Perfil</Nav.Link>
                </Nav>
            </Navbar>
            <br />
        </>
    )
}
