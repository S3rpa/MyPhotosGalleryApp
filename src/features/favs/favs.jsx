import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (image) => {
    setFavorites((prevFavorites) => {
        if (!prevFavorites.find(fav => fav.id === image.id)) {
        return [...prevFavorites, image];
      }
      return prevFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
