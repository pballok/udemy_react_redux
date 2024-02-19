import {useState} from 'react';

import { ImageDTO } from '../types';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import searchImages from '../api';

function App() {
    const [images, setImages] = useState<ImageDTO[]>([]);
    const handleSubmit = async (term: string) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images.map((image) =>
                ({
                    id: image.id,
                    description: image.alt_description,
                    url: image.urls.small,
                }))}/>
        </div>
    );
}

export default App;
