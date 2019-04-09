
import React, {Fragment} from 'react';
import { Card, Badge, Col, Image } from 'react-bootstrap';

const Cards = ({ user, repos }) => (
      <Fragment>
        <h1>
            {user.name}{' '}<Badge variant="secondary">{user.location}</Badge>
        </h1>
            <Card className="text-center">
            <Card.Header>{user.datetime}</Card.Header>
                <Card.Body>
                <Col xs={12}>
                    <Image src={user.avatar_url} roundedCircle />
                </Col>
                </Card.Body>
            </Card>
     </Fragment>
);

export default Cards;  