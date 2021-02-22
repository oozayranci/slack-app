import React from 'react';
import styled from "styled-components";

function Header () {
  return <HeaderContainer>
      <h1>Test</h1>
  </HeaderContainer>
}

export default Header;

const HeaderContainer = styled.div`
    background-color: "red";
`;