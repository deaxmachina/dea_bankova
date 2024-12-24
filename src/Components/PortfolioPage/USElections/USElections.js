import "./USElections.css";
import { useState } from 'react'
import MapViewGallery from "./MapViewGallery";
import { 
    imagesRawCalledRacesTop, imageRawCalledRacesBottom, mainImageRawCalledRaces,
    imagesRawStrengthOfLeadTop, imageRawStrengthOfLeadBottom, mainImageRawStrengthOfLead,
    imagesRawVoteCountTop, imageRawVoteCountdBottom, mainImageRawVoteCount
} from './images.js'



const USElections = ({ project, windowWidth }) => {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div id='us-elections-container' >
        <div className='wrapper-map-rail'>
            <MapViewGallery 
                title='Called races'
                imagesTopRaw={imagesRawCalledRacesTop} 
                imagesBottomRaw={imageRawCalledRacesBottom} 
                mainImageRaw={mainImageRawCalledRaces} 
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
            <MapViewGallery 
                title='Strength of lead'
                imagesTopRaw={imagesRawStrengthOfLeadTop} 
                imagesBottomRaw={imageRawStrengthOfLeadBottom} 
                mainImageRaw={mainImageRawStrengthOfLead} 
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
            <MapViewGallery 
                title='Vote counts'
                imagesTopRaw={imagesRawVoteCountTop} 
                imagesBottomRaw={imageRawVoteCountdBottom} 
                mainImageRaw={mainImageRawVoteCount} 
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
        </div>
        {/* The big image overlay */}
        {
            selectedImage !== null &&
            <div 
                className="overlay-image-container"
                onClick={() => { setSelectedImage(null) }}
            >
                <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
        }
    </div>
  )
}

export default USElections;