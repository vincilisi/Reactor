import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Homepage from "../views/Homepage";
import routes from "./routes";
import { getAllGamesLoader, getAllGenres, getSearchedGames, getFilteredGensreGames, getGameDetails } from "./loaders";
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";
import AuthenticationLayout from "../Components/layout/AuthenticationLayout";
import RegisterPage from "../views/auth/RegisterPage";
import LoginPage from "../views/auth/LoginPage";
import ProfilePage from "../views/auth/ProfilePage";
import ProfileSettingsPage from "../views/auth/ProfileSetingsPage";
import DetailPage from "../views/DetailPage";
import HelpPage from "../views/HelpPage";
import ContactPage from "../views/ContactPage";
import AboutPage from "../views/AboutPage";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
        children: [
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader,
            },
            {
                path: routes.search,
                Component: SearchPage,
                loader: getSearchedGames,
            },
            {
                path: routes.genre,
                Component: GenrePage,
                loader: getFilteredGensreGames,
            },
            {
                path: "profile/:username",
                Component: ProfilePage
            },
            {
                path: "profile/:username/settings",
                Component: ProfileSettingsPage
            },
            {
                path: routes.detail,
                Component: DetailPage,
                loader: getGameDetails
            },
            {
                path: "/help",
                Component: HelpPage
            },
            {
                path: "/contact",
                Component: ContactPage
            },
            {
                path: "/about",
                Component: AboutPage
            }
        ],
    },
    {
        path: '/auth',
        Component: AuthenticationLayout,
        children: [
            {
                path: 'register',
                Component: RegisterPage,
            },
            {
                path: 'login',
                Component: LoginPage,
            },
        ]
    },
]);

export default router;