import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ images }) {
    const renderImagesList = images.map((image) => {
            return <ImageShow image={image} key={image.id} />
        });

    return (
        <div className="image-list">
            {renderImagesList}
        </div>
    );
}

export default ImageList;