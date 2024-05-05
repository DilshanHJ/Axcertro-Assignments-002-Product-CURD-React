<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Repositories\All\Category\CategoryInterface;
use App\Repositories\All\Product\ProductInterface;
use App\Services\ProductServices\ProductServices;
use Inertia\Inertia;

class ProductController extends Controller
{
    protected $productInterface;
    protected $productServices;
    public function __construct(
        ProductInterface $productInterface,
        ProductServices $productServices
    ){
        $this->productInterface = $productInterface;
        $this->productServices = $productServices;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = $this->productInterface->paginate(10);
        return Inertia::render('Product/All/Index', [
            'products' => ProductResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $categories = app()->make(CategoryInterface::class)->all();
        return Inertia::render('Product/Create/Create', [
            'categories' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {

        $this->productServices->storeProduct($request);
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
        $categories = app()->make(CategoryInterface::class)->all();
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
        $this->productServices->updateProduct($request, $product);
        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $this->productServices->destroyProduct($product);
        return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
    }
}
