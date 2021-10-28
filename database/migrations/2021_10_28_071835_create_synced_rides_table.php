<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSyncedRidesTable extends Migration
{
    public function up()
    {
        Schema::create('synced_rides', function (Blueprint $table) {
            $table->id();
            $table->string('ride_id')->index();
        });
    }
}
