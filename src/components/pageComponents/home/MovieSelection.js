import React from 'react';
import styled from '@emotion/styled';
import {Box, Tabs, Tab} from '@mui/material';
import { styled as  muiStyled } from '@mui/material/styles';

import AllMovies from './AllMovies';
import Favourites from './Favourites';
import WatchLater from './WatchLater';
import { colors } from '../../../config.js/theme';


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
            <Box sx={{ width: '100%', bgcolor: '#333' }}>
                <MovieTabs value={value} onChange={handleChange} centered>
                    <MovieTab label="All Movies" {...a11yProps(0)} color={"#fff"}/>
                    <MovieTab label="Favourites" {...a11yProps(1)}/>
                    <MovieTab label="Watch Later" {...a11yProps(2)}/>
                </MovieTabs>
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
    margin-top: 3.5rem;
    width: 85%;
    /* background: purple; */
    min-height: 20rem;
`

const MovieTabs = muiStyled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 70,
      width: '100%',
      backgroundColor: colors.primary
    },
  });

const MovieTab = muiStyled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'rgba(255, 255, 255, 0.7)',
      '&.Mui-selected': {
        color: '#fff',
      },
      '&.Mui-focusVisible': {
        backgroundColor: colors.primary,
      },
    }),
);