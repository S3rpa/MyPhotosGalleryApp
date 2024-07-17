import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRandomImagesThunk = createAsyncThunk('images/getRandomImages', async () => {
    console.log('API');
    const response = await fetch('https://api.unsplash.com/photos/random?count=30&client_id=Z7cOMz3ipK03puLPs8BqG5Acm-yKS0u4xVZjvw8uVO8');
    if (response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw new Error('Error intentando obtener datos de la API');
    }
});

