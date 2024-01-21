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
        Schema::create('invoice', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_no');
            $table->string('date_issued');
            $table->string('due_date');
            $table->string('customer_id');
            $table->string('total_due')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('country')->nullable();
            $table->string('iban')->nullable();
            $table->string('swift_code')->nullable();
            $table->string('service_type');
            $table->string('service_amount');
            $table->string('service_hour');
            $table->string('service_discount')->nullable();
            $table->string('service_description')->nullable();
            $table->string('notes')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoice');
    }
};
