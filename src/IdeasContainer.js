import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ContainerStyle = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const IdeasContainer = ({ ideas, removeIdea }) => {
  const ideaCards = ideas.map(idea => (
    <Card {...idea} removeIdea={removeIdea} key={idea.id} />
  ));

  return <ContainerStyle>{ideaCards}</ContainerStyle>;
};

export default IdeasContainer;
