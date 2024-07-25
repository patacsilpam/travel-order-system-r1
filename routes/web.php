<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TravelRequestController;
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

Route::post('/travel-request', function () {
    return Inertia::render('/TravelRequest');
})->middleware(['auth', 'verified'])->name('TravelRequest.edit');

Route::get('/travel-request', function () {
    return Inertia::render('TravelRequest');
})->middleware(['auth', 'verified'])->name('travel-request');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/users', function () {
    return Inertia::render('Users');
})->middleware(['auth', 'verified'])->name('users');

Route::get('/users/create', function () {
    return Inertia::render('User/Create');
})->middleware(['auth', 'verified'])->name('user.create');
require __DIR__.'/auth.php';