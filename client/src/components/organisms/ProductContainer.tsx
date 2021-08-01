
import React from 'react';
import styles from '../../styles/ProductContainer.module.css'
import Box from '../atoms/Box';
import Product from '../../models/Product';
import ProductCard from '../molecules/ProductCard'

export default function ProductContainer({ products }: ProductContainerProps) {
    return (
        <Box styles={styles.productContainerOutlay}>
            <Box isClear={true} styles={styles.productContainerText}><p>İlginizi Çekebilecek Ürünler</p></Box>
            <Box isClear={true} styles={styles.productContainer}>{products && products.map((x) => {
                return (<ProductCard key={x.id} product={x} />)
            })}</Box>
        </Box>);
}

interface ProductContainerProps {
    products: Product[];
}