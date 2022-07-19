import React from 'react'
import Layout from '../../components/Layout'

function product({ product }) {
  return (
    <>
        <Layout>
    <h2>{product.title}</h2>
    </Layout>
    </>
  )
}

export async function getStaticPaths(){
    const json = await fetch('https://fakestoreapi.com/products')
    const data = await json.json()

    const paths = data.map(item => ({
        params: {
            id: item.id.toString()
        }
    }))

    return {
        paths,
        fallback: false 
    } 
    
}


export async function getStaticProps({ params }){
    const json = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await json.json()

    return {
        props: {
            product
        }
    }
}

export default product


