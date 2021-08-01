
import React from 'react';
import { ProductContext } from '../../contexts/productContext';
import { changeLikeStatus } from '../../helpers/helper';
import Product from '../../models/Product';
import likeStatusButtonStyles from '../../styles/LikeStatusButton.module.css'
import Box from '../atoms/Box';
import Button from '../atoms/Button';
import ImageBox from '../atoms/ImageBox';

export default function LikeStatusButton({ styles, product }: LikeStatusButtonProps) {
  return (
    <ProductContext.Consumer>
      {({ setUpdatedData }) => (
        <Button
          onClick={() => setUpdatedData(changeLikeStatus(product))}
          styles={likeStatusButtonStyles.button + (!product.isLiked ? " " + likeStatusButtonStyles.gray : " " + likeStatusButtonStyles.liked )}>
          <ImageBox styles={likeStatusButtonStyles.image} url={"/img/like.png"}></ImageBox>
        </Button>

      )}
    </ProductContext.Consumer>
  );
}

interface LikeStatusButtonProps {
  product: Product;
  styles?: string;
}