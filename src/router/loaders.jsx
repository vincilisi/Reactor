export async function getAllGamesLoader() {
    const promise = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2025-01-01,2025-12-31&page_size=100`
    );
    const json = await promise.json();
    return json.results;
}

export async function getSearchedGames({ params }) {
    console.log("Searching for:", params.slug);
    const promise = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`
    );
    const json = await promise.json();
    return json.results;
}


export async function getAllGenres() {
    const promise = await fetch(
        `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await promise.json();
    return json.results;
}

export async function getFilteredGensreGames({ params }) {
    const promise = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`
    );
    const json = await promise.json();
    return json.results;
}

export async function getGameDetails({ params }){
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json;
}