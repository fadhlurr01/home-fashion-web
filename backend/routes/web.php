<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'app' => 'Fashion-Web API Backend',
        'status' => 'online',
        'version' => '1.0.0',
        'frontend_url' => 'http://localhost:5173',
        'endpoints' => [
            'categories' => url('/api/categories'),
            'templates' => url('/api/templates'),
            'templates_filter_example' => url('/api/templates?category=modest&search=dress'),
            'packages' => url('/api/packages'),
            'faqs' => url('/api/faqs'),
            'inquiries_post' => url('/api/inquiries'),
        ],
        'message' => 'Backend API Laravel berjalan normal. Silakan buka Frontend React di http://localhost:5173'
    ], 200, [], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
});
