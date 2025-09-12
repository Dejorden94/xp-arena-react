interface GameDetails {
    gameId: number;
    gameName: string;
    gameDescription: string;
    gameImage: string;
}

const tasks = [
    { id: 1, name: 'Complete the first task' },
    { id: 2, name: 'Complete the second task' },
    { id: 3, name: 'Complete the third task' },
]

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
            <section>
                <h3>Game tasks</h3>
                {
                    tasks.map(task => (
                        <div key={task.id} className="mb-4">{task.name}</div>
                    ))
                }
            </section>
        </article>
    )
}
