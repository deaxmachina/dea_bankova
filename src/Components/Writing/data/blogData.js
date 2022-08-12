// data for the preview of the blogposts (not the actual content of them)
const blogData = [
  {
    id: 'animate-treejs-particles-gsap', 
    title: "Animating lots of Three.js particles with GSAP in Observable",
    hasPage: false,
    url: 'https://observablehq.com/@deaxmachina/animating-lots-of-three-js-particles-with-gsap',
    date: 'Jul 2022',
    category: 'example',
    imgUrl: 'https://live.staticflickr.com/65535/52281915160_729e8e80d5_h.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/52281915160_729e8e80d5_h.jpg',
    description: 
     <>
      Being able to animate millions of particles is one of the great capabilities of the WebGL-based Three.js, 
      useful for storytelling with data visualisations, for example. I put together an example of how to use GSAP 
      to animate Three.js-defined particles from one position to another. 
     </>
  },
  {
    id: 'collection-of-maps', 
    title: "Where to find map data and how to draw it in SVG or Canvas (D3)",
    hasPage: false,
    url: 'https://observablehq.com/@deaxmachina/collection-of-maps',
    date: 'May 2022',
    category: 'resource',
    imgUrl: 'https://live.staticflickr.com/65535/52268516772_d80c1227cb_h.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/52268516772_d80c1227cb_h.jpg',
    description: 
     <>
      A collection of bookmarks of geoJSON and topoJSON files for maps at various levels, 
      from world maps down to district/city level of some countries, as well as boilerplate 
      code for drawing these on SVG or Canvas with D3. 
     </>
  },
  {
    id: 'gup-d3', 
    title: "Deep dive into D3's general update pattern",
    hasPage: false,
    url: 'https://observablehq.com/@deaxmachina/d3-general-update-pattern',
    date: 'May 2022',
    category: 'tutorial',
    imgUrl: 'https://live.staticflickr.com/65535/52281916765_944babdbd3_b.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/52281916765_944babdbd3_b.jpg',
    description: 
     <>
      A collection of different ways to use D3's general update pattern depending on 
      how you want your data-bound DOM elements to behave on enter, update, and exit. 
     </>
  },
  {
    id: 'circle-packing-canvas-gsap', 
    title: "Circle packing with canvas and GSAP animation",
    hasPage: false,
    url: 'https://observablehq.com/@deaxmachina/circle-packing-with-canvas-and-gsap-animation',
    date: 'Jun 2021',
    category: 'example',
    imgUrl: 'https://live.staticflickr.com/65535/52269790679_bad9238f73_h.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/52269790679_bad9238f73_h.jpg',
    description: 
     <>
      Example patterns of how to use D3’s circle packing layout to position elements on Canvas 
      and animate them to a new position with GSAP. Works smoothly even with 10K particles. 
     </>
  },
  {
    id: 'd3-react-start', 
    title: "Getting started with D3.js in React",
    hasPage: true,
    date: 'Apr 2021',
    category: 'tutorial',
    imgUrl: 'https://live.staticflickr.com/65535/51140128795_068dcfc6f2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51124368892_d5eff0b322_o.png',
    description: 
     <>
      In-dept tutorial with code showing two approaches for combining D3 and React that I have used. 
      In this post, I compare the approaches and explain in detail a couple of examples --bar chart, 
      tooltips, d3-force and d3-brush--, focusing specifically on the option I have tended to prefer, 
      which uses the useEffect and useRef React hooks to hand over DOM access to D3.
     </>
  },
  {
    id: 'svg-shapes', 
    title: "SVG shapes in visualisations",
    hasPage: true,
    date: 'May 2021',
    category: 'tutorial',
    imgUrl: 'https://live.staticflickr.com/65535/51188912351_787637b9e0_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51188912351_787637b9e0_o.png',
    description: 
     <>
      Using more complex SVG shapes as markers in D3 visualisations can be surprisingly simple. 
      In this tutorial, I go over a straightforward way to add SVGs from websites such as flaticon 
      or Font Awesome to a D3 viz. You can extend the same approach to work with shapes 
      you create in Figma, Adobe Illustrator, etc.
     </>
  },
];

export default blogData;
