import React from 'react';
import styled from '@emotion/styled';
import { Button, Badge } from '@mui/material';
import {MdSearch} from 'react-icons/md';
import {BsFillBellFill} from 'react-icons/bs';

import {colors} from '../../../config.js/theme';

const Header = () => {
    return (
        <Container>
            <LogoDiv>
                <P>Jaro<span style={{color: '#f00'}}>Movies</span></P>
            </LogoDiv>
            <SearchDiv>
                <Input placeholder="Search movies..."/>
                <SearchBtn variant="contained" startIcon={<MdSearch size="1.5rem"/>}></SearchBtn>
            </SearchDiv>
            <AuthDiv>
                <AuthBtn variant="contained">Sign In</AuthBtn>
            </AuthDiv>
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
`;

const LogoDiv = styled.div`
    width: 15%;
    /* background: red; */
`
const SearchDiv = styled.div`
    width: 65%;
    display: flex;
    border-radius: 2px;
`
const AuthDiv = styled.div`
    width: 20%;
    /* background: green; */
    display: flex;
    justify-content: center;
    align-items: center;
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

