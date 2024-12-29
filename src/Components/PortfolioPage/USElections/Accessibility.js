import "./USElections.css";
import { useState } from 'react'

const Accessibility = () => {

    return (
        <div class='text-well'>
            <div className="text">
                I set myself the personal goal of making this election 
                page our <span className="highlight">most accessible to date</span> in terms of navigability (voice over, keyboard). The primary 
                challenge lay in the maps, which allowed for complex interaction patterns such as hovering, 
                clicking to zoom on a state and centre, and clicking again on a county to zoom in further, 
                with multiple event handlers on each shape in the map. 
                This complexity was compounded by the presence of tooltips at multiple levels, with some information 
                often available only through the tooltip corresponding to the geographical feature the user was interacting with.
            </div>

            {/**********************************/}
            {/*********** The result ***********/}
            {/**********************************/}
            <h3>The result</h3>

            <div className="text">
                I endeavoured to make the <span className="highlight">navigation intuitive</span>, using keys like tab and enter and turning the navigable svg elements into buttons.
                While this broke certain a11y rules about the html page structure, it provided a useful workaround for otherwise entirely 
                inaccessible interactive visualisation behaviour that is unfortunately the default for most interactive graphics. 
                <br></br> <br></br>
                The page is <span className="highlight">fully accessible</span> for 
                both <span className="underline">screen readers</span> and <span className="underline">keyboard-only navigation</span>. Feedback from keyboard and screen reader users was overwhelmingly positive. 
                <br></br> <br></br>
                <ul>
                    <li>
                        All maps are <span className="underline">navigable by keyboard</span>, including the ability to zoom into states and counties on the national maps.
                    </li>
                    <li>
                        Each map includes <span className="underline">screen reader descriptions</span> detailing what the map is about and how to navigate it,
                        provided at the point of entering the map.
                    </li>
                    <li>
                        All maps feature a <span className="underline">skip link button</span>, enabling users to bypass map content if desired.
                    </li> 
                    <li>
                        Maps allow users to:
                        <ul>
                            <li>Navigate by keyboard to obtain results by state.</li>
                            <li>Enter a state to access its counties, at which point a screen reader announces that the user is ‘inside’ a state.</li>
                            <li>Navigate through counties to obtain individual results.</li>
                        </ul>
                    </li>
                    <li>
                        Skip link buttons are also included on the main site navigation bar and the rail of called race results at 
                        the top of the page. These links enable users to skip content they may not wish to tab through. 
                        *Note: Without skip links, users must repeatedly press tab to navigate through lengthy sections before being 
                        allowed to move to the next one.
                    </li>
                </ul>
            </div>

            {/**********************************/}
            {/*********** The process **********/}
            {/**********************************/}
            <h3>The process</h3>
            <div className="text">
                The process of implementing the keyboard and voiceover navigability on the maps was enjoyable, 
                creative and not necessarily standard. Broadly speaking, I used a combination of: 
                <ul>
                    <li>
                        <span className="code">aria-live: assertive</span> to force the screen reader to read tooltips as they are 
                        reached (+ some random number magic and key-ed blocks in Svelte to make sure that all of the tooltip’s 
                        information is read and not just the bits that are different from the previous tooltip). 
                    </li>
                    <li>
                        <span className="code">aria hidden</span> to text elements to hide descriptions of the map or map interactions where relevant. 
                    </li>
                    <li>
                        <span className="code">aria-label</span>s in the right places to announce to the reader which state/county/district they are on. 
                    </li>
                    <li>
                        <span className="code">tabindex</span> and <span className="code">role</span> to essentially allow svg shapes (geo shapes) to behave like buttons, allowing 
                        me to add the appropriate event listeners to them.
                    </li>
                    <li>
                        Appropriate custom events on the geo elements that allow for full custom keyboard navigation, 
                        taking into account the fact that the default ‘equivalents’ for each existing event (such as the hovers and clicks) 
                        might not be the most intuitive one. 
                    </li>
                    <li>
                        <span className="code">aria-live: assertive</span> as appropriate to read out loud descriptions of where the user is currently on the map and what 
                        options for navigation they have from this point. 
                    </li>
                </ul>
            </div>
            <div className="text">
                    The video below shows a short interaction that I've recorded, navigating the Presidential map with Voice Over on Mac. 
                    Here I am using only the tab and enter keys to navigate and I also pressed a random key once to exit a county view.
            </div>
            <video 
                    controls 
                    autoPlay 
                    loop 
                    muted={false}
                    className="a11y-video"
                >
                    <source src="/images/us-elections/videos/a11y-1.1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>  

            {/**********************************/}
            {/********* Final thoughts *********/}
            {/**********************************/}
            <div className="wrapper-metrics">
                <img className="img-lighthouse" src='images/us-elections/lighthouse.png' alt='Screenshot from Lighthouse showing the numbers quoted above' />
                <div className="text">
                    The page overall achieved a Lighthouse Accessibility Score of 87 - the only deductions being on the Reuters-wide top nav bar - ,and a Best Practises Score of 96. 
                </div>
            </div>

            <div className="text">
                Finally, there are certainly areas where accessibility could be improved on both the maps and the overall page. 
                Due to time constraints, I could not address all of them. Working on this project highlighted specific gaps in 
                my knowledge around web a11y and I’m eager to address these in future projects. My goal is to apply 
                what I’ve learned here to create even more inclusive election pages and graphics moving forward.
            </div>

        </div>

    )
}

export default Accessibility;