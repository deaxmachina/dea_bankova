import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import ScrollToTop from "./Reusable/scrollToTop";
import PortfolioFull from "./Components/PortfolioFull/PortfolioFull";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import FrontPage from "./Components/FrontPage/FrontPage";
import Writing from "./Components/Writing/Writing/Writing";
import projectsMetadata from "./data/projectsMetadata";
import AllPosts from "./Components/Writing/Posts/AllPosts";

// listen for resize - you can leave this out of the functional component
// lets you listen for the width and height dynamically
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const App = () => {
  // get the width and height of the window 
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact
          render={ props => (
              <FrontPage {...props} windowWidth={windowWidth} windowHeight={windowHeight}/>
           )}
        />
        <Route path="/about" exact
          render={ props => (
              <About {...props} windowWidth={windowWidth} windowHeight={windowHeight} />
           )}
        />  
        <Route path="/writing" exact
          render={ props => (
              <Writing {...props} windowWidth={windowWidth} windowHeight={windowHeight} />
           )}
        />  
        <Route path="/portfolio" exact 
          render={ props => (
            <PortfolioFull {...props} windowWidth={windowWidth} />
          )}
        />    
        {
          projectsMetadata.map(project => (
            <Route path={`/portfolio/${project.id}`} exact
            render={ props => (
                <PortfolioPage {...props} project={project} windowWidth={windowWidth} />
             )}
          />  
          ))
        }
        <AllPosts/>
      </Switch>
    </Router>
    </>
  )
};

export default App; 