<?php

use App\Domain\Stripe\Enums\PaymentType;
use App\Payment;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeToPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payments', function (Blueprint $table) {
            $table->string('type');
        });

        Payment::query()->update(['type' => PaymentType::STATAMIC]);
    }
}
