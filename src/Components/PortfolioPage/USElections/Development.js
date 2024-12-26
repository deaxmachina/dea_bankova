import "./USElections.css";
import { useState, useEffect } from 'react'
import { annotate, annotationGroup } from 'rough-notation';

const patternImages = [
    {
        id: 'one',
        srcSmall: 'images/us-elections/custom layers/patterns-1.png',
        src: 'images/us-elections/custom layers/patterns-1.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'two',
        srcSmall: 'images/us-elections/custom layers/patterns-2.png',
        src: 'images/us-elections/custom layers/patterns-2.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'three',
        srcSmall: 'images/us-elections/custom layers/patterns-3.png',
        src: 'images/us-elections/custom layers/patterns-3.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'four',
        srcSmall: 'images/us-elections/custom layers/patterns-4.png',
        src: 'images/us-elections/custom layers/patterns-4.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'five',
        srcSmall: 'images/us-elections/custom layers/patterns-5.png',
        src: 'images/us-elections/custom layers/patterns-5.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'six',
        srcSmall: 'images/us-elections/custom layers/patterns-6.png',
        src: 'images/us-elections/custom layers/patterns-6.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
]

const Development = ({ children }) => {
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
            <h3>Three different map views</h3>
            <p>
                The page featured three separate map ‘views’, showing different aspects of the results as they were 
                reported throughout the election. These were: called races, strength of lead, and vote count status 
                for the Presidential, Senate, House and Governor races. In addition, there were two cartograms showing 
                electoral votes for President and districts for House. 
            </p>      
            {children}
            <p>
                I wrote the code to implement these complex interactive views/maps basically from scratch. 
                All maps included features such as:
            </p>

            {/* Custom layers */}
            <div className="text">
                <span className='listing highlight'>Custom layers</span> supporting various pattern fills, as well as circle layers.
            </div>
            <div className="images-grid">
            {
                patternImages.map((img, idx) => (
                    <div 
                        className="grid-item" 
                        style={{  }}
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
            
            {/* Custom interaction behaviours */}
            <div className="text">
                <span className='listing highlight'>Custom interaction behaviours</span> for an improved user experience, including
                <ul>
                    <li>Greying out neighbouring states when the user zooms into a given state (screenshot of greyed out state)</li>
                    <li>Always centring first on a state when it is clicked, then centring on a county when that is subsequently clicked (video of zoom behaviours)</li>
                    <li>Allowing further click-to-zoom on a county for more granular interactions with smaller counties and townships (video of double click to zoom)</li> 
                </ul>
            </div>

            {/* Legends */}
            <div className="text">
                <span className='listing highlight'>Separate legends for each map</span>, dynamically changing depending on whether the user has clicked on a state or is viewing 
                the map in its entirety. This ensures only the relevant legend is shown at each stage, avoiding clutter on the page.
            </div>

            {/* Tooltips */}
            <div className="text">
                <span className='listing highlight'>Custom tooltips</span> transforming into modals on mobile
                <ul>
                    <li>I implemented approximately half of the logic for the content of all tooltips and all of the logic determining how they should behave differently on desktop and mobile.</li>
                    <li>Highly customisable tooltips / modals that behave differently on our Reuters page and client embeds</li>
                    <li>For mobile, I developed two options (for dotcom and embeds): one where the modal sticks to the bottom of 
                        the page when the user navigates to a geographic feature, and another where the modal is persistently placed 
                        just below the map in the same scenario. These options required distinct technical considerations, 
                        especially around persisting the highlighted state/county/district to ensure a seamless user experience.
                    </li>
                </ul>
            </div>
            <div className="container-tooltips-videos">
                <video 
                    width="250" 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                >
                    <source src="/images/us-elections/videos/tooltip-mobile-1.1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>    
                <video 
                    width="250" 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                >
                    <source src="/images/us-elections/videos/tooltips-mobile-2.1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>   
            </div>

            {/* Cartograms */}
            <div className="text">
            <span className='listing highlight'>New hex-based cartograms</span>
                <br></br>
                I coded these from scratch, including creating a mini-sandbox for our cartographer 
                to be able to drag and drop the hexes on a grid to create accurate geography. (images here) 
            </div>
            <div className="container-cartograms-images">
                <img src='images/us-elections/cartograms/cartogram-1.png' alt='' />
                <img src='images/us-elections/cartograms/cartogram-2.png' alt='' />
            </div>

            {/* Special election */}
            <div className="text">
                <span className='listing highlight'>Special election (state) improvement</span>
                where the state with a special election is place off the main map.
            </div>

            {/* State pages */}
            <div className="text">
                <span className='listing highlight'>State level pages with custom behaviour</span>
                Created separate maps for state-level results for each race. 
            </div>

            {/* Final notes */}
            <div className="text">
                I separated the logic for calculating what to display on the map from how to display it, enabling a 
                cleaner separation of concerns and the potential for adding new map views. The three map views required 
                approximately seven distinct pipelines for transforming results—from raw data to the final values 
                converted into visual elements (colour, pattern, or circle) on the map.
                <br></br><br></br>

                In each pipeline, I wrote code in such a way as to handle every conceivable scenario and the sequence 
                in which results might arrive. The code was refactored for simplicity and underwent multiple reviews. 
                I used TypeScript, incorporating data types provided by other team members to ensure both data and code integrity.
            </div>
        </div>
    )
}

export default Development