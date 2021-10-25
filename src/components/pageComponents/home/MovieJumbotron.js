import React from 'react';
import styled from '@emotion/styled';
import { Typography, Button} from '@mui/material';

import moviePoster from '../../../assets/images/Thor.jpg';
import { colors } from '../../../config.js/theme';
import {FaClock} from 'react-icons/fa';
import {MdOutlineAddCircle} from 'react-icons/md';

const MovieJumbotron = () => {
    return (
        <Container bg={moviePoster}>
            <InfoDiv>
                <Typography variant="h3" component="h2" color={colors.white} fontWeight="bold" marginBottom="1.5rem">
                    THOR RAGNAROK
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    component="h2" 
                    color={colors.white}
                    marginBottom="1.5rem"
                    fontSize="1.1em"
                     >
                        Id laboris irure velit magna do dolor exercitation est eu mollit qui laborum. 
                        Dolor ipsum do duis do commodo ea. Fugiat labore ut ut aliqua ipsum.
                        Id laboris irure velit magna do dolor exercitation est eu mollit qui laborum. 
                        Dolor ipsum do duis do commodo ea. Fugiat labore ut ut aliqua ipsum.
                </Typography>
                <BtnDiv>
                    <Btn variant="contained" BtnBg={colors.primary} BtnColor={colors.white}startIcon={<FaClock />}>Watch later</Btn>
                    <Btn 
                        variant="outlined"  
                        BtnBg={colors.grey} 
                        BtnColor={colors.white}
                        border={colors.white}
                        startIcon={<MdOutlineAddCircle color={colors.white}/>}>
                            Add to Favourites
                        </Btn>
                </BtnDiv>

            </InfoDiv>
        </Container>
    )
}

export default MovieJumbotron;

const Container = styled.div`
    margin: auto;
    width: 88%;
    background: url(${props => props.bg}) no-repeat top center/cover;
    min-height: 40rem;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    padding-top: 8rem;
    &::after{
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content: '';
        background: ${colors.dark};
        opacity: 0.5;
        position: absolute;
        z-index: 2;
    }
`

const InfoDiv = styled.div`
    width: 50%;
    height: 20rem;
    /* background: #fff; */
    padding: 2rem;
    position: relative;
    z-index: 5;
`;

const BtnDiv = styled.div`
    margin-top: 2rem;
`;

const Btn = styled(Button)`
    margin-right: 2rem;
    background: ${({BtnBg}) => BtnBg};
    color: ${({BtnColor}) => BtnColor};
    border: ${({border}) => border ? `1px solid ${border}` : `1px solid ${colors.primary}`};
    &:hover{
        background: none;
        border: 1px solid ${colors.white};
    }
`;
