import GameCard from "./GameCard";

export default function GameList({ children }) {
    return (
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-6">
            {children}
        </main>
    );
}

GameList.Card = GameCard;