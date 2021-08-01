const productCardInfo: Array<Product> = [{
  "id": 1,
  "product_name": "Iphone 12 Pro",
  "price": 20000,
  "shipment": "free",
  "photo_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg",
  "isLiked": false
}, {
  "id": 2,
  "product_name": "Iphone 11 Pro MAX Samsunlu Yeşili Özel Edition Yeniden Paketlenmiş Bayramı Kutlanmış Süper Telefon",
  "price": 18000,
  "shipment": "notFree",
  "photo_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg",
  "isLiked": true
}, {
  "id": 3,
  "product_name": "Iphone 12",
  "price": 16000,
  "shipment": "freeDaily",
  "photo_url": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",
  "isLiked": true
}, {
  "id": 4,
  "product_name": "Iphone 11",
  "price": 14000,
  "shipment": "free",
  "photo_url": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",
  "isLiked": false
}]

interface Product {
  id: number,
  product_name: String,
  price: number,
  shipment: 'free' | 'freeDaily' | 'notFree',
  photo_url: String,
  isLiked: boolean
}

export default productCardInfo;