import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((acc, current) => acc + current.price * current.qty, 0);
    const taxPrice = itemsPrice * 0.23;
    const shippingPrice = itemsPrice > 400 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return ( 
    <aside className='block column-1'>
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className='column-2'>{item.title}</div>
                <div className='column-2'>
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className='column-2 text-right'>
                    {item.qty} x {item.price.toFixed(2)} PLN
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className='row'>
                <div className='column-2'>Items Price</div>
                <div className='column-1 text-right'>{itemsPrice.toFixed(2)} PLN</div>
            </div>
            <div className='row'>
                <div className='column-2'>Tax Price</div>
                <div className='column-1 text-right'>{taxPrice.toFixed(2)} PLN</div>
            </div>
            <div className='row'>
                <div className='column-2'>Shipping Price</div>
                <div className='column-1 text-right'>{shippingPrice.toFixed(2)} PLN</div>
            </div>
            <div className='row'>
                <div className='column-2'><strong>Total Price</strong></div>
                <div className='column-1 text-right'>{totalPrice.toFixed(2)} PLN</div>
            </div>
            <hr/>
            <div className='row'>
                <button onClick={() => alert('Implement Checkout')}>
                    Checkout
                </button>
            </div>
            </>
        )}
    </aside> );
}