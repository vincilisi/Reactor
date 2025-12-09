import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaTrash, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import supabase from "../../database/supabase";

export default function BodySection({ game, profile_id, username }){
    const { t } = useTranslation();
    const [isFavorite, setIsFavorite] = useState(false);
    const [description, setDescription] = useState();
    const [gameReview, setGameReview] = useState();
    const [checkReview, setCheckReview] = useState();
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewRating, setReviewRating] = useState(0);

    const handle_description = (e) => {
        setDescription(e.target.value);
    };

    const get_favourite = async () => {
        let {data: favourites, error} = await supabase
        .from("favourites")
        .select("*")
        .eq("profile_id", profile_id)
        .eq("game_id", game.id);

        if(favourites && favourites.length > 0) setIsFavorite(true);
    };

    const get_rating = async () => {
        let {data: ratings, error} = await supabase
        .from("ratings")
        .select("*")
        .eq("profile_id", profile_id)
        .eq("game_id", game.id);

        if(ratings && ratings.length > 0) setUserRating(ratings[0].rating);
    };

    useEffect(() => {
        get_favourite();
        get_review();
        get_rating();
    }, [checkReview]);


    const add_game = async () => {
        const {data, error} = await supabase
        .from("favourites")
        .insert([{profile_id, game_id: game.id, game_name: game.name}])
        .select();
        
        if (error) {
            console.error("Error adding to favorites:", error);
        } else {
            setIsFavorite(true);
        }
    };


    const remove_game = async () =>{
        const {error} = await supabase
        .from("favourites")
        .delete()
        .eq("profile_id", profile_id)
        .eq("game_id", game.id);
        
        if (error) {
            console.error("Error removing from favorites:", error);
        } else {
            setIsFavorite(false);
        }
    };

    const add_review = async () => {
        if (!description || description.trim() === "") {
            alert("Please write a review before submitting!");
            return;
        }
        
        const {data, error} = await supabase
        .from("reviews")
        .insert([{profile_id, game_name: game.name, description, username, rating: reviewRating || null}])
        .select();
        
        if (error) {
            console.error("Error adding review:", error);
            console.error("Error details:", JSON.stringify(error, null, 2));
            alert(`Error adding review: ${error.message || 'Unknown error'}`);
        } else {
            console.log("Review added successfully:", data);
            setDescription("");
            setReviewRating(0);
            setCheckReview(!checkReview);
        }
    };

    const get_review = async () => {
        const {data: reviews, error} = await supabase
        .from("reviews")
        .select("*")
        .eq("game_name", game.name);
        
        if (reviews) {
            setGameReview(reviews);
        }
    };

    const delete_review = async (reviewId) => {
        const {error} = await supabase
        .from("reviews")
        .delete()
        .eq("id", reviewId);
        
        if (error) {
            console.error("Error deleting review:", error);
            alert("Error deleting review");
        } else {
            setCheckReview(!checkReview);
        }
    };

    const handleRating = async (rating) => {
        setUserRating(rating);
        
        // Check if user already rated this game
        const {data: existingRating} = await supabase
        .from("ratings")
        .select("*")
        .eq("profile_id", profile_id)
        .eq("game_id", game.id);

        if (existingRating && existingRating.length > 0) {
            // Update existing rating
            const {error} = await supabase
            .from("ratings")
            .update({rating})
            .eq("profile_id", profile_id)
            .eq("game_id", game.id);
            
            if (error) console.error("Error updating rating:", error);
        } else {
            // Insert new rating
            const {error} = await supabase
            .from("ratings")
            .insert([{profile_id, game_id: game.id, game_name: game.name, rating, username}]);
            
            if (error) console.error("Error adding rating:", error);
        }
    };


    return (
        <section className="container mx-auto px-4 pb-16 mt-12">
            <div className="max-w-6xl mx-auto">
                <div className="card bg-black/30 backdrop-blur-sm shadow-2xl border border-white/10">
                    <div className="card-body">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide">
                                Your Review
                            </h2>
                            <button 
                                onClick={isFavorite ? remove_game : add_game}
                                className="btn btn-circle btn-lg bg-black/50 border-white/20 hover:bg-red-500/20 hover:border-red-500 transition-all"
                            >
                                {isFavorite ? (
                                    <FaHeart className="text-red-500 text-2xl"/>
                                ) : (
                                    <FaRegHeart className="text-red-500 text-2xl"/>
                                )}
                            </button>
                        </div>

                        {/* Rating Section */}
                        <div className="mb-6">
                            <h3 className="text-xl font-orbitron font-bold text-white mb-3 tracking-wide">
                                ⭐ Rate Your Review (Optional)
                            </h3>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setReviewRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="btn btn-ghost btn-sm p-1"
                                    >
                                        <FaStar 
                                            className={`text-3xl transition-colors ${
                                                star <= (hoverRating || reviewRating)
                                                ? 'text-yellow-400'
                                                : 'text-gray-600'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            {reviewRating > 0 && (
                                <p className="text-sm text-white/70 font-rajdhani mt-2">
                                    Your rating: {reviewRating}/5 stars
                                </p>
                            )}
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-rajdhani text-lg">{t('shareThoughts')}</span>
                            </label>
                            <textarea 
                                className="textarea textarea-bordered bg-black/50 border-white/20 text-white font-rajdhani text-lg min-h-[150px] focus:border-primary focus:outline-none placeholder:text-white/40" 
                                placeholder={t('typeReview')}
                                value={description}
                                onChange={handle_description}
                            >
                            </textarea>
                            
                            {/* Reviews Section */}
                            {gameReview && gameReview.length > 0 && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-orbitron font-bold text-white mb-4 tracking-wide">
                                        💬 {t('communityReviews')}
                                    </h3>
                                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        {gameReview.map((review, index) => (
                                            <div key={index} className="card bg-black/40 border border-white/10 shadow-lg">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="badge badge-primary badge-sm font-rajdhani">
                                                                @{review.username || 'Anonymous'}
                                                            </span>
                                                            {review.rating && (
                                                                <div className="flex items-center gap-1">
                                                                    {[...Array(review.rating)].map((_, i) => (
                                                                        <FaStar key={i} className="text-yellow-400 text-sm" />
                                                                    ))}
                                                                    <span className="text-xs text-white/70 font-rajdhani ml-1">
                                                                        {review.rating}/5
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        {review.profile_id === profile_id && !review.rating && (
                                                            <button 
                                                                onClick={() => delete_review(review.id)}
                                                                className="btn btn-ghost btn-xs text-error hover:bg-error/20"
                                                            >
                                                                <FaTrash />
                                                            </button>
                                                        )}
                                                    </div>
                                                    <p className="text-white font-rajdhani text-base leading-relaxed">
                                                        {review.description}
                                                    </p>
                                                    {review.profile_id === profile_id && review.rating && (
                                                        <p className="text-xs text-white/50 font-rajdhani mt-2 italic">
                                                            {t('cannotDelete')}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            <div className="mt-4 flex justify-end gap-3">
                                <button className="btn btn-outline btn-primary font-rajdhani">{t('cancel')}</button>
                                <button className="btn btn-primary font-rajdhani" onClick={add_review}>{t('submitReview')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}