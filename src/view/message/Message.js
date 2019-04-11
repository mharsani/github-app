import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const Message = ({ variant, message }) => (
  <Fragment>
    <Alert variant={variant}>
      <Alert.Heading>{message}</Alert.Heading>
    </Alert>
  </Fragment>
);

Message.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;
