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
        Schema::create('email', function (Blueprint $table) {
            $table->id();
            // form - composer
            $table->string('to');
            $table->string('from');
            $table->string('description');
            // from - email reply
            $table->string('name');
            $table->string('email');
            $table->string('title')->nullable();
            $table->string('message');
            $table->string('avatar')->nullable();
            $table->string('provider')->nullable()->default('email')->comment('1. email');
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('email');
    }
};
