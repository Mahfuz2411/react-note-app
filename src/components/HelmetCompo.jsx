import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HelmetCompo = ({title}) => {
  return (
    <Helmet>
      <title>Note | {title}</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
  );
};

HelmetCompo.propTypes = {
  title: PropTypes.string,
};

export default HelmetCompo;
