import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Build an Ecommerce website</title>
        <meta name="description" content="Learn how to build a FullStack Ecommerce in this 2 hours and a half free video sponsored by Magic" />
      </Head>

      {products.map(product => (
        <div className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Rows}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.image)} />
                </div>
                <div className={styles.product__Col}>
                  Name:{product.name}
                  Price: {twoDecimals(product.price)} RS
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  return {
    props: {
        products
    }
  }
}