import React from "react";
import "./PostTemplate.css";

// fpr general styles that will apply to all the posts
const PostTemplate = ({id, children }) => {
  return (
    <div className="post-template__wrapper">
      <div className="post-template__container">
        <div className="post-template__title-text large-text">This is a tempalate</div>
        <p className="post-template__date">Apr 2021</p>
        <div className="post-template__single-col-wrapper">
          <p className="post-template__single-col-para">
            Here is where a simple summary will go. It shouldn't be too long. 
            Here is where a simple summary will go. It shouldn't be too long. 
            Here is where a simple summary will go. It shouldn't be too long. 
            Here is where a simple summary will go. It shouldn't be too long. 
            Here is where a simple summary will go. It shouldn't be too long. 
            Here is where a simple summary will go. It shouldn't be too long. 
            Here is where a simple summary will go. It shouldn't be too long. 
            Here is where a simple summary will go. It shouldn't be too long. 
          </p>
        </div>


          <div className="post-template__table-of-contents">
            <h2 className="post-template__table-of-contents-title">Table of Contents</h2>
            <ul className="post-template__table-of-contents-main-list">
              <li>First section title</li>
              <li>Second section title</li>
              <ul>
                <li>Section section first subtitle</li>
                <li>Section section second subtitle</li>
              </ul>
              <li>Third Section</li>
              <li>Fourth Section</li>
            </ul>
          </div>


          <div className="post-template__single-col-wrapper">
            <h2 className="post-template__section-title">Some section title</h2>
            <h3 className="post-template__section-subtitle">Some section subtitle - this will probably be longer and more descriptive</h3>
            <p className="post-template__single-col-para">
              After the summary, there is two types of text chunks that we could have. 
              This is one of them - a single column, e,g. where we don't have code alongside. 
              This should probably be the same as the summary, so that the text looks 
              unified. 
              Here is some placeholder text. Here is some placeholder text. Here is some placeholder text. 
              Here is some placeholder text. Here is some placeholder text. Here is some placeholder text. 
              Here is some placeholder text. Here is some placeholder text. Here is some placeholder text. 
              Here is some placeholder text. Here is some placeholder text. Here is some placeholder text. 
              Here is some placeholder text. Here is some placeholder text. Here is some placeholder text. 
              Here is some placeholder text. Here is some placeholder text. Here is some placeholder text. 
              Here is some placeholder text. Here is some placeholder text. Here is some placeholder text. 
              <br />
              <br />
              This is some more text after a text break.
            </p>
          </div>




        <br />
        <br />
        <br />
        <div id={id}>
          {children}
        </div>
      </div>
    </div>
  )
};

export default PostTemplate;