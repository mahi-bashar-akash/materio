<?php

use Illuminate\Support\Facades\Route;
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
|--------------------------------------------------------------------------
|---- Admin Auth Routes ---------------------------------------------------
|--------------------------------------------------------------------------
*/

Route::get('admin/auth/{any}', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin.auth');

Route::get('admin/auth', function () { return redirect()->route('lvs.admin.auth', 'login'); } );

/*
|--------------------------------------------------------------------------
|---- Admin Routes --------------------------------------------------------
|--------------------------------------------------------------------------
*/

Route::get('/admin', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin');

Route::get('/admin/{any}', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin.any');

Route::get('/admin', function () { return redirect()->route('lvs.admin.any', 'dashboard'); } );

/*
|--------------------------------------------------------------------------
|---- Seller Auth Routes --------------------------------------------------
|--------------------------------------------------------------------------
*/

Route::get('seller/auth/{any}', [SellerController::class, 'seller'])->where('any', '.*')->name('lvs.seller.auth');

Route::get('seller/auth', function () { return redirect()->route('lvs.seller.auth', 'login'); } );

/*
|--------------------------------------------------------------------------
|---- Seller Routes -------------------------------------------------------
|--------------------------------------------------------------------------
*/

Route::get('/seller', [SellerController::class, 'seller'])->where('any', '.*')->name('lvs.seller');

Route::get('/seller/{any}', [SellerController::class, 'seller'])->where('any', '.*')->name('lvs.seller.any');

Route::get('/seller', function () { return redirect()->route('lvs.seller.any', 'dashboard'); } );

/*
|--------------------------------------------------------------------------
|---- Delivery Auth Routes ------------------------------------------------
|--------------------------------------------------------------------------
*/

Route::get('delivery/auth/{any}', [DeliveryController::class, 'delivery'])->where('any', '.*')->name('lvs.delivery.auth');

Route::get('delivery/auth', function () { return redirect()->route('lvs.delivery.auth', 'login'); } );

/*
|--------------------------------------------------------------------------
|---- Delivery Routes -----------------------------------------------------
|--------------------------------------------------------------------------
*/

Route::get('/delivery', [DeliveryController::class, 'delivery'])->where('any', '.*')->name('lvs.delivery');

Route::get('/delivery/{any}', [DeliveryController::class, 'delivery'])->where('any', '.*')->name('lvs.delivery.any');

Route::get('/delivery', function () { return redirect()->route('lvs.delivery.any', 'dashboard'); } );

/*
|--------------------------------------------------------------------------
|---- Front Routes --------------------------------------------------------
|--------------------------------------------------------------------------
*/

Route::get('/front', [FrontController::class, 'front'])->where('any', '.*')->name('lvs.front');

Route::get('/front/{any}', [FrontController::class, 'front'])->where('any', '.*')->name('lvs.front.any');

Route::get('/', function () { return redirect()->route('lvs.front.any', 'home'); } );
