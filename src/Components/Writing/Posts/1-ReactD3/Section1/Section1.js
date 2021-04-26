import React from 'react';

const Section1 = () => {
  return (
   <>
    <div className="post-template__single-col-wrapper">

      <div id="overview-two-ways-combining-d3-react">
        <div className="post-template__title-container">
          <div className="post-template__section-title-text">
            Overview of the two ways (DOM handled by React or by D3) of combining D3 and React
          </div>
        </div>
        <p className="post-template__single-col-para">
          A lot of discussions have been taking place recently about best practices on 
          using D3.js and React together, and some excellent resources already exist out there 
          [my favourites include: 
          Amelia Wattenberger’s <a className="post__link" href="https://wattenberger.com/blog/react-and-d3" target="_blank">React + D3.js tutorial</a>, 
          Curran Kelleher’s YouTube <a className="post__link" href="https://datavis.tech/datavis-2020/" target="_blank ">DataViz 2020 series</a>,
          The Muratorium’s YouTube <a className="post__link" href="https://www.youtube.com/playlist?list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B" target="_blank">Using React Hooks with D3</a> series],
          which should come as no surprise 
          given the immense popularity of both frameworks. The reason why I decided to write yet another tutorial 
          is that I only started my D3 + React journey 8 months ago and still have 
          the <span className="post__emph-text">fresh memory of how confusing 
          it was to navigate the different approaches for combining the two frameworks</span>. My aim with this post is to share a personal 
          perspective regarding what worked for me. 
          <br />
          <br />
          You have probably already heard that the main challenge of combining D3 and React is that 
          they <span className="post__emph-text">both compete for control over the DOM</span>. In 
          other words, both React and D3 come with their own "capabilities" for manipulating 
          the DOM, with their own pros and cons, and optimisations. D3 came before React (It recently celebrated its 10th 
          anniversary in fact!) and other modern frameworks such as Vue, and so, granted, it was not created with their existence 
          in mind. So, what should you do? 
          <br />
          <br />
          The general consensus is that you should let React handle DOM manipulations and D3 everything else related to your 
          visualisation, such as scales, data munging, layout calculations etc. A common problem with this approach is that 
          it makes it somewhat challenging, or sometimes impossible to use some popular D3 capabilities such as transitions 
          and animations, axes, brushes, fine control over the behaviour of elements as they enter, update and exit, d3-force 
          layouts, etc. 
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
              Place almost all your D3 code as you’d write it in vanilla JS into a React useEffect hook, appending to a DOM element (e.g. svg)
              accessed via a useRef. 
            </li>
          </ul>
        </p>
      </div>

      <div id="pros-cons-either-way">
      <p className="post-template__single-col-para">
        <h3 className="post-template__section-subtitle">Pros and Cons of each way</h3>
        <span className="post__highlighted-text">Option 1</span> 
        <span style={{fontStyle: 'italic'}}> (let React handle the DOM) </span>
        <span style={{fontWeight: 'bold'}}> Pros &#8593;</span>
        <ul className="post__list-in-body">
          <li>Can make use of React performance optimisations.</li>
          <li>Generally write less & cleaner declarative code.</li>
          <li>Generally avoid hideous bugs. </li>
        </ul>
        <br />
        <span className="post__highlighted-text">Option 1</span> 
        <span style={{fontStyle: 'italic'}}> (let React handle the DOM) </span>
        <span style={{fontWeight: 'bold'}}> Cons &#8595;</span>
        <ul className="post__list-in-body">
          <li>Sometimes you really can’t avoid using a useRef to tap into the DOM (e.g. calling a D3 brush) anyway.</li>
          <li>Sometimes you need to implement otherwise straightforward in D3 elements (e.g. D3 axes) yourself.</li>
          <li>Most D3 code you find online will be written in vanilla JS and you will have to completely refactor it 
          so as to work with React. If you are less experienced, this might be frustrating and time-consuming at first.</li>
        </ul>
        <br />
        <br />
        <span className="post__highlighted-text">Option 2</span>
        <span style={{fontStyle: 'italic'}}> (chuck D3 code in useEffect) </span>
        <span style={{fontWeight: 'bold'}}> Pros &#8593;</span>
        <ul className="post__list-in-body">
          <li>Since the code you put inside the useEffect is almost identical to vanilla JS D3 code, you can make use 
            of existing D3 code and tutorials, especially if you are still finding your way around.</li>
          <li>You can use everything from the D3 API as is.</li>
          <li>Less cognitive load trying to figure out what goes where.</li>
        </ul>
        <br />
        <span className="post__highlighted-text">Option 2</span> 
        <span style={{fontStyle: 'italic'}}> (chuck D3 code in useEffect) </span>
        <span style={{fontWeight: 'bold'}}> Cons &#8595;</span>
        <ul className="post__list-in-body">
          <li>Lose access to React render optimisations.</li>
          <li>Prone to bugs.</li>
          <li>It’s possible that it won’t spark joy for you. Declarative React is nice after all.</li>
        </ul>
        <br />
        <br />
      </p>
      </div>

      <div id="pros-of-both">
        <h3 className="post-template__section-subtitle">Pros of both, or why use React with D3 in the first place</h3>
        <p className="post-template__single-col-para">
          You might be wondering if there is any point in using React with D3 if you are going to go with the 
          ‘chuck everything in a useEffect’ approach. That depends (don't you love hearing that phrase!) 
          on the way that your brain works, on your project requirements, on what you are trying to learn or achieve. 
          If you have no external constraints 
          and can work with any framework of your choice, I do recommend giving React + D3 a try. <span className="post__emph-text">One of the main benefits is React state</span>. Using 
          state to handle your data, and data changes, can vastly simplify your 
          process. <span className="post__emph-text">React components are another big advantage.</span> They allow you to easily organise your various 
          visualisation bits into components, which you can get to talk to each other via props and exchange data 
          in state. As a novice to both frameworks, I ended up choosing the second option for my projects and 
          I think that really paid out. I now feel comfortable to start switching over to the ‘proper’ (letting React handle the DOM) method 
          whenever possible. Therefore, in this post I would like to show you how either approach works, but focus 
          on the arguably hackier one in more depth. 
        </p>        
      </div>
   </div>
   </>
  )
};

export default Section1;