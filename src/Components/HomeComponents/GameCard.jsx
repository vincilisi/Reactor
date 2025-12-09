import { Link } from "react-router-dom";

export default function GameCard({ game }) {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <Link to={`/detail/${game.id}`}>
                <figure className="relative h-[250px] overflow-hidden">
                    <img
                        src={`${game.background_image}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        alt={game.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </figure>
                <div className="card-body p-4">
                    <h3 className="card-title text-lg font-orbitron text-primary line-clamp-2">
                        {game.name}
                    </h3>
                    {game.rating && (
                        <div className="flex items-center gap-2">
                            <div className="rating rating-sm">
                                <input type="radio" className="mask mask-star-2 bg-primary" disabled checked={game.rating >= 4} />
                            </div>
                            <span className="text-sm font-rajdhani">{game.rating}/5</span>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}
