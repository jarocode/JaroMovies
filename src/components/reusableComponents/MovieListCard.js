import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const MovieListCard = () => {
    return (
        <Container>
            <ImgDiv></ImgDiv>
            <Content></Content>
        </Container>
    )
}

export default MovieListCard;

const Container = styled.div`
    min-height: 16rem;
    display: flex;
    padding: 2rem;
    gap: 2rem;
`;

const ImgDiv = styled.div`
    width: 35%;
    background: red;
`
const Content = styled.div`
    width: 65%;
    background: black;
`


