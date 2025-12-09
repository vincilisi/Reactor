import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "../Components/DetailComponents/Header"
import BodySection from "../Components/DetailComponents/BodySection"
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function DetailPage(){
    const game = useLoaderData();
    const navigate = useNavigate();
    const {profile} =useContext(UserContext)


return (
    <>
    <main 
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${game.background_image})`}}
        className="min-h-screen bg-center bg-cover bg-fixed"
    >
        <FaCircleArrowLeft 
            className="text-4xl fixed bottom-6 text-primary hover:text-pink-400 left-6 cursor-pointer transition-colors z-50 drop-shadow-lg" 
            onClick={() => navigate(-1)}
        />
        <Header game={game}/>
        {profile && <BodySection game={game} profile_id={profile.id} username={profile.username} />}
    </main>
    </>
);
}