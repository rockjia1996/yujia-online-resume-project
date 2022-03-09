import React from "react";

const Card = (props) => {
  const { title, content, footer } = props;

  return (
    <div className="card">
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default Card;
