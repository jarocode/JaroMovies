import React from "react";
import styled from "@emotion/styled";
import Home from "../components/pageComponents/home";

const HomePage = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;

const Inner = styled.div`
  /* background: #fff; */
`;
