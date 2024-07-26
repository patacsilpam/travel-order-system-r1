<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TravelOrdersController;
use App\Http\Controllers\TravelRequestController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::redirect('/', '/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/travel-request', [TravelRequestController::class, 'show'])->name('travel-request.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/travel-order', [TravelOrdersController::class, 'show'])->name('travel-order.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/division', [DivisionController::class,'show'])->name('division.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/user', [UserController::class,'show'])->name('user.show');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';