<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class InquiryController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'whatsapp' => 'required|string|max:50',
            'notes' => 'nullable|string|max:1000',
            'template_name' => 'nullable|string|max:255',
            'package_name' => 'nullable|string|max:255',
        ]);

        $inquiry = Inquiry::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Konsultasi berhasil diajukan.',
            'data' => $inquiry
        ], 201);
    }
}
