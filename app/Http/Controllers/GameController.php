<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{
    /**
     * Display the specified game.
     */
    public function show($gameId): Response
    {
        // Load your test data (you can later replace this with database queries)
        $testDataPath = resource_path('src/testData/game-test.json');
        $testData = json_decode(file_get_contents($testDataPath), true);

        // Find the specific game
        $game = collect($testData['testGames'])
            ->firstWhere('gameId', (int) $gameId);

        if (!$game) {
            abort(404, 'Game not found');
        }

        return Inertia::render('GameDetailsPage', [
            'game' => $game
        ]);
    }
}
