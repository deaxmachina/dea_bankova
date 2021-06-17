import React from "react";

const ObservableLink = ({ windowWidth }) => {
  return (
    <>
      <div className="observable-container"> Also check out my 
        <button>
          <a href="https://observablehq.com/@deaxmachina" target="_blank">
            Observable Notebooks
          </a>
        </button>  
      </div>
    </>
  )
};

export default ObservableLink;