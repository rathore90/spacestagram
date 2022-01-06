import React from "react";

export default function Reactions() {
  const reactions = [
    'sad',
    'like',
    'shock',
    'love',
    'laugh',
  ];

  const allReactions = reactions.map(reaction => {
    return <img key={reaction.toString()} src={'/reactions/' + reaction + '.png'} alt="Test" />
  })

  return (
    <div className="reactions">
      { allReactions }
    </div>
  );
}