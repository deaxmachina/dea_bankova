import React from 'react';
import CodeBarChartDemo from "../BarChartDemo/CodeBarChartDemo";
import CodeBarChartUseEffectDemo from "../BarChartUseEffectDemo/CodeBarChartUseEffectDemo";
import CodeBarChartTooltip from "../BarChartTooltip/CodeBarChartTooltip";
import CodeForceDemo from "../ForceDemo/CodeForceDemo";
import CodeBrushDemo from "../BrushDemo/CodeBrushDemo";


const Section2 = () => {
  return (
    <>
      <div className="post-template__single-col-wrapper">
        <div id="react-d3-code-walkthroughs" className="post-template__title-container" >
          <div className="post-template__section-title-text">Code Walkthroughs</div>
        </div>
      </div>

      <div className="post-template__two-col-wrapper">

        <h3 id="simple-barchart-both" className="post-template__section-subtitle">Simple bar chart in both ways - React for DOM control option</h3>
        <br />
        <CodeBarChartDemo />

        <h3 className="post-template__section-subtitle">Simple bar chart in both ways - D3 for DOM control option</h3>
        <CodeBarChartUseEffectDemo />

        <h3 id="tooltip-both" className="post-template__section-subtitle">Tooltip in both ways</h3>
        <div className="post-template__single-col-wrapper">
          <p className="post-template__single-col-para">
            <CodeBarChartTooltip />
          </p>
        </div>
        
        <h3 id="force-with-react" className="post-template__section-subtitle">Force graph, the D3 DOM way (useEffect + useRef) way</h3>
        <CodeForceDemo />

        <h3 id="brushing-with-react" className="post-template__section-subtitle">Brushing, the D3 DOM way (useEffect + useRef) way</h3>
        <CodeBrushDemo />

      </div>
  </>
  )
};

export default Section2;