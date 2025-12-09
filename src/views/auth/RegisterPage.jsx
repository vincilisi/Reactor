import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { UserContext } from "../../context/UserContext.jsx";
import supabase from "../../database/supabase";

export default function RegisterPage() {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signUp } = useContext(UserContext);

    const navigate = useNavigate();

    const onSubmit = async (user_data) => {
      await signUp({
            email: user_data.email,
            password: user_data.password,
            options: {
                data: {
                    first_name: user_data.first_name,
                    last_name: user_data.last_name,
                    username: user_data.username
                }
            }
        });

        navigate("/");
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-base-300 to-base-100 flex justify-center items-center py-12">
            <form className="card bg-base-100 shadow-2xl w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-orbitron font-bold text-center mb-6 text-primary tracking-wide">{t('registerAccount')}</h2>
                <input
                    type="text"
                    placeholder="last_name"
                    className="input input-bordered w-full mb-4"
                    {...register("last_name", { required: "This field is required" })}
                />
                {errors.last_name && (
                    <p role="alert" className="text-red-500 mb-4">
                        {errors.last_name.message}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="first_name"
                    className="input input-bordered w-full mb-4"
                    {...register("first_name", { required: "This field is required" })}
                />
                {errors.first_name && (
                    <p role="alert" className="text-red-500 mb-4">
                        {errors.first_name.message}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered w-full mb-4"
                    {...register("username", { required: "This field is required" })}
                />
                {errors.username && (
                    <p role="alert" className="text-red-500 mb-4">
                        {errors.username.message}
                    </p>
                )}

                <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered w-full mb-4"
                    {...register("email", { 
                        required: "This field is required",
                        minLength: 6
                    })}
                />
                {errors.email && (
                    <p role="alert" className="text-red-500 mb-4">
                        {errors.email.message}
                    </p>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full mb-4"
                    {...register("password", { 
                        required: "This field is required",
                        minLength: 6
                    })}
                />
                {errors.password && (
                    <p role="alert" className="text-red-500 mb-4">
                        {errors.password.message}
                    </p>
                )}

                <button className="btn btn-primary w-full" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    {t('signUp')}
                </button>
                <p className="text-center text-sm mt-4">
                    {t('alreadyHave')} <a href="/auth/login" className="link link-primary">{t('loginHere')}</a>
                </p>
                </div>
            </form>
        </main>
    );
}