import React from 'react';
import PostTemplate from "../PostTemplate";
import CodeBarChartDemo from "./BarChartDemo/CodeBarChartDemo";
import CodeBarChartUseEffectDemo from "./BarChartUseEffectDemo/CodeBarChartUseEffectDemo";
import CodeBarChartTooltip from "./BarChartTooltip/CodeBarChartTooltip";
import CodeForceDemo from "./ForceDemo/CodeForceDemo";
import CodeBrushDemo from "./BrushDemo/CodeBrushDemo"


const Header = () => {
  return (
    <>
      <div className="post-template__title-text large-text">Getting started with React and D3.js</div>
      <p className="post-template__date">Apr 2021</p>
    </>
  )
}

const Summary = () => {
  return (
    <>
      <div className="post-template__single-col-wrapper">
        <p className="post-template__single-col-para">
            I recently completed a 100 Days of Code challenge with React and D3 (
            <a className="post__link" href="https://github.com/deaxmachina/100daysD3" target="_blank">code</a> / <a className="post__link" href="https://100daysd3.netlify.app/" target="_blank">website</a> 
            ), and I wanted to share my thoughts on the two main 
            approaches for combining these two frameworks. I will go in depth into a couple of examples, 
            focusing specifically on the approach which I have tended to preffer, which uses the useEffect 
            and useRef React hooks. 
            <br />
            This post assumes some knowledge of both D3 and React, but is not geared towards experts. If you 
            are new to D3, I highly recommend Curran Kelleher’s <a className="post__link" href="https://curran.github.io/dataviz-course-2018/" target="_blank">Dataviz 2018 course</a> or 
            Shirley Wu’s Frontend Master’s <a className="post__link" href="https://frontendmasters.com/courses/d3/" target="_blank">Introduction to D3 course</a>
            <br />  
            <br />
            I use <span className="post__emph-text">React version 17 (17.0.1)</span> and <span className="post__emph-text">D3 version 6 (6.6.0).</span> 
            The React parts use functional components, 
            and the D3 ones the <a className="post__link" href="https://observablehq.com/@d3/selection-join" target="_blank">new-ish join API</a>. 
            I also make use of two very popular libraries chroma-js (v2.1.1) and lodash (v4.17.21).
        </p>
      </div>
    </>
  )
}


const TableOfContents = () => {
  return (
    <>
      <div className="post-template__table-of-contents">
        <div className="post-template__title-container">
          <div className="post-template__section-title-text highlight-dark-background">Table of Contents</div>
        </div>
        <ul className="post-template__table-of-contents-main-list">
          <li>
            <a href="/" className="post__toc-link">Overview of the two ways of combining D3 and React</a>
            <ul>
              <li>Pros and cons of each </li>
              <li>Pros of both, or why use React with D3 in the first place</li>
            </ul>
          </li>
          <li>
          <a href="/" className="post__toc-link">Code Walkthroughs</a>
           <ul>
              <li>Bar chart in both ways</li>
              <li>Tooltip, the useEffect way</li>
              <li>Force graph, the useEffect way </li>
              <li>Brushing, the useEffect way </li>
            </ul>
          </li>

        </ul>
      </div>
    </>
  )
}

const Section1 = () => {
  return (
   <>
   <div className="post-template__single-col-wrapper">
    <div className="post-template__title-container">
      <div className="post-template__section-title-text">
        Overview of the two ways of combining D3 & React
      </div>
    </div>
    <p className="post-template__single-col-para">
      There are many excellent resources out there about combining D3 and React, which should come as no surprise 
      given the immense popularity of both frameworks. The reason why I decided to write yet another tutorial 
      is that I only started my D3 + React journey 6 months ago and still have the fresh memory of how confusing 
      it was to navigate the different approaches for combining the two frameworks.
      <br />
      <br />
      You have probably already heard that the main challenge of combining D3 and React is that both of these frameworks 
      compete for control over the DOM. In other words, both React and D3 come with their own capabilities for manipulating 
      the DOM, with their own pros and cons, and optimisations. D3 came before React (It recently celebrated its 10th 
      anniversary in fact!) and other modern frameworks such as Vue, and so, granted, it was not created with their existence 
      in mind. So, what should you do? 
      <br />
      <br />
      The general consensus is that you should let React handle DOM manipulations and D3 everything else related to your 
      visualisation, such as scales, data munging, layout calculations etc. A common problem with this approach is that 
      it makes it somewhat challenging*, or sometimes impossible to use some popular D3 capabilities such as transitions 
      and animations, axes, brushes, fine control over the behaviour of elements as they enter, update and exit, or d3-force 
      layouts. 
      <br />
      <br />
      <span>This gives you two options:</span>
      <ul className="post__list-in-body">
        <li>
          <span className="post__highlighted-text">Option 1:</span> The ‘proper’ method. <span className="post__emph-text">Use React whenever possible</span>, 
          and only if strictly unavoidable resort to using D3 to access DOM elements directly via the use of useRef. 
        </li>
        <li>
          <span className="post__highlighted-text">Option 2:</span> The <span className="post__emph-text">‘chuck everything in a useEffect’</span> method. 
          Place almost all your D3 code almost as you’d write it in 
          vanilla JS into a React useEffect hook. 
        </li>
      </ul>
      <br />
      <br />

      <h3 className="post-template__section-subtitle">Pros and Cons of both methods</h3>
      <span className="post__highlighted-text">Opion 1</span> 
      <span style={{fontStyle: 'italic'}}> (let React handle the DOM) </span>
      <span style={{fontWeight: 'bold'}}> Pros &#8593;</span>
      <ul className="post__list-in-body">
        <li>Can make use of React performance optimisations.</li>
        <li>Generally write less & cleaner declarative code.</li>
        <li>Generally avoid hideous bugs. </li>
        <li>Robust to changes in the React API. </li>
      </ul>
      <br />
      <span className="post__highlighted-text">Opion 1</span> 
      <span style={{fontStyle: 'italic'}}> (let React handle the DOM) </span>
      <span style={{fontWeight: 'bold'}}> Cons &#8595;</span>
      <ul className="post__list-in-body">
        <li>Sometimes you really can’t avoid using a useRef to tap into the DOM (e.g. calling a D3 brush) anyway; </li>
        <li>Sometimes you need to implement otherwise straightforward in D3 elements (e.g. D3 axes) yourself; </li>
        <li>Most D3 code you find online will be written in vanilla JS and you will have to completely refactor it 
        so as to work with React. If you are less experienced, this might be frustrating and time-consuming at first.</li>
      </ul>
      <br />
      <br />

      <span className="post__highlighted-text">Opion 2</span>
      <span style={{fontStyle: 'italic'}}> (chuck D3 code in useEffect) </span>
      <span style={{fontWeight: 'bold'}}> Pros &#8593;</span>
      <ul className="post__list-in-body">
        <li>Since the code you chuck inside the useEffect is almost identical to vanilla JS D3 code, you can make use 
          of existing D3 code and tutorials, especially if you are still finding your way around.</li>
        <li>You can use everything from the D3 API as is.</li>
        <li>Less cognitive load trying to figure out what goes where.</li>
      </ul>
      <br />
      <span className="post__highlighted-text">Opion 2</span> 
      <span style={{fontStyle: 'italic'}}> (chuck D3 code in useEffect) </span>
      <span style={{fontWeight: 'bold'}}> Cons &#8595;</span>
      <ul className="post__list-in-body">
        <li>Lose access to React render optimisations.</li>
        <li>Prone to bugs.</li>
        <li>It’s possible that it won’t spark joy for you (it didn’t for me at first, until I gave in…). </li>
      </ul>
      <br />
      <br />


      <h3 className="post-template__section-subtitle">Pros of both, or why use React with D3 in the first place</h3>
      <p>
        You might be wondering if there is any point in using React with D3 if you are going to do with the 
        ‘chuck everything in a useEffect’ approach. That depends on the way that your brain works, on your 
        project requirements, on what you are trying to learn or achieve. If you have no external constraints 
        and can work with any framework of your choice, I do recommend giving React + D3 a try. One of the main 
        benefits is state. Using React state to handle your data, and data changes, can vastly simplify your 
        process. React components are another big advantage. They allow you to easily organise your various 
        visualisation bits into components, which you can get to talk to each other via props and exchange data 
        in state. As a novice to both frameworks, I ended up choosing the second option for my projects and 
        I think that really paid out. I now feel comfortable to start switching over to the ‘proper’ method 
        whenever possible. Therefore, in this post I would like to show you how either approach works, but focus 
        on the arguably hackier one in more depth. 
      </p>

    </p>

   </div>

   </>
  )
}


const Section2 = () => {
  return (
    <>
      <div className="post-template__single-col-wrapper">
        <div className="post-template__title-container" >
          <div className="post-template__section-title-text">2. Code Walkthroughs</div>
        </div>
      </div>

      <div className="post-template__two-col-wrapper">
      <h3 className="post-template__section-subtitle">2.1 Bar Chart - React for DOM control option</h3>
      <CodeBarChartDemo />

      <h3 className="post-template__section-subtitle">2.2. Bar Chart - D3 for DOM control option</h3>
      <CodeBarChartUseEffectDemo />


      <h3 className="post-template__section-subtitle">2.3 What about other things? Tooltips</h3>
      <div className="post-template__single-col-wrapper">
        <p className="post-template__single-col-para">
          <CodeBarChartTooltip />
        </p>
      </div>

      
      <h3 className="post-template__section-subtitle">Force</h3>
      <CodeForceDemo />


      <h3 className="post-template__section-subtitle">Brush</h3>
      <CodeBrushDemo />

    </div>
  </>
  )
}



const PostReactD3 = () => {
  return (
    <PostTemplate>
      <Header />
      <Summary />
      <TableOfContents />
      <Section1 />
      <Section2 />
    </PostTemplate>  
  )
};

export default PostReactD3;