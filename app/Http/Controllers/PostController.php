<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return Inertia::render('Post/PostList', ['posts' => $posts]);
    }

    public function show($id)
    {
        return view('posts.show', ['id' => $id]);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        // Validate and store the post
        return redirect()->route('posts.index');
    }
}
