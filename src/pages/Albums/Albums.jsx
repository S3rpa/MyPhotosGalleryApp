import React,{ useContext } from 'react';
import { useSelector } from 'react-redux';
import { FavoritesContext } from '../../features/favs/favs';
import ImgCard from '../../components/RandomImagesCard/card';
import { selectSearch } from '../../features/search/searchSlice';

const Albums = () => {
  const { favorites,removeFavorite } = useContext(FavoritesContext);
  const searchTerm = useSelector(selectSearch);

  // Filtrar favoritos según el término de búsqueda
    const filteredFavorites = searchTerm
        ? favorites.filter(image =>
            image.alt.toLowerCase().includes(searchTerm.toLowerCase()))
        : favorites;

    
    const handleRemove = (id) => {
        removeFavorite(id);
        if (onRemove) {
          onRemove(id);
        }
    };
      
    return (
        <div>
            <ImgCard images={filteredFavorites} onRemove={handleRemove} showRemoveAndDownload/>
        </div>
    );
};

export default Albums;
