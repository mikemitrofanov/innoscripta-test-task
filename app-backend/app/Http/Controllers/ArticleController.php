<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::select('id', 'title', 'short_description', 'content', 'author', 'published_at', 'image_url', 'base_url');

        // Sorting
//        if ($request->has('sort_by')) {
//            $sortField = $request->input('sort_by');
//            $sortOrder = $request->input('sort_dir', 'asc');
//            $query->orderBy($sortField, $sortOrder);
//        }

        if ($request->has('search')) {
            $query->where('content', 'like', '%' . $request->input('search') . '%');
        }

        // Filtering
        if ($request->has('source')) {
            $query->where('source_id', $request->input('source'));
        }

        if ($request->has('category')) {
            $query->where('category_id', $request->input('category'));
        }

        if ($request->has('author')) {
            $query->where('author', 'like', '%' . $request->input('author') . '%');
        }

        // Pagination
        $perPage = $request->input('per_page', 10); // Default to 10 items per page
        $articles = $query->paginate($perPage);

        return $articles;
    }

    public function show($id)
    {
        return Article::findOrFail($id);
    }
}
