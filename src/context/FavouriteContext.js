import React, {createContext, useState} from 'react';

export const FavouriteContext = createContext();

export const FavouriteProvider = ({children}) => {
    const [favorites, setFavourites] = useState([]);

    return (
        <FavouriteContext.Provider value={{favorites, setFavourites}}>
            {children}
        </FavouriteContext.Provider>
    );
}




