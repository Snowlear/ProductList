import { ApolloQueryResult, gql } from '@apollo/client'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import client from '../apollo-client'
import ErrorCard from '../src/components/molecules/ErrorCard'
import ActionBarContainer from '../src/components/organisms/ActionBarController'
import ProductContainer from '../src/components/organisms/ProductContainer'
import { ProductContext } from '../src/contexts/productContext'
import Product from '../src/models/Product'
import styles from '../src/styles/Home.module.css'

export default function Home({ data }: any) {
  const [renderTrigger, setRenderTrigger] = useState(false);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);
  const [productData, setProductData] = useState(data.data.data.products);
  const [products, setProducts] = useState(productData.filter((element: Product) => showOnlyLiked ? element.isLiked : element));
  const replaceProduct = (products:Product[],setProducts:Function,target:Product) => {
    let index = products.indexOf(products.find((x)=> x.id == target.id )!);
    products[index] = target;
    setProducts(products);
    setRenderTrigger(true);
  };

  const toggleShowOnlyLiked = () => {
    setShowOnlyLiked(!showOnlyLiked);
    setRenderTrigger(true);
  }

  useEffect(() => {
    if(renderTrigger){
      setProducts(productData.filter((element: Product) => showOnlyLiked ? element.isLiked : element));
      setRenderTrigger(false);
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>ProductCard Project</title>
        <meta name="description" content="ProductCard Project" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        {data.isError ?
          <ErrorCard error={{
            errorTitle: "An error occurred while connecting to the server.",
            errorDescription: data.errorDescription,
            errorLog: data.errorLog
          }} />
          :
          <div className={styles.layer}>
            <ProductContext.Provider value={{products: products, setUpdatedData:(x) => replaceProduct(productData,setProductData,x),isLikedView: showOnlyLiked,setLikedView:() => toggleShowOnlyLiked()}}>
              <ActionBarContainer products={products} />
              <ProductContainer products={products} />
            </ProductContext.Provider>
          </div>
        }
      </main>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  let data: ServerSideProps = {
    errorDescription: "",
    errorLog: "",
    isError: false
  };
  try {
    data.data = await client.query({
      query: gql`
        { products {
          id
          product_name
          price
          shipment
          photo_url
          isLiked
        } }
      `});
  }
  catch (e: any) {
    data = { isError: true, errorDescription: "503/404 GraphQL Related Error", errorLog: JSON.stringify(e) };
  }
  finally {
    return { props: { data } }
  }
}

interface ServerSideProps {
  data?: ApolloQueryResult<any>,
  isError: boolean,
  errorDescription: string,
  errorLog: any
}
