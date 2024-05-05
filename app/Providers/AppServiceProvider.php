<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use \App\Repositories\All\Category\CategoryInterface;
use \App\Repositories\All\Category\CategoryRepository;
use App\Repositories\All\Product\ProductInterface;
use App\Repositories\All\Product\ProductRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            CategoryInterface::class,
            CategoryRepository::class
        );
        $this->app->bind(
            ProductInterface::class,
            ProductRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
