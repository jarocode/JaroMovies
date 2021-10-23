import React from 'react';
import styled from '@emotion/styled';

const Home = () => {
    return (
        <Container>
            <Inner>

            </Inner>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    width: 85rem;
    height: 20rem;
    background: #fff;
`
