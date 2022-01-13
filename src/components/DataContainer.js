import React from "react";
import Reactions from "./Reactions";
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function DataContainer(props) {
  localStorage.setItem('src', 'like');

  let explanation = props.data.explanation;
  let length = 300;
  let trimmedexplanation = explanation.substring(0, length) + ' ........';

  function share_post(event){
    event.preventDefault();
    let element = event.currentTarget.children[1];
    element.style.transition = 'max-height 1s ease-in';
    if (element.style.maxHeight === '500px'){
      element.style.maxHeight = '0px';
    }else{
      element.style.maxHeight = '500px';
    }
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
      <div onClick={share_post} id="menu">
        <div className="vertical-dots-container">
          <div className="vertical-dots"></div>
          <div className="vertical-dots"></div>
          <div className="vertical-dots"></div>
        </div>
        <ul id="list">
          <li>
            <FacebookShareButton
              url={"https://deepspacestagram.netlify.app/"}
              quote={"Pardeep Rathore - Space is yours to explore"}
              hashtag="#deepspacestagram">
              <FacebookIcon size={36} />
            </FacebookShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
}