export default interface Product {
  id: number,
  product_name: string,
  price: number,
  shipment: 'free' | 'freeDaily' | 'notFree',
  photo_url: string,
  isLiked: boolean
}