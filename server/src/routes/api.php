<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropertyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// properties routes
Route::get("/properties",[PropertyController::class,"getProperties"]);
Route::post("/properties",[PropertyController::class,"createProperty"]);

// auth routes
Route::post("/register",[AuthController::class,"register"]);
Route::post("/login",[AuthController::class,"login"]);


