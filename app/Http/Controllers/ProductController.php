<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::query()->paginate(10);
        return Inertia::render('Product/All/Index', [
            'products' => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Product/Create/Create', [
            'categories' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {

        $data=$request->except('image');
        $image=$request->file('image');
        if($image){
            $image_name=time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('images'),$image_name);
            $data['image_path']='/'.'images'.'/'.$image_name;
        }
        $product = Product::create($data);
        return redirect()->route('products.index')->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/Show/Show', [
            'product' => new ProductResource($product),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = Category::all();
        return Inertia::render('Product/Edit/Edit', [
            'product' => new ProductResource($product),
            'categories' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
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
        $product->update($data);

        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        if($product->image_path){
            if( file_exists(public_path($product->image_path)) ){
                unlink(public_path($product->image_path));
            }
        }
    }
}
