import PostReactD3 from "./1-ReactD3/1-ReactD3";
import { Route } from 'react-router-dom'; 


// This is just where you import all the current posts 
// and manually match the route to each post to the correct post id
// this is then imported as is into the App.js
const AllPosts = () => {
  return (
    <>
      <Route path={`/writing/d3-react-start`} exact
        render={ props => (
          <PostReactD3 />
        )}
      />
      {/*
        <Route path={`/writing/placeholder-title1`} exact
          render={ props => (
            <PostReactD3 />
          )}
        />
        <Route path={`/writing/placeholder-title2`} exact
          render={ props => (
            <PostReactD3 />
          )}
        />
       */}
    </>
  )
};

export default AllPosts;