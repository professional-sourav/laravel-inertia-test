<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
})->name('home');

/*Route::get('/posts', [
    \App\Http\Controllers\PostController::class,
    'index'
])->name('posts.index');*/

// Route::inertia('/posts', 'Post/PostList')->name('posts.index');

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');

Route::resource('/tasks', TaskController::class);
