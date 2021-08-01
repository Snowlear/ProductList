import { changeLikeStatus, getFormattedPrice } from '../helpers/helper';
import Product from '../models/Product';

let testProduct: Product = {
  "id": 2,
  "product_name": "Iphone",
  "price": 18000,
  "shipment": "notFree",
  "photo_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg",
  "isLiked": true
};

test('Price Tests', () => {
  let result = getFormattedPrice(testProduct.price);
  expect(result).toEqual("₺18.000,00");
});

test('Change Like Status Tests', () => {
  let result = changeLikeStatus(testProduct);
  expect(result.isLiked).toEqual(testProduct.isLiked!);
});