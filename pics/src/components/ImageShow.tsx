import { Image } from '../types';

interface ImageShowProps {
    image: Image,
}
function ImageShow({image} : ImageShowProps) {
    return (
        <div>
            <img src={image.url} alt={image.description}/>
        </div>
    );
}

export default ImageShow;
