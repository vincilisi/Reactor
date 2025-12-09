import { useLoaderData, useParams } from "react-router-dom";
import GameList from "../Components/HomeComponents/Gamelist";
import GameCard from "../Components/HomeComponents/GameCard";

export default function GenrePage() {
    const games = useLoaderData();
    const { slug } = useParams();

    return (
        <div className="min-h-screen bg-gradient-to-b from-base-300 to-base-100">
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-4 mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <div>
                        <h1 className="text-4xl font-orbitron font-bold text-primary capitalize tracking-wide">{slug} Games</h1>
                        <p className="text-lg font-rajdhani text-base-content/70">Browse all games in this genre</p>
                        <div className="badge badge-secondary mt-2">{games.length} games available</div>
                    </div>
                </div>
                <GameList>
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </GameList>
            </div>
        </div>
    );
}