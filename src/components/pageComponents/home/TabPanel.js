import React from 'react';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';

const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Content>
                    <Typography>{children}</Typography>
                </Content>
      )}
        </div>
    )
}

export default TabPanel;

const Content = styled.div`
    width: 100%;
    height: 100%;
`
