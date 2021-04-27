import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const TableOfContents = () => {
  return (
    <>
      <div className="post-template__table-of-contents">
        <div className="post-template__title-container">
          <div className="post-template__section-title-text highlight-dark-background">Table of Contents</div>
        </div>
        <ul className="post-template__table-of-contents-main-list">
          <li>
            <Link to="#overview-two-ways-combining-d3-react" className="post__toc-link">Overview of the two ways (DOM handled by React or by D3) of combining D3 and React</Link>
            <ul>
              <li><Link to="#pros-cons-either-way" className="post__toc-link">Pros and cons of each way</Link></li>
              <li><Link to="#pros-of-both" className="post__toc-link">Pros of both, or why use React with D3 in the first place</Link></li>
            </ul>
          </li>
          <li>
          <Link to="#react-d3-code-walkthroughs" className="post__toc-link">Code Walkthroughs</Link>
           <ul>
            <li><Link to="#simple-barchart-both" className="post__toc-link">Simple bar chart in both ways</Link></li>
            <li><Link to="#tooltip-both" className="post__toc-link">Tooltip in both ways</Link></li>
            <li><Link to="#force-with-react" className="post__toc-link">Force graph, the D3 way (useEffect + useRef) way</Link></li>
            <li><Link to="#brushing-with-react" className="post__toc-link">Brushing, the D3 way (useEffect + useRef) way</Link></li>
            </ul>
          </li>

        </ul>
      </div>
    </>
  )
};

export default TableOfContents;