
import React, { Fragment } from 'react';
import { Card, Badge, Col, Row } from 'react-bootstrap';
import { ImageUser } from '../../view/styled/Layout';

const isEmpty = (x) => (
    x.length !== 0 ? true : false
)

const Cards = ({ user, repos }) => (
      <Fragment>
        <h1>
            {user.name}{' '}<Badge variant="secondary">{user.location}</Badge>
        </h1>
            <Card className="text-center">
            <Card.Header>{user.datetime}</Card.Header>
                <Card.Body>
                <Col xs={12}>
                    <ImageUser src={user.avatar_url} roundedCircle />
                </Col>
                </Card.Body>
            </Card>
            <Row>
            {repos.data.map(({
                    full_name,
                    name,
                    html_url,
                    description,
                    stargazers_count,
                    watchers_count,
                    language
                }, index) => (
                    isEmpty(repos) ?
                     (<Fragment key={index}>
                        <Col xs={4} className="container-card">  
                        <Card className="text-center">
                        <Card.Header>{name}</Card.Header>
                            <Card.Body>
                            <Card.Title>{description}</Card.Title>
                            <Card.Text>{full_name}</Card.Text>
                            <Card.Text>{stargazers_count}</Card.Text>
                            <Card.Text>{watchers_count}</Card.Text>
                            <Card.Text>{language}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Fragment>) :
                     <Fragment>Repositorio Vazio</Fragment>   
                 ))}
                 </Row>
     </Fragment>
);

export default Cards;  