import React from 'react';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';

import TabPanel from './TabPanel';

const WatchLater = ({value}) => {
    return (
       <TabPanel value={value} index={2}>
           <Container></Container>
       </TabPanel>
    )
}

export default WatchLater;

const Container = styled.div`
    width: 100%;
    min-height: 10rem;
    background: green;
`;



