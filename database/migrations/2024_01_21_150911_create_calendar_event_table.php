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
        Schema::create('calendar_event', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('select-category')->default('personal')->comment('1. personal, 2. business, 3. family, 4. holiday');
            $table->string('start_date');
            $table->string('end_date');
            $table->string('event_url');
            $table->string('guest_name');
            $table->string('location');
            $table->string('description');
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calendar_event');
    }
};
