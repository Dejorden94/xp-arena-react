import {Head} from '@inertiajs/react';
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import GameDetailsComponent from "@/components/GameDetailsComponent/GameDetailsComponent";

interface GameDetailsPageProps {
    game: {
        gameId: number;
        gameName: string;
        gameDescription: string;
        gameImage: string;
    };
}

export default function GameDetailsPage({ game }: GameDetailsPageProps) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Game Details
                </h2>
            }
        >
            <Head title={`Game Details - ${game.gameName}`}/>

            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <GameDetailsComponent
                            gameId={game.gameId}
                            gameName={game.gameName}
                            gameDescription={game.gameDescription}
                            gameImage={game.gameImage}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
