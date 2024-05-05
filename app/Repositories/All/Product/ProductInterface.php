<?php

namespace App\Repositories\All\Product;
use App\Repositories\Base\BaseRepositoryInterface;

// CategoryInterface
interface ProductInterface extends BaseRepositoryInterface{
    public function paginate(int $number);
}
