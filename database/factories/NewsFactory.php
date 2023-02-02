<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition()
    {
        return [
            'title' => fake()->title(),
            'description' => fake()->text(200),
            'category' => fake()->sentence(),
            'author' => fake()->unique()->safeEmail()
        ];
    }
}
