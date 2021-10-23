import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const AppText = ( text, display, weight, top, bottom, left, right, decoration, color, align) => {
    return (
        <Text align={align} color={color} display={display} weight={weight} top={top}>
            {text}
        </Text>
    )
}

export default AppText;

const Text = styled(Typography)`

`;
