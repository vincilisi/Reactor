import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { FaSearch } from "react-icons/fa";
import { UserContext } from "../../context/UserContext.jsx";
import supabase from "../../database/supabase";
import pokeball from "../../assets/pokeball.png";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const [slug, setSlug] = useState("");
    const [avatarUrl, setAvatarUrl] = useState();
    const { t } = useTranslation();

    const handleChange = (e) => {
        setSlug(e.target.value);
    }

    const navigate = useNavigate();

    const {user, profile, signOut} = useContext(UserContext);
    
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

    useEffect(() => {
        download_avatar();
    }, [profile]);
    
    const handleSearch = () => {
        if (slug) {
            navigate(`/search/${slug}`);
        }
    };

    return (
        <div className="navbar bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-xl sticky top-0 z-50">
            <div className="flex-1">
                <Link className="btn btn-ghost text-2xl font-orbitron font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider" to={routes.home}>
                    🎮 REACTOR
                </Link>
            </div>
            <div className="flex gap-2 items-center">
                <LanguageSelector />
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder={t('search')}
                            className="input input-bordered bg-base-200/50 backdrop-blur-sm focus:bg-base-100 w-32 md:w-64"
                            value={slug}
                            onChange={handleChange}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <button className="btn btn-primary" onClick={handleSearch}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                                alt="User avatar"
                                src={user ? (avatarUrl ?? pokeball) : pokeball} 
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl border border-primary/20">
                        {user ? (
                            <>
                                <li className="menu-title">
                                    <span className="text-primary">@{user.user_metadata?.username || 'User'}</span>
                                </li>
                                <li>
                                    <Link to={`/profile/${user.user_metadata?.username || user.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        {t('myProfile')}
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={signOut} className="text-error">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        {t('logout')}
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to={routes.register}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                        {t('register')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.login}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                        {t('login')}
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}