import React, {useContext} from 'react';
import styled from '@emotion/styled';
import { Typography, Button, Snackbar, Alert} from '@mui/material';
import {FaClock} from 'react-icons/fa';
import {MdOutlineAddCircle} from 'react-icons/md';
import {Link} from 'react-scroll'

import moviePoster from '../../../assets/images/Thor.jpg';
import { colors } from '../../../config.js/theme';
import { DetailsContext } from '../../../context/DetailsContext';
import { FavouriteContext } from '../../../context/FavouriteContext';
import { WatchLaterContext } from '../../../context/WatchLaterContext';
import url from '../../../config.js/url';

const MovieJumbotron = () => {
    const [open, setOpen] = React.useState(false);
    const {details} = useContext(DetailsContext);
    const {setFavourites} = useContext(FavouriteContext);
    const {setWatchLater} = useContext(WatchLaterContext);

    const description=" Not your regular movie website...Don't miss out on latest, hottest and trending movies, Stay up to date with the latest episodes of your favoutite tv series and more!"
    const title= "Enjoy Movies of All Genres"

    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const addToFavourite = () => {
        setFavourites(prev => [...prev, details]);
        setOpen(true);
    }
    const watchLater = () => {
        setWatchLater(prev => [...prev, details]);
        setOpen(true);
    }
   
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
                            onClick={watchLater}
                            startIcon={<FaClock />}>
                                Watch later
                        </Btn>
                        <Btn 
                            variant="outlined"  
                            BtnBg={colors.grey} 
                            BtnColor={colors.white}
                            border={colors.white}
                            onClick={addToFavourite}
                            startIcon={<MdOutlineAddCircle color={colors.white}/>}>
                                Add to Favourites
                        </Btn>
                    </> : <Link
                            to="movieSelection"
                            spy={true}
                            offset={{}}
                            smooth={true}
                            duration={500}
                                >
                                <Btn 
                                    variant="contained" 
                                    BtnBg={colors.primary} 
                                    BtnColor={colors.white}
                                >
                                    Get Started
                                </Btn>
                            </Link>
                        }
                </BtnDiv>

            </InfoDiv>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Movie added successfully!
            </Alert>
      </Snackbar>
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
