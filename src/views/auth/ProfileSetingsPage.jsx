import { useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { UserContext } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import supabase from "../../database/supabase";

export default function ProfileSettingsPage(){
   const { t } = useTranslation();
   const [file, setFile] = useState();
   const [preview, setPreview] = useState();
   const { profile, getUser, updateProfile } = useContext(UserContext);

   const {
        register,
        handleSubmit,
        formState: {errors},
   } = useForm();

   const navigate = useNavigate();

   const handleChange = (e) => {
    setFile(() => e.target.files[0]);
   };

   useEffect(() => {
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPreview(() => imageUrl);
    }
   }, [file]);

   const handleAvatarSubmit = async (e) => {
    e.preventDefault();
    const fileExt = file.name.split(".").pop();
    const fileName = `${profile.id}${Math.random()}.${fileExt}`;
    await supabase.storage.from("avatars").upload(fileName, file);
    await supabase
        .from("profiles")
        .upsert({id: profile.id, avatar_url: fileName})
        .select();
    await getUser();
   };

   const onSubmit = async (data) => {
    // Filter only changed fields
    const updates = {};
    if (data.first_name && data.first_name !== profile.first_name) updates.first_name = data.first_name;
    if (data.last_name && data.last_name !== profile.last_name) updates.last_name = data.last_name;
    if (data.username && data.username !== profile.username) updates.username = data.username;
    if (data.email && data.email !== profile.email) updates.email = data.email;
    
    if (Object.keys(updates).length > 0) {
        await updateProfile(updates);
    }
    navigate(`/profile/${data.username || profile.username}`);
   };

    return(
        <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 flex flex-col justify-center items-center py-10 gap-6">
            <form
            className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl w-full md:w-2/3 lg:w-1/2"
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className="card-body">
                    <h2 className="card-title text-3xl font-orbitron font-bold text-primary mb-6 flex items-center gap-2 tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {t('profileSettings')}
                    </h2>

                <input
                type="text"
                placeholder={t('firstName')}
                className="input input-bordered bg-black/50 border-white/20 text-white font-rajdhani mb-2 w-full focus:border-primary placeholder:text-white/40"
                {...register("first_name")}
                />
                {errors.first_name && (
                    <p className="text-red-500 font-rajdhani mb-4" role="alert">
                        {errors.first_name.message}
                    </p>
                )}

                <input
                type="text"
                placeholder={t('lastName')}
                className="input input-bordered bg-black/50 border-white/20 text-white font-rajdhani mb-2 w-full focus:border-primary placeholder:text-white/40"
                {...register("last_name")}
                />
                {errors.last_name && (
                    <p className="text-red-500 font-rajdhani mb-4" role="alert">
                        {errors.last_name.message}
                    </p>
                )}

                <input
                type="text"
                placeholder={t('username')}
                className="input input-bordered bg-black/50 border-white/20 text-white font-rajdhani mb-2 w-full focus:border-primary placeholder:text-white/40"
                {...register("username")}
                />
                {errors.username && (
                    <p className="text-red-500 font-rajdhani mb-4" role="alert">
                        {errors.username.message}
                    </p>
                )}

                <input
                type="email"
                placeholder={t('email')}
                className="input input-bordered bg-black/50 border-white/20 text-white font-rajdhani mb-2 w-full focus:border-primary placeholder:text-white/40"
                {...register("email", {
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('invalidEmail')
                    }
                })}
                />
                {errors.email && (
                    <p className="text-red-500 font-rajdhani mb-4" role="alert">
                        {errors.email.message}
                    </p>
                )}

                    <button className="btn btn-primary w-full mt-4 font-rajdhani text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t('saveChanges')}
                    </button>
                </div>
            </form>

            <div className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl w-full md:w-2/3 lg:w-1/2">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-orbitron font-bold text-primary mb-6 flex items-center gap-2 tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {t('changeAvatar')}
                    </h2>
                <form onSubmit={handleAvatarSubmit}>
                    <input
                    type="file"
                    className="file-input file-input-bordered bg-black/50 border-white/20 text-white font-rajdhani w-full mb-5 focus:border-primary"
                    onChange={handleChange}
                    /> 
                    {preview && (
                        <img src={preview} alt="Preview" className="w-32 h-32 rounded-full mx-auto mb-5 ring ring-primary ring-offset-2" />
                    )}
                    <button className="btn btn-primary w-full font-rajdhani text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        {t('uploadAvatar')}
                    </button>
                </form>
                </div>
            </div>
        </main>
    );
}