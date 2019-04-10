import React, { Fragment } from "react";
import { Overlay, SpinStyle } from "../../view/styled/Layout";
import { Spinner } from "react-bootstrap";
import PropTypes from 'prop-types';

const Loader = ({ load }) => (
  <Fragment>
     <SpinStyle load={load}>
          <Spinner animation="grow" size="lg" /> 
     </SpinStyle>
    <Overlay load={load} />
  </Fragment>
);

Loader.propTypes = {
  load: PropTypes.bool.isRequired
};


export default Loader;