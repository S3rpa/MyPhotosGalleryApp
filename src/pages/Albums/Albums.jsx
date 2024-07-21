import React,{ useContext,useState } from 'react';
import { useSelector } from 'react-redux';
import { FavoritesContext } from '../../features/favs/favs';
import ImgCard from '../../components/RandomImagesCard/card';
import { selectSearch } from '../../features/search/searchSlice';
import BasicSelect from '../../components/Select/Select';

const Albums = () => {
  const { favorites,removeFavorite } = useContext(FavoritesContext);
  const searchTerm = useSelector(selectSearch);
  const [sortOption, setSortOption] = useState('');

    // Filtrar favoritos
    const filteredFavorites = searchTerm
        ? favorites.filter(image =>
            image.alt.toLowerCase().includes(searchTerm.toLowerCase()))
        : favorites;

    // Ordenar favoritos
    
    const sortedFavorites = [...filteredFavorites].sort((a, b) => {
        const [criteria, order] = sortOption.split('-');
        const orderFactor = order === 'desc' ? -1 : 1;
    
        if (criteria === 'date') {
          return orderFactor * (new Date(a.importedDate) - new Date(b.importedDate));
        } else if (criteria === 'width') {
          return orderFactor * (a.width - b.width);
        } else if (criteria === 'height') {
          return orderFactor * (a.height - b.height);
        } else if (criteria === 'likes') {
          return orderFactor * (a.likes - b.likes);
        } else {
          return 0;
        }
      });

    const handleRemove = (id) => {
        removeFavorite(id);
        if (onRemove) {
          onRemove(id);
        }
    };
      
    return (
        <div>
            <BasicSelect sortOption={sortOption} setSortOption={setSortOption} />
            <ImgCard images={sortedFavorites} onRemove={handleRemove} showRemoveAndDownload/>
        </div>
    );
};

export default Albums;
