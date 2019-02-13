import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  align-items: center;
  background: ${props => props.theme.contgreen};
  border-radius: 1.5rem;
  box-shadow: 0px 5px 24px 2px rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.darkgreen};
  display: flex;
  justify-content: space-between;
  margin: 4rem;
  min-width: 30rem;
  padding: 2rem;
  h3,
  p {
    display: inline;
  }
  h3 {
    font-size: 2rem;
    padding: 0 1rem 0 0;
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
  }
  button {
    background: transparent;
    border: solid 2px red;
    border-radius: 50%;
    color: red;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 800;
    padding: 0.5rem 0.7rem;
  }
`;

const Card = ({ title, body, id, removeIdea }) => {
  return (
    <CardStyle>
      <div className="idea">
        <h3>{title}:</h3>
        <p>{body}</p>
      </div>
      <button onClick={() => removeIdea(id)}>X</button>
    </CardStyle>
  );
};

export default Card;
