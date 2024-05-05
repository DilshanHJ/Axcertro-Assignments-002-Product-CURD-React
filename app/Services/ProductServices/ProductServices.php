<?php

namespace App\Services\ProductServices;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Repositories\All\Product\ProductInterface;

class ProductServices{
    protected $productInterface;
    public function __construct(
        ProductInterface $productInterface
    )
    {
        $this->productInterface = $productInterface;
    }
    public function storeProduct(StoreProductRequest $request){
        $data=$request->except('image');
        $image=$request->file('image');
        if($image){
            $image_name=time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'),$image_name);
            $data['image_path']='/'.'images'.'/'.$image_name;
        }
        $product = $this->productInterface->create($data);
        return $product;
    }

    public function updateProduct(UpdateProductRequest $request,Product $product){
        $data = $request->except('image');
        $image=$request->file('image');
        if($image){
            $image_name=time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'),$image_name);
            $data['image_path']='/'.'images'.'/'.$image_name;
            if($product->image_path){
                if( file_exists(public_path($product->image_path)) ){
                    unlink(public_path($product->image_path));
                }
            }
        }
        $product = $this->productInterface->update($product->id,$data);
    }

    public function destroyProduct(Product $product){
        $this->productInterface->deleteById($product->id);
        if($product->image_path){
            if( file_exists(public_path($product->image_path)) ){
                unlink(public_path($product->image_path));
            }
        }
    }
}
