<?php
namespace App\Services;

use Illuminate\Http\Request;

class ProductService
{
  protected $token;
  public function __construct()
  {
    $this->token = config('custom_config.packt_token');
  }

  public function getProducts(Request $request)
  {
      $httpClient = new \GuzzleHttp\Client();

      $params = [
        'query' => [
            'limit' => 10,
            'page' => $request->page,
            'token' => $this->token
        ]
      ];

      $request = $httpClient->request("GET", "https://api.packt.com/api/v1/products", $params);

      // $response = json_decode($request->getBody()->getContents());
      return $this->responseParameter($request);  
      // dd($response);
      // return $response;
  }

  public function getProductDetail($id)
  {
      $httpClient = new \GuzzleHttp\Client();

      $params = [
        'query' => [
            'token' => $this->token
        ]
      ];

      $request = $httpClient->request("GET", "https://api.packt.com/api/v1/products/$id", $params);

      // $response = json_decode($request->getBody()->getContents());
      return $this->responseParameter($request);  
      // dd($response);
      // return $response;
  }

  public function responseParameter($res)
  {

    if($res->getStatusCode() !== 200) {
      return false;
    }else {
      $data = json_decode($res->getBody(true));
      return $data;
    }
  }
}