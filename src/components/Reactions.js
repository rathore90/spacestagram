import React from "react";

export default function Reactions() {
  function pickReaction(event){
    let target = event.target.parentElement.previousElementSibling;
    let targetElement = target.childNodes[0];
    targetElement.src = event.target.src;
    // hide the reaction container
    let container = event.target.parentElement;
    container.style.opacity = 0;
    container.style.transform = "translateY(50px)";
  }
  function reactionContainer(event) {
    let container = event.target.parentElement.nextElementSibling;
    container.style.opacity = 1;
    container.style.transform = "translateY(0)";
  }
  const reactions = [
    'sad',
    'like',
    'shock',
    'love',
    'laugh',
  ];

  const allReactions = reactions.map(reaction => {
    return <img onClick={pickReaction} key={reaction.toString()} src={'/reactions/' + reaction + '.png'} alt="Reactions" />
  })

  return (
    <>
    <div className="reaction-action" onClick={reactionContainer}><img src={'reactions/like.png'} alt="Like Reaction"/></div>
    <div className="reactions">
      { allReactions }
    </div>
    </>
  );
}