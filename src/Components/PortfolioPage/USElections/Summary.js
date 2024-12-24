import "./USElections.css";
import { useState, useEffect } from 'react'
import { annotate, annotationGroup } from 'rough-notation';


const Summary = () => {

    useEffect(() => {
        const n1 = document.querySelectorAll(".highlight");
        const n2 = document.querySelectorAll(".underline");
        const n3 = document.querySelectorAll(".circle");

        const annotatedHighlight = []
        n1.forEach(n => {
            annotatedHighlight.push(annotate(n, { type: "highlight", color: "#d2dde8", padding: 0, strokeWidth: 3 }))
        })

        const annotatedUnderline = []
        n2.forEach(n => {
            annotatedUnderline.push(annotate(n, { type: "underline", color: "#d2dde8", padding: 2, strokeWidth: 3 }))
        })

        const annotatedCircle = []
        n3.forEach(n => {
            annotatedUnderline.push(annotate(n, { type: "underline", color: "#d2dde8", padding: 1, strokeWidth: 2 }))
        })

        const ag = annotationGroup([...annotatedHighlight, ...annotatedUnderline, ...annotatedCircle]);
        ag.show();
        
    }, [])

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
                included <img className="logo-icon" src='/images/us-elections/tech stack icons/Svelte_Logo.svg' alt='logo of Svelte'/><span className="tech-name">Svelte 4</span>, <span className="tech-name">SvelteKit</span>, 
                <img className="logo-icon" src='/images/us-elections/tech stack icons/Typescript_logo_2020.svg' alt='logo of Svelte'/><span className="tech-name">TypeScript</span>, 
                <img className="logo-icon" src='/images/us-elections/tech stack icons/d3.svg' alt='logo of Svelte'/><span className="tech-name">d3.js</span> (with d3 pan and zoom), 
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