import PostReactD3 from "./1-ReactD3/1-ReactD3";
import PostSVGShapes from "./2-SVGShapes/2-SVGShapes";
import { Route } from 'react-router-dom'; 


// This is just where you import all the current posts 
// and manually match the route to each post to the correct post id
// this is then imported as is into the App.js
const AllPosts = () => {
  return (
    <>
      <Route path={`/resources/d3-react-start`} exact
        render={ props => (
          <PostReactD3 />
        )}
      />
       <Route path={`/resources/svg-shapes`} exact
        render={ props => (
          <PostSVGShapes />
        )}
      />
    </>
  )
};

export default AllPosts;