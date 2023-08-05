<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = Category::query();

        // Sorting
        if ($request->has('sort_by')) {
            $sortField = $request->query('sort_by');
            $sortDirection = $request->query('sort_dir', 'asc');
            $query->orderBy($sortField, $sortDirection);
        }

        // Filtering (by name)
        if ($request->has('name')) {
            $name = $request->query('name');
            $query->where('name', 'LIKE', "%{$name}%");
        }

        // Pagination
        $perPage = $request->query('per_page', 10);
        $categories = $query->select('id', 'name', 'created_at')->paginate($perPage);

        return $categories;
    }

    public function show($id)
    {
        return Category::findOrFail($id);
    }
}
