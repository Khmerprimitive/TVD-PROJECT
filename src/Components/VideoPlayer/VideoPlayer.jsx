import React from 'react'
import './VideoPlayer.css'
import video_1 from '../../assets/video1.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className={`video-player ${playState?'': 'hide'}`}>
        <video src={video_1} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer