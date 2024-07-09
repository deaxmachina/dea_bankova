import React from "react";

const ObservableLink = ({ windowWidth }) => {
  return (
    <>
      <div className="observable-container"> 
      Also check out my <button>
          <a href="https://observablehq.com/@deaxmachina" target="_blank">
            Observable notebooks
          </a>
        </button> & <button>
          <a href="https://openprocessing.org/user/421888" target="_blank">
            OpenProcessing sketches
          </a>
        </button>  
      </div>
    </>
  )
};

export default ObservableLink;