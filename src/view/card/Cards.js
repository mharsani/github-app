import React, { Fragment } from "react";
import { Card, Badge, Col, Row } from "react-bootstrap";
import { ImageUser, CardContainer, CardUser } from "../../view/styled/Layout";
import Message from "../../view/message/Message";
import PropTypes from "prop-types";

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
    {isReposEmpty && <Message variant="danger" message="Empty Repository" />}
  </Fragment>
);

Cards.propTypes = {
  isReposEmpty: PropTypes.bool.isRequired,
  repos: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Cards;
