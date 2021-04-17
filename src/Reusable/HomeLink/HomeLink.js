import React from 'react';
import { Link } from "react-router-dom";
import "./HomeLink.css";

const HomeLink = ({ color }) => {
  return (
    <Link to="/" >
      <div className="home-link">
        <p style={{color: color}}>home</p>
      </div>
    </Link>
  )
};

export default HomeLink;