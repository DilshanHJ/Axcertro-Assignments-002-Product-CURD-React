<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('Abc@1234'),
        ]);
        Category::factory()->create([
            'name' => 'Electronics',
            'description' => 'This category includes gadgets, devices, and appliances powered by electricity, such as smartphones, laptops, TVs, cameras, and home appliances.',
        ]);

        Category::factory()->create([
            'name' => 'Sports & Outdoors',
            'description' => 'Sports & Outdoors includes equipment, apparel, and accessories for various sports, outdoor activities, and fitness, such as hiking gear, sports shoes, and camping equipment.',
        ]);

        Category::factory()->create([
            'name' => 'Beauty & Health',
            'description' => 'Beauty & Health products encompass cosmetics, skincare, haircare, personal care items, vitamins, supplements, and health-related gadgets like fitness trackers.',
        ]);

        Category::factory()->create([
            'name' => 'Home & Garden',
            'description' => 'Home & Garden products comprise items for household use and outdoor living, including furniture, decor, kitchenware, gardening tools, and outdoor furniture.',
        ]);

        Category::factory()->create([
            'name' => 'Apparel',
            'description' => 'Apparel encompasses clothing items for men, women, and children, including shirts, pants, dresses, jackets, shoes, and accessories like hats and belts.',
        ]);

        Product::factory(100)->create();
    }
}
