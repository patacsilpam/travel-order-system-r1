<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TravelOrdersController;
use App\Http\Controllers\TravelRequestController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PositionController;
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
    Route::get('/travel-request/create', [TravelRequestController::class, 'create'])->name('travel-request.create');
});
Route::middleware('auth')->group(function () {
    Route::get('/travel-order', [TravelOrdersController::class, 'show'])->name('travel-order.show');
});


Route::middleware('auth')->group(function () {
    Route::get('/division', [DivisionController::class,'show'])->name('division.show');
});
Route::middleware('auth')->group(function () {
    Route::get('/division/create', [DivisionController::class,'create'])->name('division.create');
});


Route::middleware('auth')->group(function () {
    Route::get('/positions', [PositionController::class,'show'])->name('positions.show');
    Route::post('/positions', [PositionController::class,'create'])->name('positions');
    Route::get('/positions/{id}/edit', [PositionController::class, 'editPosition'])->name('positions.edit');
    Route::put('/positions/{id}/edit', [PositionController::class, 'edit'])->name('positions.edit');
    Route::delete('/positions/{id}/delete', [PositionController::class, 'destroy'])->name('positions.delete');
    

});

Route::middleware('auth')->group(function () {
    Route::get('/user', [UserController::class,'show'])->name('user.show');
    Route::get('/user/create', [UserController::class, 'createForm'])->name('user.create');
    Route::post('/user/create', [UserController::class, 'create'])->name('user.create');
    Route::get('/user/edit/{id}', [UserController::class, 'editForm'])->name('user.edit');
    Route::put('/user/edit/{id}', [UserController::class, 'edit'])->name('user.edit');
});
Route::middleware('auth')->group(function () {
    Route::get('/settings', [SettingsController::class,'show'])->name('settings.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';