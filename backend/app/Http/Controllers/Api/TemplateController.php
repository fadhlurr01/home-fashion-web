<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Template;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TemplateController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Template::query();

        if ($request->filled('category') && $request->category !== 'all') {
            $query->where('cat', $request->category);
        }

        if ($request->filled('search')) {
            $search = strtolower($request->search);
            $query->where(function ($q) use ($search) {
                $q->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"])
                  ->orWhereRaw('LOWER(desc) LIKE ?', ["%{$search}%"])
                  ->orWhereRaw('LOWER(cat) LIKE ?', ["%{$search}%"]);
            });
        }

        $templates = $query->get();

        return response()->json([
            'success' => true,
            'total' => $templates->count(),
            'data' => $templates
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $template = Template::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $template
        ]);
    }
}
