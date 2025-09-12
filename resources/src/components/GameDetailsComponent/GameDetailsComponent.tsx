interface GameDetails {
    gameId: number;
    gameName: string;
    gameDescription: string;
    gameImage: string;
}

export default function GameDetailsComponent(
    {
        gameId,
        gameName,
        gameDescription,
        gameImage,
    }: GameDetails) {
    return (
        <article>
            <img src={gameImage} alt=""/>
            <h2>{gameName}</h2>
            <p>{gameDescription}</p>
        </article>
    )
}
