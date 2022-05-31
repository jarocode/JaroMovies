import React, {createContext, useState} from 'react';

import URL from '../config.js/url';

export const DetailsContext = createContext();

export const DetailsProvider = ({children}) => {
    const [details, setDetails] =  useState();

    

    return (
        <DetailsContext.Provider value={{details, setDetails}}>
            {children}
        </DetailsContext.Provider>
    );
}




