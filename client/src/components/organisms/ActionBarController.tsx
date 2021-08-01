
import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/productContext';
import Product from '../../models/Product';
import actionBarStyles from '../../styles/ActionBarContainer.module.css'
import Box from '../atoms/Box';
import Button from '../atoms/Button';
import ImageBox from '../atoms/ImageBox';

export default function ActionBarContainer({ products }: ActionBarContainerProps) {
    let likeCount = products.filter(x => x.isLiked).length;
    return (
        <Box isClear={true} styles={actionBarStyles.Outlay}>
            <Box styles={actionBarStyles.LikeBar}>
                <ImageBox styles={actionBarStyles.LikeLogo} url={"/img/like.png"}></ImageBox>
                <p>{likeCount} Ürün</p>
            </Box>
            <ProductContext.Consumer>
                {({ isLikedView ,setLikedView }) => (
                    <Button onClick={() => setLikedView()} styles={actionBarStyles.LikeButton}>
                        <p>{isLikedView ? "Tümünü Göster" : "Beğendiklerim"}</p>
                    </Button>
                )}
            </ProductContext.Consumer>
        </Box>
    );
}

interface ActionBarContainerProps {
    products: Product[];
}