const Video = ({ videoUrl }) => {

  return (
    <div class='video-wrapper'>
      <video src={videoUrl} muted={true} autoPlay={true} loop={true}></video>
    </div>
  )
}

export default Video