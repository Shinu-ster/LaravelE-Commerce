<?php
// Created UserController to test database with random datas
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'John doe',
            'email' => 'john@gmail.com',
            'password' => Hash::make('john@123')
        ]);
    }
}
