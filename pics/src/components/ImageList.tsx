import './ImageList.css';

import ImageShow from './ImageShow';
import { Image } from '../types';

interface ImageListProps {
    images: Image[],
}

function ImageList({images} : ImageListProps) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    })
    return (
        <div className="image-list">
            {renderedImages}
        </div>
    );
}

export default ImageList;
