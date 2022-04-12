<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string("street");
            $table->integer("number")->unsigned();
            $table->string("city");
            $table->string("province");
            $table->string("image");
            $table->string("country");
            $table->string("status");
            $table->string("type");
            $table->string("description");
            $table->string("contact_mail");
            $table->string("contact_phone");
            $table->string("condition");
            $table->integer("room")->unsigned();
            $table->integer("bath")->unsigned();
            $table->integer("size")->unsigned();
            $table->integer("price")->unsigned();
            $table->boolean("pet");
            $table->boolean("garden");
            $table->boolean("air_conditioning");
            $table->boolean("swimming_pool");
            $table->boolean("terrace");
            $table->timestamp("publication_date");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
};
