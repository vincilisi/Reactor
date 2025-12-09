import { useTranslation } from 'react-i18next';

export default function Header({game}){
    const { t } = useTranslation();

return (
    <header className="container mx-auto pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-8">
                <h1 className="text-5xl md:text-7xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 tracking-wide neon-glow">
                    {game.name}
                </h1>
                <div className="flex items-center justify-center gap-4 text-xl font-rajdhani">
                    <span className="badge badge-lg badge-primary">{t('released')}: {game.released}</span>
                    {game.rating && (
                        <span className="badge badge-lg badge-secondary">⭐ {game.rating}/5</span>
                    )}
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {/* Description */}
                <div className="card bg-black/30 backdrop-blur-sm shadow-2xl border border-white/10">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-orbitron text-primary mb-4 tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About This Game
                        </h2>
                        <p className="font-rajdhani text-lg leading-relaxed text-white">
                            {game.description_raw || "No description available."}
                        </p>
                    </div>
                </div>

                {/* Stats & Genres */}
                <div className="space-y-6">
                    {/* Rating Card */}
                    <div className="card bg-black/30 backdrop-blur-sm shadow-2xl border border-white/10">
                        <div className="card-body">
                            <h3 className="card-title text-xl font-orbitron text-primary tracking-wide">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                {t('rating')}
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="text-5xl font-orbitron font-bold text-primary">{game.rating || "N/A"}</div>
                                <div className="font-rajdhani text-base-content/70">{t('outOf')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Genres Card */}
                    <div className="card bg-black/30 backdrop-blur-sm shadow-2xl border border-white/10">
                        <div className="card-body">
                            <h3 className="card-title text-xl font-orbitron text-primary mb-4 tracking-wide">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                                {t('genres')}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {game.genres.map((genre) => (
                                    <span key={genre.id} className="badge badge-lg badge-primary font-rajdhani">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}