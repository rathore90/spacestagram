import React from "react";
import Reactions from "./Reactions";

export default function DataContainer(props) {
  localStorage.setItem('src', 'like');

  let explanation = props.data.explanation;
  let length = 300;
  let trimmedexplanation = explanation.substring(0, length) + ' ........';

  function share_post(event){
    console.log(event);
  }

  return (
    <div className="nasa-photo">
      <div className="img-container">
        {props.data.media_type === "image" ? (
          <img
            src={props.data.url}
            alt={props.data.title}
            className="photo"
          />
        ) : (
          <iframe
            title="space-video"
            src={props.data.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
      </div>
      <div className="data-container">
        <h1>{props.data.title}</h1>
        <p className="date">{props.data.date}</p>
        <p className="explanation">{trimmedexplanation}</p>
        <Reactions src={localStorage.getItem('src')}/>
      </div>
      <div onClick={share_post} className="vertical-dots-container">
        <div className="vertical-dots"></div>
        <div className="vertical-dots"></div>
        <div className="vertical-dots"></div>
      </div>
    </div>
  );
}