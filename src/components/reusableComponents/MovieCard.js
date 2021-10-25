import React, {useContext} from 'react';
import styled from '@emotion/styled/macro';
import { Button, Typography, Tooltip, Zoom, Snackbar, Alert} from '@mui/material';
import {MdAddCircleOutline} from 'react-icons/md';

import {colors} from '../../config.js/theme';
import { DetailsContext } from '../../context/DetailsContext';
import { FavouriteContext } from '../../context/FavouriteContext';
import { WatchLaterContext } from '../../context/WatchLaterContext';
import {FaRegClock} from 'react-icons/fa';


const MovieCard = ({id, poster, title, date, movieData, setOpen}) => {
    const {setDetails} = useContext(DetailsContext);
    const {setFavourites} = useContext(FavouriteContext);
    const {setWatchLater} = useContext(WatchLaterContext);
    const movieItem = movieData.find(movie => movie.id === id);
    
    const handleClick = (id) => {
        setDetails(movieItem);
    }
    
    const addToFavourite = () => {
        setFavourites(prev => [...prev, movieItem]);
        setOpen(true);
    }
    const watchLater = () => {
        setWatchLater(prev => [...prev, movieItem]);
        setOpen(true);
    }
    return (
        <>
        <Container>
            <ImgDiv bg={poster}>
                <HoverDiv>
                    <HoverContent>
                    <Tooltip 
                        TransitionComponent={Zoom} 
                        title="Watch later" 
                        placement="right" 
                        disableFocusListener 
                        disableTouchListener
                    >
                        <Add onClick={watchLater}>
                            <FaRegClock size="60%"/>
                        </Add>
                    </Tooltip>
                    <Tooltip 
                        TransitionComponent={Zoom} 
                        title="Add to favourites" 
                        placement="right" 
                        disableFocusListener 
                        disableTouchListener
                    >
                        <Add onClick={addToFavourite}>
                            <MdAddCircleOutline size="60%"/>
                        </Add>
                    </Tooltip>
                    </HoverContent>
                </HoverDiv>
            </ImgDiv>
            <Content>
                <Typography variant="h5" component="h2" textAlign="left" fontSize="1.25em">
                    {title}
                </Typography>
                <Typography variant="subtitle1" component="h2" textAlign="left" color={colors.faintWhite}>
                    {date}
                </Typography>
                <Btn BtnBg={colors.primary} BtnColor={colors.white} onClick={() => handleClick(id)}>View Details</Btn>
            </Content>
        </Container>
    </>

    )
}

export default MovieCard;

const Container = styled.div`
    width: 25%;
    min-height: 10rem;
    background: none;
`;
const HoverDiv = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transform: scale(0.5);
    opacity: 0;
    transition: all 0.2s ease-out;
`;
const HoverContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    opacity: 0;
    transition: opacity 0.2s ease-in 0.1s;
    padding: .5rem;
`;

const Add = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius:4px;
    background: #555;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all .2s ease-out;
    &:hover{
        transform: scale(1.1);
    }
`
const ImgDiv = styled.div`
    width: 100%;
    height: 18rem;
    position: relative!important;
    background: url(${({bg}) => bg}) no-repeat center center/cover;
    &:hover ${HoverDiv}{
        transform: scale(1);
        opacity: 1;
    }
    &:hover ${HoverContent}{
        opacity: 1;
    }
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
