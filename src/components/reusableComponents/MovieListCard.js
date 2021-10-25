import React from 'react';
import styled from '@emotion/styled';
import { Typography, Button } from '@mui/material';
import {ImBin} from 'react-icons/im'

import { colors } from '../../config.js/theme';

const MovieListCard = () => {
    return (
        <Container>
            <ImgDiv></ImgDiv>
            <Content>
                <Typography variant="h3" component="h2" color={colors.white} fontSize="1.5em" fontWeight="bold" marginBottom="1.3rem">
                    THOR RAGNAROK
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    component="h2" 
                    color={colors.white}
                    marginBottom="1.5rem"
                    fontSize="1em"
                     >
                        Id laboris irure velit magna do dolor exercitation est eu mollit qui laborum. 
                        Dolor ipsum do duis do commodo ea. Fugiat labore ut ut aliqua ipsum.
                        Id laboris irure velit magna do dolor exercitation est eu mollit qui laborum. 
                        Dolor ipsum do duis do commodo ea. Fugiat labore ut ut aliqua ipsum.
                </Typography>
                <Btn variant="contained" BtnBg={colors.primary} BtnColor={colors.white}startIcon={<ImBin/>}>Remove</Btn>
            </Content>
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

const Btn = styled(Button)`
    margin-right: 2rem;
    background: ${({BtnBg}) => BtnBg};
    color: ${({BtnColor}) => BtnColor};
    text-transform: capitalize;
    float: left!important;
    margin-top: .5rem;
    border: 1px solid ${colors.primary};
    &:hover{
        background: none;
        border: 1px solid ${colors.white};
    }
`;


