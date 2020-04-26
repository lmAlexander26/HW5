<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/movies", function(){
    $d = \DB::select("select name, year, sales from Movies");
    return $d;
});

Route::get('/moviesinfo', function(){
    return view('moviesDriver');
});
