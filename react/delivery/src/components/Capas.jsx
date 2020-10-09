import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ lista = [], link, qtd = 2, foto = 'poster_path' }) => {

    const card = (foto) => (
        <Card>
            <Card.Img variant="top" src={foto} />
        </Card>
    )

    return (
        <>
            <Row>
                {lista.map(item => (
                    <React.Fragment Key={item.id}>
                        {
                            item[foto] &&
                            <Col md={qtd} Key={item.id} className="mb-3">
                                {link &&
                                    <Link to={`/${link}/${item.id}`}>
                                        {card(item[foto])}
                                    </Link>
                                }
                                {!link &&
                                    card(item[foto])
                                }
                            </Col>
                        }
                    </React.Fragment>
                ))}
            </Row>
        </>
    )
}