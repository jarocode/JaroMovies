import React from 'react';
import styled from '@emotion/styled';
import { Typography, Button } from '@mui/material';
import {ImBin} from 'react-icons/im'

import { colors } from '../../config.js/theme';
import url from '../../config.js/url';


const MovieListCard = ({movieData, deleteData}) => {
    const {id, title, backdrop_path, overview} = movieData;
    const handleDelete = () => {
        deleteData(prev => prev.filter(data => data.id !== id));
    }
    
    return (
        <Container>
            <ImgDiv bg={url["IMAGE_BASE_URL"]+backdrop_path}></ImgDiv>
            <Content>
                <Typography variant="h3" component="h2" color={colors.white} fontSize="1.5em" fontWeight="bold" marginBottom="1.3rem">
                    {title}
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    component="h2" 
                    color={colors.white}
                    marginBottom="1.5rem"
                    fontSize="1em"
                     >
                        {overview}
                </Typography>
                <Btn 
                    variant="contained" 
                    BtnBg={colors.primary} 
                    BtnColor={colors.white}
                    onClick={handleDelete}
                    startIcon={<ImBin/>}
                >
                        Remove
                    </Btn>
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
    background: url(${({bg}) => bg}) no-repeat center center/cover;
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


