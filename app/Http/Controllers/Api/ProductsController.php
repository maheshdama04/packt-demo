<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\ProductService;

class ProductsController extends Controller
{
    public function getProducts(Request $request)
    {
        $products = (new ProductService)->getProducts($request);
        if($products) {
            return response()->json($products, 200);
        }
        return response()->json(['message' => 'Please try again later'], 500);
    }
    
    public function getProductDetail($id)
    {
        $productdetail = (new ProductService)->getProductDetail($id);
        if($productdetail) {
            return response()->json($productdetail, 200);
        }
        return response()->json(['message' => 'Please try again later'], 500);
    }
}
