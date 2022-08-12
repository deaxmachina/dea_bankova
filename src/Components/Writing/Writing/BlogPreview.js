import React from 'react';
import { Link } from "react-router-dom";

// individual blog preview 
const BlogPreview = ({ post }) => {
  // map the possible blog categories to colours which you use for 
  // the right border of the content box and the highlighting of the title
  const categoryColourMap = {
    'resource': '#4E1B34',
    'tutorial': '#48444b',
    'example': '#1B3A4B'
  }
  return (
    <div className="blog-preview-container">

      {/* note: this link used to be a div with these styles but wrapping the div in the link 
      breaks the styles; maybe there is a better way of doing this? 
      */}
      <Link to={post.hasPage && `/resources/${post.id}`} 
      className="blog-preview-img" 
      style={{backgroundImage: `url(${post.imgUrl})`}}
      ></Link>

      <div className="blog-preview-content" style={{borderRightColor: categoryColourMap[post.category]}}>
        <Link to={post.hasPage &&  `/resources/${post.id}`} >
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
        {
          post.hasPage ?
            <Link to={`/resources/${post.id}`} >
              <button className="blog-preview-btn" style={{backgroundColor: categoryColourMap[post.category]}}>View</button>
            </Link>
          :
            <a href={post.url} target='_blank'>
              <button className="blog-preview-btn" style={{backgroundColor: categoryColourMap[post.category]}}>View</button>
            </a>     
        }

      </div>
    </div>
  )
};

export default BlogPreview;