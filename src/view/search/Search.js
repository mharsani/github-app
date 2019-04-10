import React, { Fragment } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

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

export default Search;
