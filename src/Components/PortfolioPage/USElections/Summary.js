import "./USElections.css";



const Summary = () => {

    return (
        <div class='text-well'>
            <h3>About</h3>
            <p>
                For the 2024 US elections, Reuters Graphics published its coverage on reuters.com as a stand-alone site 
                (link here) and through multiple embedded graphics prominently displayed on the homepage 
                (both on <a href='http://reuters.com/' target='_blank'>reuters.com</a> and <a href='http://reuters.com/' target='_blank'>reuters.co.jp</a>
                .) Additionally, embed components were licensed to approximately 25 clients worldwide (in 8 languages), 
                including the BBC (link). Reuters’ own election page garnered <span class='highlight'>millions of views</span> just within the first couple of days.

                (video of best representation of navigating the whole page)
            </p>
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
                for <span className='underline'>building all US national and state maps and cartograms</span>, 
                as well as contributing to the development of other components and the overall Reuters page code. I collaborated closely 
                with a cartographer, a designer, front- and back-end developers, editors, and accessibility (a11y) experts. 
                My role included providing technical mentorship and conducting code reviews.
                <br></br><br></br>
                I <span className='underline'>implemented advanced accessibility feature</span> that
                vastly surpassed typical newsroom standards, enabling keyboard 
                and voice-over users to fully navigate every part of the maps and access all page information. In addition, I actively 
                participated in design discussions and contributed to proof-checking translations for languages I have some familiarity with.
            </p>
            <br></br><br></br>
            <h3>Tech</h3>
            <p>
                The front-end was developed almost entirely from scratch for 2024, with an emphasis on writing clean, 
                maintainable, and performant code that could be reused for future elections with minimal modifications. 
                Our tech stack 
                included <img className="logo-icon" src='/images/us-elections/tech stack icons/Svelte_Logo.svg' alt='logo of Svelte'/><span className="bold">Svelte 4</span>, <span className="tech-name">SvelteKit</span>, 
                <img className="logo-icon" src='/images/us-elections/tech stack icons/Typescript_logo_2020.svg' alt='logo of TypeScript'/><span className="bold">TypeScript</span>, 
                <img className="logo-icon" src='/images/us-elections/tech stack icons/d3.svg' alt='logo of D3'/><span className="bold">D3.js</span> (with d3 pan and zoom), 
                and component-based 
                development in  <img className="logo-icon" src='/images/us-elections/tech stack icons/storybook.png' alt='logo of Storybook'/><span className="tech-name">Storybook</span>.

                <br></br><br></br>
                In my work, I leveraged many features of Svelte and SvelteKit, 
                such as <span className="circle">stores</span> and <span className="circle">contexts</span>, <span className="circle">key-ed blocks</span>, 
                <br></br><span className="circle">reactive variables and statements</span>, and lifecycle methods only when strictly necessary. All components were designed 
                to minimise reliance on more “traditional” d3-based architectures that heavily use lifecycle methods, instead 
                favouring native Svelte functionality and rendering. 
                <br></br><br></br>
                The code was written up to high production standards, including following software development cycles, 
                disciplined code structure (isolation of functions/variables, components, classes, etc.), writing sensible 
                comments and documentation.
            </p>
        </div>
    )
}

export default Summary