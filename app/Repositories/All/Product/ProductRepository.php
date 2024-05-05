<?php

namespace App\Repositories\All\Product;

use App\Models\Product;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Base\BaseRepositoryInterface;

class ProductRepository extends BaseRepository implements ProductInterface{

    /**
     * @var Product
     */
    protected $model;
    /**
     * CategoryRepository constructor.
     *
     * @param Product $model
     */

    public function __construct(Product $model)
    {
        $this->model = $model;
    }
}
