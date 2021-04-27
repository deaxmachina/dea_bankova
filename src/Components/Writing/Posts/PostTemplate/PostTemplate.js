import React from "react";
import "./PostTemplate.css";

// This is just an example to serve as a reminder of the avilable classes and intended structure of the posts
const PostTemplateExample = () => {
  return (
    <div className="post-template__wrapper">
      <div className="post-template__container">
        <div className="post-template__title-text large-text">This is a tempalate</div>
        <p className="post-template__date">Apr 2021</p>
        <div className="post-template__single-col-wrapper">
          <p className="post-template__single-col-para">
            Here is where a simple summary will go. It shouldn't be too long. 
          </p>
        </div>

        <div className="post-template__table-of-contents">
          <div className="post-template__title-container">
            <div className="post-template__section-title-text highlight-dark-background">Table of Contents</div>
          </div>
          <ul className="post-template__table-of-contents-main-list">
            <li><a href="/" className="post__toc-link">First section title</a></li>
            <li><a href="/" className="post__toc-link">Second section title</a></li>
            <ul>
              <li><a href="/">Second section subtitle</a></li>
              <li><a href="/">Longer sutitle for the second section</a></li>
            </ul>
            <li><a href="/" className="post__toc-link">Third section title</a></li>
            <li><a href="/" className="post__toc-link">Fourth section title</a></li>
          </ul>
        </div>

        <div className="post-template__single-col-wrapper">
          <div className="post-template__title-container">
            <div className="post-template__section-title-text highlight-dark-background">Some section title</div>
          </div>
          <h3 className="post-template__section-subtitle">Subsection title</h3>
          <p className="post-template__single-col-para">
            After the summary, there is two types of text chunks that we could have. 
            This is one of them - a single column, e,g. where we don't have code alongside. 
            This should probably be the same as the summary, so that the text looks unified. 

            We could have <span className="post__highlighted-text">text that you want to emphaise</span>. 
            And also some <a href="google.com" target="_blank" className="post__link">links to stuff</a>.
            Or if you want to emphaise something but not highlight it <span className="post__emph-text">use this style</span>
          </p>
        </div>

        <div className="post-template__two-col-wrapper">
          <div className="post-template__title-container">
            <div className="post-template__section-title-text highlight-dark-background">Wide Section</div>
          </div>
          <div className="post-template__two-col-container">
            <div className="post-template__two-col-left">Some stuff on the left</div>
            <div className="post-template__two-col-right">And some stuff on the right</div>
          </div>
        </div>
      </div>
    </div>
  )
};


const PostTemplate = ({ id, children }) => {
  return (
    <div className="post-template__wrapper">
      <div className="post-template__container">
        <div id={id}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PostTemplate;