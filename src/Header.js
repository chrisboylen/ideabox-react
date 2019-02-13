import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  align-items: center;
  background: ${props => props.theme.lightgreen};
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Logo = styled.h1`
  color: ${props => props.theme.pink};
  font-family: "Alegreya";
  font-size: 9rem;
  font-weight: 800;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Logo>checklist</Logo>
    </HeaderStyles>
  );
};

export default Header;
