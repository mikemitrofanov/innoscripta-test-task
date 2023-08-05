<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SourceSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('sources')->insert([
            ['name' => 'NewsAPI'],
            ['name' => 'OpenNews'],
            ['name' => 'NewsCred'],
            ['name' => 'The Guardian'],
            ['name' => 'New York Times'],
            ['name' => 'BBC'],
            ['name' => 'NewsAPI.org'],
        ]);
    }
}
