import React from "react";


// title and various text at the top of the page
const WritingTopText = () => {
  return (
    <>
      <div className="title-container" id="writing__title-container">
        <div className="title-text large-text highlight-dark-background" id="writing__title-text">Resources</div>
      </div>
      <div className="body-text-normal writing__explanation" >
        I occasionally put together <span className='resource'>data viz resources</span>, <span className='example'>examples</span>, <span className='tutorial'>tutorials</span>, 
        and <span>various other musings</span>. 
      </div>
    </>
  )
};

export default WritingTopText;