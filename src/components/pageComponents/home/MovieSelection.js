import React from 'react';
import styled from '@emotion/styled';
import {Box, Tabs, Tab} from '@mui/material';
import AllMovies from './AllMovies';
import Favourites from './Favourites';
import WatchLater from './WatchLater';


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const MovieSelection = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Container>
            <Box sx={{ width: '100%', bgcolor: '#444444' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="All Movies" {...a11yProps(0)}/>
                    <Tab label="Favourites" {...a11yProps(1)}/>
                    <Tab label="Watch Later" {...a11yProps(2)}/>
                </Tabs>
            </Box>
            <AllMovies value={value}/>
            <Favourites value={value}/>
            <WatchLater value={value}/>
        </Container>
    )
}

export default MovieSelection;

const Container = styled.div`
    margin: auto;
    margin-top: 2rem;
    width: 85%;
    background: purple;
    min-height: 20rem;
`