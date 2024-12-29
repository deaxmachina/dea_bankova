import "./USElections.css";
import { useState } from 'react'

const images = [
    {
        id: 'two',
        srcSmall: 'images/us-elections/dotcom/dotcom-2.png',
        src: 'images/us-elections/dotcom/dotcom-2.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'four',
        srcSmall: 'images/us-elections/dotcom/dotcom-4.png',
        src: 'images/us-elections/dotcom/dotcom-4.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'three',
        srcSmall: 'images/us-elections/dotcom/dotcom-3.png',
        src: 'images/us-elections/dotcom/dotcom-3.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'one',
        srcSmall: 'images/us-elections/dotcom/dotcom-1.png',
        src: 'images/us-elections/dotcom/dotcom-1.png',
        alt: '',
        rotate: Math.random()*20 - 10
    }
]



const Summary = () => {

    const [transformOrigin, setTransformOrigin] = useState("center");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setTransformOrigin(`${x}% ${y}%`);
    };
  
    const handleMouseLeave = () => {
      setTransformOrigin("center");
    };

    return (
        <div class='text-well'>
            <h3>About</h3>
            <div className="text">
                For the 2024 US elections, Reuters Graphics published its coverage on reuters.com as
                <a href='https://www.reuters.com/graphics/USA-ELECTION/RESULTS/zjpqnemxwvx/' target='_blank'>a stand-alone site</a>      
                and through embedded graphics prominently displayed on the homepage, both 
                on <a href='http://reuters.com/' target='_blank'>reuters.com</a> and <a href='https://jp.reuters.com/' target='_blank'>jp.reuters.com</a>. 
                Additionally, the election graphics from the page were licensed to numerous media clients worldwide in multiple languages. 
                Reuters’ own election page garnered <span class='highlight'>millions of views</span> just within the first couple of days.
            </div>
            <video 
                controls 
                autoPlay 
                loop 
                muted 
                className="summary-video"
            >
                <source src="/images/us-elections/videos/national-all-views-1.2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>        

            <br></br><br></br>
            <h3>My role</h3>
            <p>
                As the <span className='highlight'>main front-end developer</span>, I was responsible 
                for <span className='underline'>building all US national and state maps and cartograms</span>, a lot of 
                the <span className='underline'>structure and architecture of the front end</span> (building components in Storybook), as well 
                as contributing to the development of other components and the overall Reuters page code. I collaborated closely 
                with a cartographer, a designer, front- and back-end developers, editors, and accessibility (a11y) experts. 
                My role also included <span className='underline'>providing technical mentorship</span> and conducting code reviews.
                <br></br><br></br>
                I <span className='underline'>implemented advanced accessibility features</span> that
                greatly surpassed typical newsroom standards, enabling keyboard 
                and voice-over users to fully navigate every part of the maps and access all page information. In addition, I actively 
                participated in design discussions and contributed to proof-checking language translations.
            </p>
            <br></br><br></br>
            <h3>Tech</h3>
            <p>
                The front-end was developed <span className='underline'>almost entirely from scratch</span> for 2024, 
                with an emphasis on writing <span className='underline'>clean</span>, <span className='underline'>maintainable</span>, <span className='underline'>performant</span> and future-proof code. 
                Our tech stack 
                included <img className="logo-icon" src='/images/us-elections/tech stack icons/Svelte_Logo.svg' alt='logo of Svelte'/><span className="bold">Svelte 4</span>, <span className="tech-name">SvelteKit</span>, 
                <img className="logo-icon" src='/images/us-elections/tech stack icons/Typescript_logo_2020.svg' alt='logo of TypeScript'/><span className="bold">TypeScript</span>, 
                <img className="logo-icon" src='/images/us-elections/tech stack icons/d3.svg' alt='logo of D3'/><span className="bold">D3.js</span>, 
                and component-based 
                development in  <img className="logo-icon" src='/images/us-elections/tech stack icons/storybook.png' alt='logo of Storybook'/><span className="tech-name">Storybook</span>.

                <br></br><br></br>
                In my work, I leveraged many features of Svelte and SvelteKit, 
                such as <span className="circle">stores</span> and <span className="circle">contexts</span>, <span className="circle">key-ed blocks</span>, 
                <br></br><span className="circle">reactive variables and statements</span>, and lifecycle methods only when strictly necessary. All components were designed 
                to minimise reliance on more “traditional” d3-based architectures that heavily use lifecycle methods, instead 
                favouring native Svelte functionality and rendering. 
                <br></br><br></br>
                The code was written up to <span className='underline'>high production standards</span>, including following software development cycles, 
                disciplined code structure (isolation of functions/variables, components, classes, etc.), writing sensible 
                comments and documentation.
            </p>
            <br></br>
            <h3 className="map-view-title">Maps on the main Reuters / JP homepages</h3>
            <div className="images-grid dotcom">
            {
                images.map((img, idx) => (
                    <div 
                        className="grid-item" 
                        onClick={() => {
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={img.srcSmall ? img.srcSmall : img.src} alt={img.alt}  style={{ transformOrigin }} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Summary