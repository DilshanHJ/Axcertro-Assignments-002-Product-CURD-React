<?php

namespace App\Repositories\All\Category;

use App\Models\Category;
use App\Repositories\Base\BaseRepository;

//Repository Class

class CategoryRepository extends BaseRepository implements CategoryInterface{

    /**
     * @var Category
     */
    protected $model;
    /**
     * CategoryRepository constructor.
     *
     * @param Category $model
     */

    public function __construct(Category $model)
    {
        $this->model = $model;
    }
}
