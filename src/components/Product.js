import React from 'react';

export default function Product(props) {
    const {product, onAdd} = props;

//get artist and title
    const artist = product.title.split(' -')[0];
    const title = product.title.split(' -')[1];

    return (
        <div className="singleProduct">
            <div className="imageContainer">
                
                    <img className="images" src={product.image} alt={product.title}></img>
                                </div>
                                <div className="productDetails">
                    <h3>{artist}</h3>
                    <p>{title}</p>
                    <p>{product.price} PLN</p>
                    <h5><a className="yt-link" target="_blank" href={product.audio}>YouTube link</a></h5>
                   
               
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
               

            </div>
        </div>
    );
}
