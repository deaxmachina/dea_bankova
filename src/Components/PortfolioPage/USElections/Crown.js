
const Crown = () => {

    return (
        <div className="crown-wrapper">
            <h3 className="dek">Reuters</h3>
            <video 
                controls={false}
                autoPlay 
                loop 
                muted 
                className="crown-video"
            >
                <source src="/images/us-elections/videos/walkthrough-all-1.1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> 
            <h1 className="page-tigle">
                2024 US Elections
            </h1>

            <div className="project-details">
                <div>
                    🔗 <a className="link" href='https://www.reuters.com/graphics/USA-ELECTION/RESULTS/zjpqnemxwvx/' target='_blank'>Reuters: US election results 2024</a>
                </div>
                <div>💪🏻 <span className="bold">Responsible for:</span> main front end dev; maps implementation</div>
                <div>
                    🛠️ <span className="bold">Tools:</span> <img className="logo-icon" src='/images/us-elections/tech stack icons/Svelte_Logo.svg' alt='logo of Svelte'/>Svelte 4 & SvelteKit / <img className="logo-icon" src='/images/us-elections/tech stack icons/Typescript_logo_2020.svg' alt='logo of TypeScript'/> TypeScript & JavaScript / <img className="logo-icon" src='/images/us-elections/tech stack icons/d3.svg' alt='logo of D3'/>D3.js / <img className="logo-icon" src='/images/us-elections/tech stack icons/storybook.png' alt='logo of Storybook'/>Storybook
                </div>
            </div>
        </div>
    )
}

export default Crown