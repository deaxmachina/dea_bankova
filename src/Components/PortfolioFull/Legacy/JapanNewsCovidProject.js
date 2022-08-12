import React from "react";

const JapanNewsCovidProject = ({ windowWidth }) => {

  let videoWidth; 
  if (windowWidth >= 1200) {
    videoWidth = '1100'
  } else if (windowWidth >= 900) {
    videoWidth = '900'
  } else if (windowWidth >= 600) {
    videoWidth = '600'
  } else if (windowWidth >= 400) {
    videoWidth = '400'
  } else {
    videoWidth = '280'
  }
  const videoHeight = videoWidth*0.55;

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#182E35',
    }}>
      <div style={{
        maxWidth: '1800px',
        width: '70%',
        margin: 'auto'
      }}>
      <h1 style={{
        fontFamily: 'Della Respira, serif',
        margin: '40px auto 40px auto',
        textAlign: 'center'
      }}>
        Covid-19 in Japan through the lens of Japanese media
      </h1>
      <h3 style={{
        margin: '20px auto 20px auto',
        textAlign: 'center'
      }}
      >
        About
      </h3>
      <p>
      This demo is for a currently in-development project at the Watanave Lab, University of Tokyo. 
      The data is 
      from <a style={{color: "#F55F58"}} className="link-project" target="blank" href="http://agora.ex.nii.ac.jp/crisis/covid-19/mass-media/">the Covid-19 News Analysis Database</a> by <a style={{color: "#F55F58"}} className="link-project" target="blank"  href="http://agora.ex.nii.ac.jp/~kitamoto/">Prof Asanobu Kitamoto</a>; articles from Yahoo! Japan. 
      Further NLP analysis on the data, visualisation and website by Dea Bankova. Please do not re-share this work until official notice. 
      The aim of this project is to document the development of the Covid-19 pandemic in Japan, starting from Dec 2019 and running until Dec 2021 (planned), primarily via the use of news headlines. 
      </p>
      <h3 style={{
        margin: '20px auto 20px auto',
        textAlign: 'center'
      }}
      >
        How to read the graph
      </h3>
      <p>
      The spiral represents the timeline since the first Covid-19 related news in Japan. The height of each bar 
      corresponds to the number of news articles containing the selected keyword for that day, where the bars coloured 
      in orange correspond to the word being among the most important ones for that period (as measured by 
      tf;idf). Clicking on each period reveals a word cloud of the topmost co-occurring words with the selected word 
      – thus painting a picture of what specifically was being reported around the topic at the time. The reader can 
      also click on each word to display a sample of titles containing the selected topic and word. 
      </p>
      </div>
      <br /><br/>

      <iframe 
        width={videoWidth} 
        height= {videoHeight}
        src="https://www.youtube.com/embed/r1hAyKsESEc" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      >
      </iframe>
      <br /><br/> 
    </div>
    
  )
};

export default JapanNewsCovidProject;