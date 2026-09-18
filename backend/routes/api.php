<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\TemplateController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\InquiryController;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/templates', [TemplateController::class, 'index']);
Route::get('/templates/{id}', [TemplateController::class, 'show']);
Route::get('/packages', [PackageController::class, 'index']);
Route::get('/faqs', [FaqController::class, 'index']);
Route::post('/inquiries', [InquiryController::class, 'store']);
