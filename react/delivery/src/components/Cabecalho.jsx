import React from 'react'
import './Cabecalho.css'
import { Navbar, Nav, Container, Form, FormControl, Button, Card, Image, Col, Figure, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default (props) => {

    console.log(props)
    const divStyle = {
        color: 'blue',
        backgroundcolor: 'blue',
    };

    return (
        <>
            <Row>
                <Col xs={6} md={5}>
                    <Figure>
                        <Image
                            width={220}
                            height={120}
                            alt="1000x1000"
                            src="/img/Logo-person.png"
                        />
                    </Figure>
                </Col>
                <Col md>
                    <Figure>
                        <Image
                            width={450}
                            height={115}
                            alt="1000x1000"
                            src="/img/Logo-titulo.png"
                        />
                    </Figure>
                </Col>
                <Col>
                   
                </Col>
            </Row>
            <p></p>
            <Row>
                <Col xs={12} md={11}>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/">Cardápio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Página Inicial</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Meus Pedidos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Sobre Nós</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Perfil</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col><Button variant="success" size="sm"><Image width={60} height={40} src="/img/carrinho.png"  /></Button></Col>
            </Row>
            <br />
        </>
    )
}
