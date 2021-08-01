import Product from "../models/Product";

export function getFormattedPrice(input: number) {
    var formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY', // Bu helper'a objeden gelebilecek bir currency değeri ile farklı localeler için farklı currency ve gösterim tipleri tanımlanabilir.
    });
    return formatter.format(input);
}

export function changeLikeStatus(product: Product) {
    product.isLiked = !product.isLiked;
    console.log("DONE");
    return product;
}