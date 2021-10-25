import React, {createContext, useState} from 'react';

export const WatchLaterContext = createContext();

export const WatchLaterProvider = ({children}) => {
    const [watchLater, setWatchLater] = useState([]);

    return (
        <WatchLaterContext.Provider value={{watchLater, setWatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    );
}




