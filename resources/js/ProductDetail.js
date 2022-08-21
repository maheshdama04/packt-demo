import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import moment from 'moment';
import parse from 'html-react-parser'

export default function Products() {

  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(1);
  const [product, setProduct] = useState(null);

  var getProduct = (id) => {
    setIsLoading(1);
    fetch(baseUrl + '/api/products/' + id)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(0);
        setProduct(data)
      })
  }

  useEffect(() => {
    getProduct(id)
  }, [])


  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      {isLoading ? (<Loading />) : ''}

      {product != null &&  (<ProductDetail product={product} />) }
      

    </section>
  );
}

const ProductDetail = (props) => {
  const product = props.product;
  
  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="lg:w-5/5  flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/3 w-full object-contain object-top rounded border border-gray-200"
          src={product.images.original+ '?token='+packtToken}
        />
        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-0 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {product.category}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {product.title}
          </h1>
          <p className='mb-2'>{product.tagline}</p>
          <div className="flex mb-3">
            <span className="flex items-center">
             
              <span className="text-gray-600">
                {product.length}
              </span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              {product.concept}
            </span>
          </div>

          <p className='mb-2'><b>Published on:</b> {moment(new Date(product.publication_date)).format("DD MMM, YYYY")}</p>
          <p className='mb-4'><b>Product type:</b> {product.product_type}</p>
          {/* <p className="leading-relaxed">
            dangerouslySetInnerHTML{product.description}
          </p> */}

          <div className='mt-4'>
            <b>Description: </b>
            {/* <div dangerouslySetInnerHTML={{__html: product.features}} /> */}
            {parse(product.description)}
          </div>

          
        </div>
      </div>
      
      <div className="mt-4 mb-2">
        <b>Features:</b>
        {parse(product.features)}
        {/* <div dangerouslySetInnerHTML={{__html: product.description}} /> */}
      </div>

      <hr />

      <div className="mt-2">
        <b>Learn:</b> 
          {parse(product.learn)}
          {/* <div dangerouslySetInnerHTML={{__html: product.learn}} /> */}
          </div>
    </div>
  )
}

const Loading = () => {
  return (
    <div role="status" className="p-3  rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
      <div className="flex justify-center items-center mb-4 h-[400px] bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );

}