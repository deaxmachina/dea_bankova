// data for the preview of the blogposts (not the actual content of them)


const blogData = [
  {
    id: 'd3-react-start', 
    title: "Getting started with D3.js in React",
    date: 'Apr 2021',
    category: 'tutorial',
    imgUrl: 'https://live.staticflickr.com/65535/51140128795_068dcfc6f2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51124368892_d5eff0b322_o.png',
    description: 
     <>
      I recently completed a 100 Days of Code challenge with React and D3 and I wanted to share my thoughts 
      on the two main approaches for combining these frameworks, both of which are designed to control the 
      DOM in their own way. We will compare these approaches and go in depth into a couple of examples 
      --bar chart, tooltips, d3-force and d3-brush--, focusing specifically on the option I have tended to
      prefer, which uses the useEffect and useRef React hooks to hand over DOM access to D3.
     </>
  },
  {
    id: 'svg-shapes', 
    title: "SVG Shapes in Visualisations",
    date: 'May 2021',
    category: 'dataviz',
    imgUrl: 'https://live.staticflickr.com/65535/51188912351_787637b9e0_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51188912351_787637b9e0_o.png',
    description: 
     <>
      Using more complex SVG shapes as markers in your visualisations can be surprisingly simple. Whether 
      that’s adding shapes that correspond to your data (flowers, emoji, planets… the possibilities are endless) 
      or using abstract shapes to make your viz more interesting. In this tutorial, we go over a straightforward 
      way to add SVGs from websites such as flaticon or Font Awesome to your D3 viz. You can extend the same approach 
      to work with shapes you create in Figma, Adobe Illustrator, or anything you like. 
     </>
  },
];

export default blogData;
