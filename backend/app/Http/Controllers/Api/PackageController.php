<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Http\JsonResponse;

class PackageController extends Controller
{
    public function index(): JsonResponse
    {
        $packages = Package::orderBy('tier')->get();

        return response()->json([
            'success' => true,
            'data' => $packages
        ]);
    }
}
