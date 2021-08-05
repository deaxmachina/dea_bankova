import React from "react";
import "./TDBProject.css";

const minToChangeImage = 650; 

const TDBProject = ({ project, windowWidth }) => {
  return (
    <>
    <div className='portfolio-page__wrapper'>
      <div className="portfolio-page__image-background" style={{backgroundColor: project.backgroundColour}}></div>
      <div className="portfolio-page__image" style={{
        backgroundImage: windowWidth > minToChangeImage? `url(${project.individualPageImgUrl})` : `url(${project.individualPageSmallImgUrl})`,
        backgroundPosition: 'left'
        }}></div>
      <div className="portfolio-page__text body-text-normal" >
        <div className="portfolio-page__title-text large-text"><span>{project.title}</span></div>
        <p className="portfolio-page__responsible-for-container">
          <span className="portfolio-page__bold-text">Responsible for: </span>
          <span>{project.responsibleFor}</span>
        </p>
        <p className="portfolio-page__tools-container">
          <span className="portfolio-page__bold-text">Tools: </span>
          <span>{project.tools}</span>  
        </p>
        <p className="portfolio-page__client-container">
          <span className="portfolio-page__bold-text">Client: </span>
          <span>{project.client}</span>
        </p>
        <br />
        <p>
          On-going contract-based project with Teikoku Databank to build an interactive dashboard for 
          a large database of proprietary data about transactions between Japanese companies. 
          <br/><br/>
          I used React and D3 to pass along data to multiple components and make the dashboard as 
          interactive as possible, while creating a layout containing all the necessary information 
          for a printed version. I switched to HTML Canvas to represent the data for the largest 
          companies in the form of summary network graphs.
          <br/><br/>
          The product is internal, and the copyright belongs to Teikoku Databank. Screenshots with 
          obfuscated data taken with permission. 

        </p>
      </div>
    </div>

    <div className="tdb-project-description-container">
      <div className="tdb-project-description-content">

      <h2>Interactive Graph and Dashboard</h2>
      <div className="tdb-project-description-part1 gif1">
        <p>
          Interactive graph, where a company of interest is selected as the main node. The companies 
          with which the selected company has a business relationship (purchasing from or selling to) 
          are represented as nodes directly connected to it, and any transactions among them are depicted 
          as arcs. In the second layer, the circle packing represents a nested structure of industries 
          connected to the layer 1 companies.
          <br/><br/>
          Clicking on individual nodes has the effect of highlighting the relevant nodes and links, as 
          well as transforming the circle packing to show the industries that only the selected company 
          interacts with. It also brings up a small dashboard on the side with more detailed information 
          about the company. 
        </p>
        <img src="https://live.staticflickr.com/65535/51357153570_478cf4e15d_o.gif"></img>
      </div>

      <div className="tdb-project-description-part2">
        <img src="https://live.staticflickr.com/65535/51357233720_461fe011ca_o.png"></img>
        <img src="https://live.staticflickr.com/65535/51357233690_2b36cecb8d_o.png"></img>
        <img src="https://live.staticflickr.com/65535/51356220491_18a1c76c96_o.png"></img>
      </div>

      <div className="tdb-project-description-part1 gif2">
        <p>
          The Teikoku Databank company database is extensive, and there is a large variation in the number of 
          companies with which a selected company interacts. From only a handful to thousands. As a 
          pre-processing step, we check the number of direct (layer 1) connections and if they don’t 
          exceed 300, we display the SVG-based graph as depicted here. The slider allows the user to 
          select how many of the topmost important interactions they want to display – the graph is 
          dynamically updated.
        </p>
        <img src="https://live.staticflickr.com/65535/51356220526_00c8aba13b_o.gif"></img>
      </div>


      <h2>Large Networks</h2>
      <p>
        For the largest companies in the dataset, where their degree 2 nodes exceed 5,000, I took 
        the approach to switch to Canvas. Here, the nodes’ colours represent industries, and the graphs can 
        be filtered by industry. Using a force directed graph with a radial force allows for a representation 
        where the first layer is the first inner concentric ring (first degree of transactions) and the second 
        one – the outer (second degree of transactions). 
      </p>
      <br/>
      <div className="tdb-project-description-part3">
          <img src="https://live.staticflickr.com/65535/51357233830_24893c43ef_o.png"></img>
          <img src="https://live.staticflickr.com/65535/51355477302_5afaeaf2a5_o.png"></img>
          <img src="https://live.staticflickr.com/65535/51355477342_4e66797f72_o.png"></img>
          <img src="https://live.staticflickr.com/65535/51356446848_916017622b_o.png"></img>
          <img src="https://live.staticflickr.com/65535/51356953704_eb64eb5e05_o.png"></img>
          <img src="https://live.staticflickr.com/65535/51356446798_b4a79f3f22_o.png"></img>
      </div>


    </div>
  </div>
  </>
  )
}

export default TDBProject;