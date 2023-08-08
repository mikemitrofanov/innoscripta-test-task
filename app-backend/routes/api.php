<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', 'App\Http\Controllers\AuthController@register');
Route::post('/login', 'App\Http\Controllers\AuthController@login');

// Article routes
Route::get('/articles', 'App\Http\Controllers\ArticleController@index');
Route::get('/articles/{id}', 'App\Http\Controllers\ArticleController@show');

// Category routes
Route::get('/categories', 'App\Http\Controllers\CategoryController@index');
Route::get('/categories/{id}', 'App\Http\Controllers\CategoryController@show');

// Source routes
Route::get('/sources', 'App\Http\Controllers\SourceController@index');
Route::get('/sources/{id}', 'App\Http\Controllers\SourceController@show');

Route::middleware('auth:sanctum')->get('/profile', function (Request $request) {
    return $request->user();
});

Route::get('/', function(Request $request) {
    return 'Health check';
});
