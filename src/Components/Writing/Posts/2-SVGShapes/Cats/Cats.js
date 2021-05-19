import CatsViz from "./CatsViz";
import CatsCode from "./CatsCode";
import CatsText from "./CatsText";


const Cats = ({ windowWidth }) => {
  return (
    <div className="post-template__two-col-container">
      <div className="post-template__two-col-left">
        <CatsCode />
      </div>
      <div className="post-template__two-col-right">
        <CatsViz windowWidth={windowWidth}/>
        <br />
        <CatsText />
      </div>
    </div>
  );
};

export default Cats;