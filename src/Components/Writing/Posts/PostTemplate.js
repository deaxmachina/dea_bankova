import React from "react";

// fpr general styles that will apply to all the posts
const PostTemplate = ({id, children}) => {
  return (
    <>
      <h1>This is a tempalate</h1>
      <div id={id}>
        {children}
      </div>
    </>
  )
};

export default PostTemplate;