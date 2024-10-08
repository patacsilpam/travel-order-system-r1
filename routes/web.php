<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TravelOrdersController;
use App\Http\Controllers\TravelRequestController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\FundsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::redirect('/', '/login');

//dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//travel request
Route::middleware('auth')->group(function () {
    Route::get('/travel-request', [TravelRequestController::class, 'show'])->name('travel-request.show');
    Route::get('/travel-request/create', [TravelRequestController::class, 'create'])->name('travel-request.create');
    Route::post('/travel-request/create', [TravelRequestController::class, 'calculateDistance']);
});

//travel order
Route::middleware('auth')->group(function () {
    Route::get('/travel-order', [TravelOrdersController::class, 'show'])->name('travel-order.show');
});

//divisions (offices) 
Route::middleware('auth')->group(function () {
    Route::get('/division', [DivisionController::class,'show'])->name('division.show');
    Route::post('/division', [DivisionController::class,'create'])->name('division');
    Route::get('/division/edit/{id}', [DivisionController::class,'editForm'])->name('division.edit');
    Route::put('/division/edit/{id}', [DivisionController::class,'edit'])->name('division.edit');
    Route::delete('/division/delete/{id}', [DivisionController::class, 'destroy'])->name('division.delete');
});

//positions
Route::middleware('auth')->group(function () {
    Route::get('/positions', [PositionController::class,'show'])->name('positions.show');
    Route::post('/positions', [PositionController::class,'create'])->name('positions');
    Route::get('/positions/{id}/edit', [PositionController::class, 'editPosition'])->name('positions.edit');
    Route::put('/positions/{id}/edit', [PositionController::class, 'edit'])->name('positions.edit');
    Route::delete('/positions/{id}/delete', [PositionController::class, 'destroy'])->name('positions.delete');
});

//funds
Route::middleware('auth')->group(function () {
    Route::get('/funds', [FundsController::class,'index'])->name('funds.show');
    Route::post('/funds', [FundsController::class,'create'])->name('funds.create');
    Route::put('/funds/edit/{id}', [FundsController::class,'edit'])->name('funds.edit');
    Route::delete('funds/delete/{id}',[FundsController::class,'destroy'])->name('funds.delete');
});

//users
Route::middleware('auth')->group(function () {
    Route::get('/user', [UserController::class,'show'])->name('user.show');
    Route::get('/user/create', [UserController::class, 'createForm'])->name('user.create');
    Route::post('/user/create', [UserController::class, 'create'])->name('user.create');
    Route::get('/user/edit/{id}', [UserController::class, 'editForm'])->name('user.edit');
    Route::put('/user/edit/{id}', [UserController::class, 'edit'])->name('user.edit');
    Route::delete('/user/delete/{id}', [UserController::class, 'destroy'])->name('user.delete');
});

//profile
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//settings
Route::middleware('auth')->group(function () {
    Route::get('/settings', [SettingsController::class,'show'])->name('settings.show');
});
require __DIR__.'/auth.php';


/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/