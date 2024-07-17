import './card.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImgCard({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Card key={image.id} sx={{ maxWidth: 345, margin: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image.source}
              alt={image.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {image.alt || "Image"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
