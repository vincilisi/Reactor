import { useLoaderData } from "react-router-dom";
import GameList from "../Components/HomeComponents/Gamelist";
import GameCard from "../Components/HomeComponents/GameCard";
import { useTranslation } from "react-i18next";

export default function Homepage() {
    const games = useLoaderData();
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-base-300 to-base-100">
            {/* Hero Section */}
            <div className="hero min-h-[400px] bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50 backdrop-blur-sm">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-black/70 px-8 py-4 rounded-2xl mb-4">
                            <h1 className="text-6xl md:text-8xl font-orbitron font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-wider neon-glow">
                                🎮 REACTOR
                            </h1>
                        </div>
                        <p className="text-2xl font-space font-semibold text-white/90 mb-8">
                            {t('welcomeTitle')}
                        </p>
                        <p className="text-lg font-rajdhani text-white/70">
                            {t('welcomeSubtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Games Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-orbitron font-bold text-primary flex items-center gap-2 tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                        {t('featuredGames')}
                    </h2>
                    <div className="badge badge-primary badge-lg">{games.length} {t('gamesCount')}</div>
                </div>
                <GameList>
                    {games.map((game) => (
                        <GameList.Card key={game.id} game={game} />
                    ))}
                </GameList>
            </div>
        </div>
    );
}
