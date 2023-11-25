import './ImageList.css';

import ImageShow from './ImageShow';

function ImageList({images}){
    const imageshow =images.map((image)=>
    {
        return <ImageShow key={images.id} image={image} />
    });
    return (
        <div className="image-list">{imageshow}</div>
    );
}


export default ImageList;