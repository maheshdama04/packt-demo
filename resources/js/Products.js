import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemPage, setItemPage] = useState(0);
  const [isLoading, setIsLoading] = useState(1);
  const itemsPerPage = 10;

  var getProducts = () => {
    setIsLoading(1);
    fetch(baseUrl + '/api/products?page='+ itemPage)
    .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(0);
        setProducts(data.products)
        setPageCount(data.last_page)
      })
  }

  useEffect(() => {
    getProducts()
  }, [itemPage])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemPage(event.selected + 1);
  };

  return (
    <div>

      {isLoading ? (<Loading />) : ''}
      

      {products.length > 0 &&  (
        <>
        
        {!isLoading && (<ProductList products={products} />) }
        

        <div className='mt-4 text-center'>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              className="custom-paginate text-[12px]"
            />
          </div>
          </>
      )}
    </div>
  )
}

const Categories = (props) => {
  return props.data.map((cat, index) => (
      <span key={cat+index} className="text-[10px] inline-block bg-gray-200 rounded-full px-2 py-[0.5px]  font-semibold text-gray-700 mr-2 mb-2">{cat}</span>
  ));

}

const Authors = (props) => {
  return props.data.map((auth, index) => (
    <span key={auth+index} className="text-[10px] inline-block font-semibold text-gray-700 mr-1">{index ? '| ' : ''}
      {auth}
    </span>
  ));

}

const ProductList = (props) => {
  const products = props.products;
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
          
          {products.map(product => (
            <Link key={product.id} className="p-3 bg-white hover:shadow-2xl	cursor-pointer block max-w-sm  rounded-lg shadow-md "  to={'/products/'+ product.id}>
            <div >
              {/* <img className="w-full rounded-lg" src={"https://api.packt.com/api/v1/products/"+ product.id +"/cover/small?token="+packtToken} alt=""></img> */}

              
              <LazyLoadImage
                alt="Loading"
                // height='250px'
                placeholder={<ImaagePlaceholder />}
                src={"https://api.packt.com/api/v1/products/"+ product.id +"/cover/small?token="+packtToken} // use normal <img> attributes as props
                className="min-h-[250px]"
                />

              {/* <div className="flex justify-center items-center mb-1 h-48 bg-gray-300 rounded dark:bg-gray-700">
                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div> */}
              
              <div className=" py-2 ">
                <h4 className='font-bold mb-2 h-[35px] overflow-hidden'>{product.title}</h4>
                <p className="text-gray-700 ">{product.concept}</p>
              </div>

              <div className=" pt-0 pb-2">
                <Categories data={product.categories} />

              </div>

              <div className=" pt-0 pb-0">

                <span className='text-[11px] inline-block font-semibold text-gray-900'>Authors: &nbsp;</span><Authors data={product.authors} />
                <div className="inline-block absolute invisible z-10 py-0 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                  {product.authors}
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            </Link>
          ))}

          
          
        </div>
  )
}

const Loading = () => {
  var indents = [];
  for (var i = 0; i < 10; i++) {
    indents.push(
      <div key={i} role="status" className="p-3 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            
            <span className="sr-only">Loading...</span>
        </div>
    );
  }
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
      {indents}
    </div>
  );

}


const ImaagePlaceholder = () => {
  return (
    <div className="flex h-[250px] justify-center items-center mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
  )
}