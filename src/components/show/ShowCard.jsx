import React from "react";
import { Link } from "react-router-dom";
const ShowCard = ({ id, image, name, summary }) => {
  // /<.+?>/g regular expression for all html tags
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";
  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>
      <h2>{name}</h2>
      <p>{summaryAsText}</p>
      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
