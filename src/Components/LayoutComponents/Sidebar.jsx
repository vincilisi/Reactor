import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Sidebar() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`)
            .then(response => response.json())
            .then(data => setGenres(data.results))
            .catch(error => console.error("Error loading genres:", error));
    }, []);

    return (
        <nav className="bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 backdrop-blur-sm border-b border-primary/20 sticky top-16 z-40">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-sm font-semibold text-primary">Browse by Genre</span>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex gap-2 pb-2">
                        {genres.map((genre) => (
                            <Link 
                                key={genre.id} 
                                to={`/genre/${genre.slug}`}
                                className="btn btn-sm btn-outline btn-primary whitespace-nowrap hover:btn-primary"
                            >
                                {genre.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
