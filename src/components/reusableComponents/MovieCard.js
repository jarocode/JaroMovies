import React from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

import {colors} from '../../config.js/theme';


const MovieCard = ({poster, title, date}) => {
    console.log(poster);
    return (
        <Container>
            <ImgDiv bg={poster}></ImgDiv>
            <Content>
                <Typography variant="h5" component="h2" textAlign="left" fontSize="1.25em">
                    {title}
                </Typography>
                <Typography variant="subtitle1" component="h2" textAlign="left" color={colors.faintWhite}>
                    {date}
                </Typography>
                <Btn BtnBg={colors.primary} BtnColor={colors.white}>View Details</Btn>
            </Content>
        </Container>
    )
}

export default MovieCard;

const Container = styled.div`
    width: 25%;
    min-height: 10rem;
    background: none;
`;
const ImgDiv = styled.div`
    width: 100%;
    height: 18rem;
    background: url(${({bg}) => bg}) no-repeat center center/cover;
`;
const Content = styled.div`
    padding-top: 1.5rem;
    width: 100%;
    min-height: 6rem;
    background: #000;
`;

const Btn = styled(Button)`
    margin-right: 2rem;
    background: ${({BtnBg}) => BtnBg};
    color: ${({BtnColor}) => BtnColor};
    text-transform: capitalize;
    float: left!important;
    margin-top: 1.2rem;
    border: 1px solid ${colors.primary};
    &:hover{
        background: none;
        border: 1px solid ${colors.white};
    }
`;
