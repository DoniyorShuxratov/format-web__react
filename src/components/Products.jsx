import React, { useState } from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card def-box">
            <div className="product-card__img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card__text">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
}


export function Products() {

    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'Description for Product 1', type: 'ppt', image: './Images/inst_c-1.png' },
        { id: 2, name: 'Product 2', description: 'Description for Product 2', type: 'video', image: './Images/inst_c-1.png' },
        { id: 3, name: 'Product 3', description: 'Description for Product 3', type: 'materials', image: './Images/inst_c-1.png' },

    ]);


    const [filter, setFilter] = useState('all');
    const filteredProducts = filter === 'all' ? products : products.filter(product => product.type === filter);

    return (
        <>
            <section className="product-section container">
                <div className="product-title">
                    <h1>Products</h1>
                </div>

                <div className="filter-buttons">
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('ppt')}>PPT</button>
                    <button onClick={() => setFilter('video')}>Video</button>
                    <button onClick={() => setFilter('materials')}>Materials</button>
                </div>

                <div className="product-list">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
}
