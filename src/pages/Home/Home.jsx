import './Home.css';
import ImgCard from '../../components/RandomImagesCard/card';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomImagesData, getRandomImagesStatus, getRandomImagesError } from '../../features/images/imagesSlice';
import { getRandomImagesThunk } from '../../features/images/imagesThunk';
import { selectSearch } from '../../features/search/searchSlice';

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [imageList, setImageList] = useState([]);
    const dispatch = useDispatch();
    const imagesStatus = useSelector(getRandomImagesStatus);
    const imagesData = useSelector(getRandomImagesData);
    const imagesError = useSelector(getRandomImagesError);
    const searchTerm = useSelector(selectSearch);

    useEffect(() => {
        if (imagesStatus === 'idle') {
            dispatch(getRandomImagesThunk());
        } else if (imagesStatus === 'pending') {
            setIsLoading(true);
        } else if (imagesStatus === 'fulfilled') {
            setIsLoading(false);
            console.log('Images data:', imagesData); 
            const data = imagesData.map((image, index) => ({
                source: image.urls.regular || image.urls.small,
                full: image.urls.full,
                alt: image.alt_description || 'No description available',
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

    const filteredImages = searchTerm
    ? imageList.filter(image => 
        image.alt.toLowerCase().includes(searchTerm.toLowerCase())) : imageList;

    return (
        <main>
            {isLoading ? (<h2 className='loading-label'>LOADING...</h2>) 
            : filteredImages.length > 0 ? (<ImgCard images={filteredImages} />) 
            : (  <div className="no-results">No images found</div> )}
        </main>
    );
}

export default Home;
