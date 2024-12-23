import "./USElections.css";
import MapViewGallery from "./MapViewGallery";
import { 
    imagesRawCalledRacesTop, imageRawCalledRacesBottom, mainImageRawCalledRaces,
    imagesRawStrengthOfLeadTop, imageRawStrengthOfLeadBottom, mainImageRawStrengthOfLead,
    imagesRawVoteCountTop, imageRawVoteCountdBottom, mainImageRawVoteCount
} from './images.js'



const USElections = ({ project, windowWidth }) => {


  return (
    <div id='us-elections-container' >
        <div className='wrapper-map-rail'>
            <MapViewGallery 
                title='Called races'
                imagesTopRaw={imagesRawCalledRacesTop} 
                imagesBottomRaw={imageRawCalledRacesBottom} 
                mainImageRaw={mainImageRawCalledRaces} 
            />
            <MapViewGallery 
                title='Strength of lead'
                imagesTopRaw={imagesRawStrengthOfLeadTop} 
                imagesBottomRaw={imageRawStrengthOfLeadBottom} 
                mainImageRaw={mainImageRawStrengthOfLead} 
            />
            <MapViewGallery 
                title='Vote counts'
                imagesTopRaw={imagesRawVoteCountTop} 
                imagesBottomRaw={imageRawVoteCountdBottom} 
                mainImageRaw={mainImageRawVoteCount} 
            />

        </div>
    </div>
  )
}

export default USElections;