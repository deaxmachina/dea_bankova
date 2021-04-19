import React from 'react';
import { Link } from "react-router-dom";

// individual blog preview 
const BlogPreview = ({ post }) => {
  // map the possible blog categories to colours which you use for 
  // the right border of the content box and the highlighting of the title
  const categoryColourMap = {
    'tutorial': '#4E1B34',
    'dataviz': '#1B3A4B',
    'other': '#48444b'
  }
  return (
    <div className="blog-preview-container">
      <div className="blog-preview-img" style={{backgroundImage: `url(${post.imgUrl})`}} ></div>
      <div className="blog-preview-content" style={{borderRightColor: categoryColourMap[post.category]}}>
        <Link to={`/writing/${post.id}`} >
          <h2 className="blog-preview-title medium-text" 
            onMouseOver={ event => {
              const el = event.target
              el.style.backgroundColor = categoryColourMap[post.category]
            }}
            onMouseOut={ event => {
              const el = event.target;
              el.style.backgroundColor = 'inherit'
            }}>
            {post.title}
          </h2>
        </Link>
        <p className="blog-preview-date">{post.date}</p>
        <p className="blog-preview-summary">{post.description}</p>
      </div>
    </div>
  )
};

export default BlogPreview;