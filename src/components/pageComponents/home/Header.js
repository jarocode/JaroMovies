import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <Container>
            <LogoDiv></LogoDiv>
            <SearchDiv></SearchDiv>
            <AuthDiv></AuthDiv>
        </Container>
    )
}

export default Header;
const Container = styled.div`
    display: flex;
    min-height: 4rem;
    gap: 3%;
    margin-bottom: 2rem;
`;

const LogoDiv = styled.div`
    width: 20%;
    background: red;
`
const SearchDiv = styled.div`
    width: 50%;
    background: yellow;
`
const AuthDiv = styled.div`
    width: 30%;
    background: green;
`

