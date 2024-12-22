import "./USElections.css";
import MapViewGallery from "./MapViewGallery";

const imagesRawCalledRacesTop = [
    {
        id: 'one',
        src: 'images/us-elections/national called races/Screenshot 2024-11-06 at 10.50.04.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'two',
        src: 'images/us-elections/national called races/Screenshot 2024-11-06 at 13.54.54.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'three',
        src: 'images/us-elections/national called races/Screenshot 2024-11-06 at 13.40.04.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
]

const imageRawCalledRacesBottom = [
    {
        id: 'four',
        src:'images/us-elections/national called races/Screenshot 2024-11-06 at 12.05.40.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'five',
        src: 'images/us-elections/national called races/Screenshot 2024-11-06 at 12.05.49.png',
        alt: '',
        rotate: Math.random()*20 - 10
    },
    {
        id: 'six',
        src: 'images/us-elections/national called races/Screenshot 2024-11-06 at 15.16.01.png',
        alt: '',
        rotate: Math.random()*20 - 10
    }
]

const mainImageRawCalledRaces = {
    id: 'main',
    src: 'images/us-elections/national called races/Screenshot 2024-11-06 at 15.15.40.png',
    alt: '',
    rotate: Math.random()*20 - 10
}


const USElections = ({ project, windowWidth }) => {


  return (
    <div id='us-elections-container' >
        <div className='wrapper-map-rail'>
            <MapViewGallery imagesTopRaw={imagesRawCalledRacesTop} imagesBottomRaw={imageRawCalledRacesBottom} mainImageRaw={mainImageRawCalledRaces} />
            <MapViewGallery imagesTopRaw={imagesRawCalledRacesTop} imagesBottomRaw={imageRawCalledRacesBottom} mainImageRaw={mainImageRawCalledRaces} />
            <MapViewGallery imagesTopRaw={imagesRawCalledRacesTop} imagesBottomRaw={imageRawCalledRacesBottom} mainImageRaw={mainImageRawCalledRaces} />
        </div>
    </div>
  )
}

export default USElections;