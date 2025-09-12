//React imports
import React from "react";
import type {JSX} from "react";
import { Link } from '@inertiajs/react';

//Test data imports
import gameData from "../../testData/game-test.json";

interface Game {
    gameId: number;
    gameName: string;
    gameDescription: string;
    gameImage: string;
}

interface GameProps {
    games: Game[];
}

export default function GameComponent(): JSX.Element {
    return (
        <div className="space-y-6 p-4">
            {gameData.testGames.map(game => (
                <article
                    key={game.gameId}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                    <div className="grid gap-0 lg:grid-cols-2">
                        <div className="aspect-video lg:aspect-square overflow-hidden">
                            <img
                                src={game.gameImage}
                                alt={game.gameName}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <section className="p-6 flex flex-col justify-center">
                            <Link
                                href={`/games/${game.gameId}`}
                                className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200"
                            >
                                {game.gameName}
                            </Link>
                            <p className="text-gray-600 leading-relaxed">
                                {game.gameDescription}
                            </p>
                        </section>
                    </div>
                </article>
            ))}
        </div>
    );
}
