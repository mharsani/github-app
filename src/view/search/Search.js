import React, { Fragment } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const Search = ({ handleSubmite }) => (
  <Fragment>
    <Form onSubmit={handleSubmite}>
      <InputGroup>
        <FormControl
          placeholder="Search a user"
          aria-label="Search a user"
          aria-describedby="Search a user"
          name="inputSearchUser"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  </Fragment>
);

Search.propTypes = {
  handleSubmite: PropTypes.func.isRequired
};

export default Search;
