

const ResponsivePerformance = () => {

    return (
        <>
            <h3>Responsive and performant implementation</h3>
            <div className="text">
                The maps - as well as the entire page - were designed for actual and perceived performance, the 
                latter meaning that the users should have the perception of seeing results on a fully loaded page 
                as quickly as possible. To that end, my contributions were: 
            </div>

            <div className="text">
                <span className='listing highlight'>Optimised performance</span> 
                <br></br>
                Perceived map / page performance was optimised by writing code in such a way as to 
                enable server-side rendering (SSR) of the maps, instead of relying on client-side rendering to generate the visuals 
                dynamically after the page loads in the browser. The maps were pre-rendered, allowing the user 
                to see results on the page almost as soon as they opened it.  
            </div>

            <div className="text">
                I minimised calls to data and component re-rendering by using Svelte’s reactive functionality and careful component architecture.
            </div>

            <div className="text">
                <span className='listing highlight'>Minimal layout shifts</span> 
                <br></br>
                I optimised for decreased layout shifts (on desktop) using a combination of 
                functionality from SvelteKit, scss and JavaScript. I added placeholder maps for various scenarios, such as lack of data, 
                thus ensuring that the page never shows a blank space where a map should be.
            </div>

            <div className="text">
                <span className='listing highlight'>Fully responsive</span>, fast and performant svg maps using svg’s native viewBox.
                Zooming, panning, and resizing the maps on any device is quick and smooth. 
            </div>
            <video 
                controls 
                autoPlay 
                loop 
                muted 
                className='video-responsive'
            >
                <source src="/images/us-elections/videos/responsiveness-1.2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> 


        </>
    )
}

export default ResponsivePerformance