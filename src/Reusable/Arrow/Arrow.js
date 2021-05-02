import React, { useEffect } from "react";
import "./Arrow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
//import { HashLink as Link } from 'react-router-hash-link';

const Arrow = ({ linkto }) => {

  return (
    <>
      <Link to={linkto} > 
        <FontAwesomeIcon icon={faChevronUp} className="arrow-up" /> 
      </Link>   
    </>
  )
};

export default Arrow;