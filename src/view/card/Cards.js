
import React, {Fragment} from 'react';
import { Card, Badge } from 'react-bootstrap';

const Cards = ({ user, repos }) => (
      <Fragment>
        <h1>
            {user.name}<Badge variant="secondary">{repos.name}</Badge>
        </h1>
            <Card className="text-center">
            <Card.Header>{user.datetime}</Card.Header>
                <Card.Body>
                <Card.Title>Some text here</Card.Title>
                <Card.Text>
                </Card.Text>
                </Card.Body>
            </Card>
     </Fragment>
);

export default Cards;  