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
        Schema::table('users', function (Blueprint $table) {
            //

            $table->uuid('user_id')->unique()->after('id');
            $table->string('first_name')->after('user_id');
            $table->string('last_name')->after('first_name');
            $table->string('position')->after('last_name');
            $table->string('office')->after('position');
            $table->string('role')->after('office');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};