import { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import pokeball from "../../assets/pokeball.png";
import { UserContext } from "../../context/UserContext.jsx";
import { Link } from "react-router-dom";
import supabase from "../../database/supabase";

export default function ProfilePage() {
    const { t } = useTranslation();
    const { user, profile } = useContext(UserContext);
    const [avatarUrl, setAvatarUrl] = useState();
    const [UserFavourites, setUserFavourites] = useState([]);


    const download_avatar = async () => {
        if (profile && profile.avatar_url) {
            const {data, error} = await supabase.storage
                .from("avatars")
                .download(profile.avatar_url);
            if (data) {
                const url = URL.createObjectURL(data);
                setAvatarUrl(url);
            }
        }
    };


    const get_favourite = async () => {
        if(profile) {
            let {data: favourites, error} = await supabase
            .from("favourites")
            .select("*")
            .eq("profile_id", profile.id);
            setUserFavourites(favourites);
        }
    };


    useEffect(() => {
        download_avatar();
        get_favourite();
    }, [profile]);



    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-12">
        {user && profile ? (
            <div className="container mx-auto px-4">
                {/* Header con Avatar */}
                <div className="flex flex-col items-center mb-12">
                    <div className="avatar online placeholder mb-4">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={avatarUrl ?? pokeball} alt="Profile" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-orbitron font-bold text-primary mb-2 tracking-wide">
                        {profile.first_name} {profile.last_name}
                    </h1>
                    <p className="text-lg font-space text-base-content/70">@{profile.username}</p>
                </div>

                {/* Favorites Section */}
                {UserFavourites && UserFavourites.length > 0 && (
                    <div className="mb-12 max-w-6xl mx-auto">
                        <h2 className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 text-center tracking-wide neon-glow">
                            ❤️ {t('favoriteGames')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {UserFavourites.map((game) => (
                                <div className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" key={game.id}>
                                    <div className="card-body">
                                        <h3 className="card-title text-white font-orbitron text-lg">{game.game_name}</h3>
                                        <div className="card-actions justify-end mt-2">
                                            <span className="badge badge-primary badge-sm font-rajdhani">⭐ {t('favorite')}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <h2 className="card-title text-primary font-orbitron tracking-wide">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {t('personalInfo')}
                            </h2>
                            <div className="space-y-2">
                                <p className="flex items-center gap-2">
                                    <span className="font-semibold font-rajdhani text-white">{t('name')}:</span>
                                    <span className="badge badge-ghost text-white">{profile.first_name} {profile.last_name}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="font-semibold font-rajdhani text-white">{t('username')}:</span>
                                    <span className="badge badge-primary badge-outline">{profile.username}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="font-semibold font-rajdhani text-white">{t('email')}:</span>
                                    <span className="text-sm text-white/70 font-rajdhani">{user.email}</span>
                                </p>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <Link className="btn btn-primary btn-sm font-rajdhani" to={`/profile/${profile.username}/settings`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {t('settings')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex-grow flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>

           
        )}
        </main>
    );
}
