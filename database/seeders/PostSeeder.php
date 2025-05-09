<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (range(1, 10) as $i) {
            DB::table('posts')->insert([
                'title' => "Sample Post Title $i",
                'slug' => Str::slug("Sample Post Title $i"),
                'content' => "This is the content of sample post number $i.",
                'author' => "Author $i",
                'status' => 'draft',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
