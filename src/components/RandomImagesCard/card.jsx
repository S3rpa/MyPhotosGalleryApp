import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import './card.css';
import { useContext } from 'react';
import { FavoritesContext } from '../../features/favs/favs';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';

export default function ImgCard({ images, onImageClick, onRemove, showRemoveAndDownload }) {
  const { addFavorite } = useContext(FavoritesContext);

  const handleRemove = (id) => {
    if (onRemove) {
      onRemove(id);
    }
  };

  const handleDownload = (url, alt) => {
    saveAs(url, `${alt}.jpg`);
    window.open(url, '_blank');
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Card key={image.id} sx={{ maxWidth: 345, margin: 2 }} className="image-card">
          <CardActionArea onClick={() => onImageClick(image)}>
            <div className="card-media-container">
              <CardMedia
                component="img"
                height="160"
                image={image.source}
                alt={image.alt}
              />
              {!showRemoveAndDownload && (
                <IconButton
                  className="star-icon"
                  aria-label={`star ${image.alt}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    addFavorite(image);
                  }}
                >
                  <StarBorderIcon />
                </IconButton>
              )}
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {image.alt || "Image"}
              </Typography>
              {showRemoveAndDownload && (
                <div className="remove-download">
                  <IconButton
                    className="remove-icon"
                    aria-label={`remove ${image.alt}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(image.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    className="download-icon"
                    aria-label={`download ${image.alt}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(image.urls.full, image.alt);
                    }}
                  >
                    <DownloadIcon />
                  </IconButton>
                </div>
              )}
              <Typography variant="body2" color="text.secondary">
                <span className='heart'>♥</span> Likes: {image.likes}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
