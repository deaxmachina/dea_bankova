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
        <div className="arrow__container" >
          <FontAwesomeIcon icon={faChevronUp} className="arrow-up" /> 
        </div>
      </Link>   
    </>
  )
};

export default Arrow;