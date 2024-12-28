import "./USElections.css";
import MapViews from "./MapViews";
import ResponsivePerformance from './ResponsivePerformance'

const Development = ({ children }) => {


    return (
        <div class='text-well'>
            <MapViews children={children} />
            <ResponsivePerformance />
        </div>
    )
}

export default Development