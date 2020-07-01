import React from 'react';

interface CardProps {
  name?: string;
  avatar?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({
  name,
  avatar,
  description,
}) => {
  return (
    <div className="Card">
      
      <div className="Card__avatar">
        <img src={avatar} width="96" height="96" alt="" />
      </div>

      <div className="Card__text-container">
        <h2 className="Card__name">{name}</h2>
        <p className="Card__description">{description}</p>
      </div>
    </div>
  );
};
