import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import './card.css';

export default function ImgCard({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Card key={image.id} sx={{ maxWidth: 345, margin: 2 }} className="image-card">
          <CardActionArea>
            <div className="card-media-container">
              <CardMedia
                component="img"
                height="160"
                image={image.source}
                alt={image.alt}
              />
              <IconButton
                className="star-icon"
                aria-label={`star ${image.alt}`}
              >
                <StarBorderIcon />
              </IconButton>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                {image.alt || "Image"}
              </Typography>
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
