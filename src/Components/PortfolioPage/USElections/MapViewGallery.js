import { useState } from "react";
import "./USElections.css";
import cursorImage from './cursor.png'

const MapViewGallery = ({imagesTopRaw, imagesBottomRaw, mainImageRaw, title, selectedImage, setSelectedImage }) => {

  const [imagesTop, setImagesTop] = useState(imagesTopRaw)  
  const [imagesBottom, setImagesBottom] = useState(imagesBottomRaw)  
  const [mainImage, setMainImage] = useState(mainImageRaw)

  return (
    <div>
        <h3 className="map-view-title">{title}</h3>
        {/* <p>
            Some kind of description of what this is about.
            Some kind of description of what this is about. 
        </p> */}

        {/* The main image */}
        <div 
            className="main-image-container"
            onClick={() => {
                setSelectedImage(mainImage)
            }}
            style={{  }}
        >
            <img src={mainImage.src} alt={mainImage.alt} />
        </div>

        {/* Grid of smaller images */}
        <div className="grid-container top">
            {
                imagesTop.map((img, idx) => (
                    <div 
                        className="grid-item" 
                        style={{ transform: `rotate(${img.rotate}deg)` }}
                        onMouseEnter={() =>{             
                            const imagesCopy = [...imagesTop] 
                            imagesCopy[imagesCopy.findIndex(element => element.id === img.id)].rotate = 0
                            setImagesTop(imagesCopy)
                        }} 
                        onMouseLeave={() => {
                            const imagesCopy = [...imagesTop] 
                            // imagesCopy[idx].rotate =  Math.random()*20 - 10 
                            imagesCopy[imagesCopy.findIndex(element => element.id === img.id)].rotate = Math.random()*20 - 10 
                            setImagesTop(imagesCopy)
                        }} 
                        onClick={() => {
                            // Swap the main image and the clicked on image on top
                            const imagesCopy = [...imagesTop] 
                            imagesCopy[idx] = mainImage
                            setImagesTop(imagesCopy)
                            setMainImage(img)
                        }}
                    >
                        <img src={img.srcSmall ? img.srcSmall : img.src} alt={img.alt} />
                    </div>
                ))
            }
        </div>
        <div className="grid-container bottom">
            {
                imagesBottom.map((img, idx) => (
                    <div 
                        className="grid-item" 
                        style={{ transform: `rotate(${img.rotate}deg)` }}
                        onMouseEnter={() =>{             
                            const imagesCopy = [...imagesBottom] 
                            imagesCopy[idx].rotate = 0
                            setImagesBottom(imagesCopy)
                        }} 
                        onMouseLeave={() => {
                            const imagesCopy = [...imagesBottom] 
                            imagesCopy[idx].rotate =  Math.random()*20 - 10 // imagesRaw[idx].rotate
                            setImagesBottom(imagesCopy)
                        }} 
                        onClick={() => {
                            // Swap the main image and the clicked on image on top
                            const imagesCopy = [...imagesBottom] 
                            imagesCopy[idx] = mainImage
                            setImagesBottom(imagesCopy)
                            setMainImage(img)
                        }}
                    >
                        <img src={img.srcSmall ? img.srcSmall : img.src} alt={img.alt} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MapViewGallery;