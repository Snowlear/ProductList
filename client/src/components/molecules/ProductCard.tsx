
import React from 'react';
import productCardStyles from '../../styles/ProductCard.module.css'
import Box from '../atoms/Box';
import Product from '../../models/Product';
import ImageBox from '../atoms/ImageBox';
import LikeStatusButton from './LikeStatusButton';
import { getFormattedPrice } from '../../helpers/helper';
import GreenCar from '../atoms/GreenCar';

export default function ProductCard({ styles, product }: ProductCardProps) {
    let shipmentText;
    switch (product.shipment) {
        case 'free':
            shipmentText = "Ücretsiz Kargo";
            break;
        case 'freeDaily':
            shipmentText = "Ücretsiz – Aynı Gün Kargo"
            break;
        case 'notFree':
            shipmentText = "Ücretli"
            break;
    }
    return (
        <Box styles={productCardStyles.productCard}>
            <LikeStatusButton product={product}></LikeStatusButton>
            <a href={product.photo_url} target="_blank">
            <ImageBox styles={productCardStyles.productImage} url={product.photo_url} />
            <p className={productCardStyles.productName}>{product.product_name}</p>
            <Box isClear={true} styles={productCardStyles.priceTag}>{getFormattedPrice(product.price)}</Box>
            <Box isClear={true} styles={productCardStyles.shipmentTag}> {product.shipment !== 'notFree' && <GreenCar />}<p>{shipmentText}</p></Box>
            </a>
        </Box >)
}

interface ProductCardProps {
    product: Product;
    styles?: string;
}