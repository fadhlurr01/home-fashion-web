<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('label');
            $table->string('short');
            $table->string('img');
            $table->integer('order')->default(0);
            $table->timestamps();
        });

        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('cat');
            $table->string('url');
            $table->text('desc');
            $table->json('tags')->nullable();
            $table->timestamps();
        });

        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->integer('tier')->default(1);
            $table->string('name_id');
            $table->string('name_en');
            $table->string('price');
            $table->text('desc_id')->nullable();
            $table->text('desc_en')->nullable();
            $table->json('features_id')->nullable();
            $table->json('features_en')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });

        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->text('question_id');
            $table->text('question_en');
            $table->text('answer_id');
            $table->text('answer_en');
            $table->integer('order')->default(0);
            $table->timestamps();
        });

        Schema::create('inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('whatsapp');
            $table->text('notes')->nullable();
            $table->string('template_name')->nullable();
            $table->string('package_name')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
        Schema::dropIfExists('faqs');
        Schema::dropIfExists('packages');
        Schema::dropIfExists('templates');
        Schema::dropIfExists('categories');
    }
};
