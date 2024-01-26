<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\DeliveryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*
|
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/auth', [AuthController::class, 'auth'])->where('any', '.*')->name('lvs.auth');

Route::get('/auth/{any}', [AuthController::class, 'auth'])->where('any', '.*')->name('lvs.auth.any');

Route::get('/', function () { return redirect()->route('lvs.auth.any', 'login'); } );

Route::get('/auth', function () { return redirect()->route('lvs.auth.any', 'login'); } );

/*
|
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/admin', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin');

Route::get('/admin/{any}', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin.any');

Route::get('/admin', function () { return redirect()->route('lvs.admin.any', 'dashboard'); } );

/*
|
|--------------------------------------------------------------------------
| Seller Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/seller', [SellerController::class, 'seller'])->where('any', '.*')->name('lvs.seller');

Route::get('/seller/{any}', [SellerController::class, 'seller'])->where('any', '.*')->name('lvs.seller.any');

Route::get('/seller', function () { return redirect()->route('lvs.seller.any', 'dashboard'); } );

/*
|
|--------------------------------------------------------------------------
| delivery Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/delivery', [DeliveryController::class, 'delivery'])->where('any', '.*')->name('lvs.delivery');

Route::get('/delivery/{any}', [DeliveryController::class, 'delivery'])->where('any', '.*')->name('lvs.delivery.any');

Route::get('/delivery', function () { return redirect()->route('lvs.delivery.any', 'dashboard'); } );

/*
|
|--------------------------------------------------------------------------
| Front Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/front', [FrontController::class, 'front'])->where('any', '.*')->name('lvs.front');

Route::get('/front/{any}', [FrontController::class, 'front'])->where('any', '.*')->name('lvs.front.any');

Route::get('/', function () { return redirect()->route('lvs.front.any', 'home'); } );
