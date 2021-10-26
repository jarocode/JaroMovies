import React,{useState, useContext} from 'react';
import styled from '@emotion/styled';
import { Button, Badge } from '@mui/material';
import {MdSearch} from 'react-icons/md';
import {HiMenuAlt2} from 'react-icons/hi';
import {BsPlayCircle} from 'react-icons/bs';
import {scroller, animateScroll as scroll} from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import {colors} from '../../../config.js/theme';
import { MovieContext } from '../../../context/MovieContext';
import searchMovie from '../../../apis/searchMovie';
import device from '../../../config.js/mediaQueries';


const {mobile} = device;

const Header = () => {
    const [searchQuery, setSearchQuery] = useState();
    const {movieList, setMovieList}= useContext(MovieContext);
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const handleSearch = async() => {
        scroll.scrollToBottom({
            duration: 600,
            offset: -50,
            smooth: true,
        })
        const searchResult = await searchMovie(searchQuery);
        setMovieList(searchResult.results);
        setSearchQuery('');

    }
    const handleChange = e => {
        setSearchQuery(e.target.value);
    }
    return (
        <Container>
            {!isMobile && <LogoDiv>
                <P>Jar<BsPlayCircle/><span style={{color: '#f00'}}>Movies</span></P>
            </LogoDiv>}
            <SearchDiv>
                <Input 
                    placeholder="Search movies..."
                    onChange={handleChange}
                    // onKeyDown={e => e.keyCode === 13 && handleSearch()}
                    value={searchQuery}
                />
                <SearchBtn 
                    variant="contained"
                    onClick={handleSearch}
                    startIcon={<MdSearch size="1.5rem"/>}></SearchBtn>
            </SearchDiv>
            
            {!isMobile && <AuthDiv>
                <AuthBtn variant="contained">Sign In</AuthBtn>
            </AuthDiv>}
        </Container>
    )
}

export default Header;
const Container = styled.div`
    display: flex;
    min-height: 3rem;
    padding: 1rem;
    gap: 3%;
    margin-bottom: 2rem;
    @media ${mobile}{
        justify-content: center;
    }
`;

const LogoDiv = styled.div`
    width: 15%;
    /* @media ${mobile}{
        width: 100%;
    } */
    /* background: red; */
`
const SearchDiv = styled.div`
    width: 65%;
    display: flex;
    border-radius: 2px;
    @media ${mobile}{
        width: 25%;
    }
`
const AuthDiv = styled.div`
    width: 20%;
    /* background: green; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* @media ${mobile}{
        width: 100%;
    } */
`
const P = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 0!important;
`;

const Input = styled.input`
    display: block;
    width: 90%;
    border: 2px solid #fff;
    border-right: none;
    background: none;
    padding-left: 1rem;
    border-radius: 7px;
    outline: none;
    font-size: 1.1em;
    color: ${colors.white};
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    &::placeholder{
        color: ${colors.white};
    }
`;

const SearchBtn = styled(Button)`
    display: block!important;
    width: 10%;
    border-radius: 7px;
    background: #555;
    border: 2px solid #fff;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
`;
const AuthBtn = styled(Button)`
    display: block!important;
    width: 70%;
    border-radius: 7px;
    background: #f00;
    height: 2.8rem;
`;

