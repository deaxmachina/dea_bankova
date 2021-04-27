import React from "react";

// title and various text at the top of the page
const WritingTopText = () => {
  return (
    <>
      <div className="title-container" id="writing__title-container">
        <div className="title-text large-text highlight-dark-background" id="writing__title-text">Writing</div>
      </div>
      <div className="body-text-normal writing__explanation" >
        I plan to write occasionally: <span>tutorials</span>, <span>data visualisation</span>, <span>other (musings, research, etc.)</span>
      </div>
    </>
  )
};

export default WritingTopText;