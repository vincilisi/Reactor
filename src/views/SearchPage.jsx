import { useLoaderData, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import GameList from "../Components/HomeComponents/Gamelist";

export default function SearchPage() {
    const { t } = useTranslation();
    const games = useLoaderData();
    const { slug } = useParams();
    console.log(games);
    return (
        <div className="min-h-screen bg-gradient-to-b from-base-300 to-base-100">
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center gap-4 mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <div>
                        <h1 className="text-4xl font-orbitron font-bold text-primary tracking-wide">{t('searchResults')}</h1>
                        <p className="text-lg font-rajdhani text-base-content/70">{t('showingResults')}: <span className="font-semibold text-secondary">"{slug}"</span></p>
                        <div className="badge badge-primary mt-2">{games.length} {t('gamesFound')}</div>
                    </div>
                </div>
                {games.length > 0 ? (
                    <GameList>
                        {games.map((game) => (
                            <GameList.Card key={game.id} game={game} />
                        ))}
                    </GameList>
                ) : (
                    <div className="text-center py-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xl text-base-content/50 mt-4">{t('noResults')} "{slug}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}