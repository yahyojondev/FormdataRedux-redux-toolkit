import React from 'react'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'
import ProductCreate from '../../components/product-create/ProductCreate'

const Product = () => {
  return (
    <div>
        <h2>Product</h2>
        <ProductWrapper/>
        <ProductCreate/>
    </div>
  )
}

export default Product