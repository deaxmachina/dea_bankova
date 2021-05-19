import CookiesViz from "./CookiesViz";
import CookiesCode from "./CookiesCode";
import CookiesText from "./CookiesText";


const Cookies = ({ windowWidth }) => {
  return (
    <div className="post-template__two-col-container">
      <div className="post-template__two-col-left">
        <CookiesCode />
      </div>
      <div className="post-template__two-col-right">
        <CookiesViz windowWidth={windowWidth}/>
        <br />
        <CookiesText />
      </div>
    </div>
  );
};

export default Cookies;