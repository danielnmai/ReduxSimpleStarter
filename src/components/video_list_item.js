import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video is equal to ({video}) in function argument. ES6 syntax only.
  const imgURL = video.snippet.thumbnails.default.url
  return <li onClick={()=> onVideoSelect(video)}className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imgURL}/>
      </div>
      <div className="media-body">
        <div className = "media-heading">{video.snippet.title}</div>
      </div>
    </div>
   </li>
};

export default VideoListItem;
