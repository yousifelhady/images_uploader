import React from 'react';

const ImagesList = ({ images }) => {
    return (
        <div>
            {
                images.map(image => {
                    return <img
                        id={image._id}
                        key={image._id}
                        alt="group-img"
                        className="image"
                        src={image.image_url}
                    />
                })
            }
        </div>
    )
}

export default ImagesList