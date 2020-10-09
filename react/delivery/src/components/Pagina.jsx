import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

export default (props) => {
  return (
    <>
      {props.titulo &&
        <Container>
        <h1>{props.titulo}</h1>
        </Container>
        }
        <Container>
          {props.children}
        </Container>
    </>
  )
}