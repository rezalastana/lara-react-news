<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\News;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //kita ubah
        // DB::table('news')->insert([
        //     'title' => fake()->title(),
        //     'description' => fake()->paragraph(2, true),
        //     'category' => fake()->sentence(),
        //     'author' => fake()->email()
        // ]);

        //agar banyak langsung gunakan factory
        //jangan lupa panggil model News


        
        News::factory()->count(20)->create();
    }
}
