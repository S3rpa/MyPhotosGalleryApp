import './Home.css';
import ImgCard from '../../components/RandomImagesCard/card';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomImagesData, getRandomImagesStatus, getRandomImagesError } from '../../features/images/imagesSlice';
import { getRandomImagesThunk } from '../../features/images/imagesThunk';

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [imageList, setImageList] = useState([]);
    const dispatch = useDispatch();
    const imagesStatus = useSelector(getRandomImagesStatus);
    const imagesData = useSelector(getRandomImagesData);
    const imagesError = useSelector(getRandomImagesError);

    useEffect(() => {
        if (imagesStatus === 'idle') {
            dispatch(getRandomImagesThunk());
        } else if (imagesStatus === 'pending') {
            setIsLoading(true);
        } else if (imagesStatus === 'fulfilled') {
            setIsLoading(false);
            console.log('Images data:', imagesData); 
            const data = imagesData.map((image, index) => ({
                source: image.urls.regular,
                alt: image.alt_description,
                id: image.id,
                height: image.height,
                width: image.width,
                likes: image.likes,
                key: index
            }));
            setImageList(data);
        } else if (imagesStatus === 'rejected') {
            setIsLoading(false);
            alert(imagesError);
        }
    }, [imagesStatus, imagesData, imagesError, dispatch]);

    return (
        <main>
            <div className='title'>
                <h1>MyPhotosGallery</h1>
                <img src="resources/Logo.png" alt="Logo" />
            </div>
            {isLoading ? <h2 className='loading-label'>LOADING...</h2> : <ImgCard images={imageList} />}
        </main>
    );
}

export default Home;
