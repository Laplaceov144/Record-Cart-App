import React from 'react';

export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div>
      <img className='small' src={product.image} alt={product.title}></img>
      <h3>{product.title}</h3>
      <div>{product.price} PLN</div>
      <h5><a className="yt-link" target="_blank" href={product.audio}>YouTube link</a></h5>  
      <div>
        <button onClick={()=>onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}
