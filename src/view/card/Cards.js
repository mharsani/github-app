import React, { Fragment } from "react";
import { Card, Badge, Col, Row, Alert } from "react-bootstrap";
import { ImageUser, CardContainer, CardUser } from "../../view/styled/Layout";

const Cards = ({ user, repos, isReposEmpty }) => (
  <Fragment>
    <CardContainer>
      <CardUser>
        <Card.Header>
          <h1>
            {user.name} <Badge variant="secondary">{user.location}</Badge>
          </h1>
        </Card.Header>
        <Card.Body>
          <Col xs={12}>
            <ImageUser src={user.avatar_url} roundedCircle />
            <h3>{user.bio}</h3>
          </Col>
        </Card.Body>
      </CardUser>
    </CardContainer>
    <Row>
      {repos.data.map(
        (
          {
            full_name,
            name,
            description,
            stargazers_count,
            watchers_count,
            language
          },
          index
        ) =>
          !isReposEmpty && (
            <Fragment key={index}>
              <Col xs={12} md={4}>
                <CardContainer>
                  <CardUser>
                    <Card.Header>{name}</Card.Header>
                    <Card.Body>
                      <Card.Title>{description}</Card.Title>
                      <Card.Text>Complete name: {full_name}</Card.Text>
                      <Card.Text>Starts: {stargazers_count}</Card.Text>
                      <Card.Text> Watchers: {watchers_count}</Card.Text>
                      <Card.Text>language: {language}</Card.Text>
                    </Card.Body>
                  </CardUser>
                </CardContainer>
              </Col>
            </Fragment>
          )
      )}
    </Row>
    {isReposEmpty && (
      <Fragment>
        <Alert variant="danger">
          <Alert.Heading>Empty Repository</Alert.Heading>
        </Alert>
      </Fragment>
    )}
  </Fragment>
);

export default Cards;
