import React, { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FavoritesContext } from '../../features/favs/favs';
import ImgCard from '../../components/RandomImagesCard/card';
import { selectSearch } from '../../features/search/searchSlice';
import BasicSelect from '../../components/Select/Select';
import Modal from '../../components/Modal/Modal';

const Albums = () => {
  const { favorites, removeFavorite, addFavorite } = useContext(FavoritesContext);
  const searchTerm = useSelector(selectSearch);
  const [sortOption, setSortOption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleDescriptionChange = (newDescription) => {
    if (selectedImage) {
      setSelectedImage({ ...selectedImage, alt: newDescription });
    }
  };

  const handleSaveInfo = (event) => {
    event.preventDefault();
    if (selectedImage) {
      const updatedFavorites = favorites.map(image =>
        image.id === selectedImage.id ? { ...image, alt: selectedImage.alt, date: new Date().toLocaleString() } : image
      );
      addFavorite(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    handleCloseModal();
  };

  const handleRemove = (id) => {
    removeFavorite(id);
  };

  return (
    <div>
      <BasicSelect sortOption={sortOption} setSortOption={setSortOption} />
      <ImgCard
        images={sortedFavorites}
        onRemove={handleRemove}
        onImageClick={handleImageClick}
        showRemoveAndDownload={true}
      />
      {selectedImage && (
        <Modal
          isOpen={Boolean(selectedImage)}
          onClose={handleCloseModal}
          sizeHeight={selectedImage.height}
          sizeWidth={selectedImage.width}
          like={selectedImage.likes}
          date={selectedImage.date ? selectedImage.date : new Date().toLocaleString()}
          description={selectedImage.alt}
          sendInfo={handleSaveInfo}
          onDescriptionChange={handleDescriptionChange}
        />
      )}
    </div>
  );
};

export default Albums;
