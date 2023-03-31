import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin: 40px;
  border: 5px black;
  background-color:aqua;
`;

const Content = styled.p`
  font-size: 32px;
  text-align: center;
  color:red;
`;

const Button = styled.button`
padding: 0.8rem 1.6rem;
background-color: ${(props) => (props.primary ? "purple" : "white")};
border: 1px solid #00000;
color: ${(props) => (props.primary ? "white" : "purple")};
`;

const StyledComponent = () => (
  <Box>
    <Content> Styling React Components </Content>
    <Button primary>Primary</Button>
    <Button >Primary</Button>

  </Box>
   
);

export default StyledComponent;