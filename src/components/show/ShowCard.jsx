import React from "react";
import { Link } from "react-router-dom";
import { Star } from "../Styled";
import { StyledShowCard } from "./ShowCard.styles";
const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
  // /<.+?>/g regular expression for all html tags
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";
  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>
      <h2>{name}</h2>
      <p>{summaryAsText}</p>
      <div className="btns">
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
