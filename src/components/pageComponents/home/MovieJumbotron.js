import React, {useContext} from 'react';
import styled from '@emotion/styled';
import { Typography, Button} from '@mui/material';
import {FaClock} from 'react-icons/fa';
import {MdOutlineAddCircle} from 'react-icons/md';

import moviePoster from '../../../assets/images/Thor.jpg';
import { colors } from '../../../config.js/theme';
import { DetailsContext } from '../../../context/DetailsContext';
import url from '../../../config.js/url';

const MovieJumbotron = () => {
    const {details, setDetails} = useContext(DetailsContext);
    const description=" Not your regular movie website...Don't miss out on latest, hottest and trending movies, Stay up to date with the latest episodes of your favoutite tv series and more!"
    const title= "Enjoy Movies of All Genres"
   return (
        <Container bg={details ? url["IMAGE_BASE_URL"]+details?.backdrop_path : moviePoster}>
            <InfoDiv>
                <Typography variant="h3" component="h2" color={colors.white} fontWeight="bold" marginBottom="1.5rem">
                    {details ? details?.title : title}
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    component="h2" 
                    color={colors.white}
                    marginBottom="1.5rem"
                    fontSize="1.1em"
                     >
                        {details ? details?.overview :description}
                </Typography>
                <BtnDiv>
                    {details ? 
                    <>
                        <Btn 
                            variant="contained" 
                            BtnBg={colors.primary} 
                            BtnColor={colors.white}
                            startIcon={<FaClock />}>
                                Watch later
                        </Btn>
                        <Btn 
                            variant="outlined"  
                            BtnBg={colors.grey} 
                            BtnColor={colors.white}
                            border={colors.white}
                            startIcon={<MdOutlineAddCircle color={colors.white}/>}>
                                Add to Favourites
                        </Btn>
                    </> : <Btn 
                            variant="contained" 
                            BtnBg={colors.primary} 
                            BtnColor={colors.white}
                            >
                                Get Started
                            </Btn>
                        }
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
        opacity: 0.6;
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
