import React from 'react';
import styled from '@emotion/styled';
import Home from '../components/pageComponents/home';

const HomePage = () => {
    return (
        <Container>
            <Inner>
                <Home/>
            </Inner>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    width: 85rem;
    height: 20rem;
    /* background: #fff; */
`
