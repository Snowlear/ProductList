import React from "react";
import Product from "../models/Product";

export const ProductContext = React.createContext({
    products: [],
    setUpdatedData: (x:Product) => {x},
    isLikedView: false,
    setLikedView: () => {}
  });