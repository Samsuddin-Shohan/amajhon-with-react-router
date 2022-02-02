import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';

const Inventory = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>This is Inventory</h2>
            <h3>Product length {products.length}</h3>
        </div>
    );
};

export default Inventory;