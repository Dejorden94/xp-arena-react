<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfilePictureController;
use App\Http\Controllers\GameController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/profile/picture', [ProfilePictureController::class, 'update'])->name('profile.picture.update');
    Route::delete('/profile/picture', [ProfilePictureController::class, 'destroy'])->name('profile.picture.destroy');

    Route::get('/games/{gameId}', [GameController::class, 'show'])->name('games.show');
});

require __DIR__.'/auth.php';
