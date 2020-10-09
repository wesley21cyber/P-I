import React from 'react'
import './Cabecalho.css'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default (props) => {

    console.log(props)

    return (
        <>
            <Navbar bg="danger" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://lh3.googleusercontent.com/-hE2cgSFDrI0/X2VAhV9TjHI/AAAAAAAAA1I/XahgScp-gJcyvkePRFeJydda3KjNYUkRQCLcBGAsYHQ/logo1.png"
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                    />{' '}
                   FOOD'D FOME
                </Navbar.Brand>
            </Navbar>
            <p></p>
            <Navbar bg="danger" variant="dark">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Cardápio</Nav.Link>
                    <Nav.Link href="#features">Meus Pedidos</Nav.Link>
                    <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
                    <Nav.Link href="#pricing">Perfil</Nav.Link>
                </Nav>
            </Navbar>
            <br />
        </>
    )
}
