import React, { useEffect } from "react";
import "./Arrow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Arrow = () => {

  useEffect(() => {
    //window.addEventListener('scroll', (e) => {console.log("event listened")});
  }, [])


  return (
    <>
      <div className="arrow__container" onScroll={ (e) => console.log(e) }>
        <Link to="/" > 
          <FontAwesomeIcon icon={faChevronUp} className="arrow-up" /> 
        </Link>   
      </div>
    </>
  )
};

export default Arrow;