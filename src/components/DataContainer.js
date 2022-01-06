import React from "react";
import Reactions from "./Reactions";

export default function DataContainer(props) {
  return (
    <div className="nasa-photo">
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
      <div>
        <h1>{props.data.title}</h1>
        <p className="date">{props.data.date}</p>
        <p className="explanation">{props.data.explanation}</p>
        <button>Like</button>
        <Reactions />
      </div>
    </div>
  );
}