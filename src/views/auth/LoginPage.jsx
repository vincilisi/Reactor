import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { UserContext } from "../../context/UserContext.jsx";
export default function LoginPage() {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { login } = useContext(UserContext);
    
    const navigate = useNavigate();

    const onSubmit = async (user_data) => {
        await login({
                email: user_data.email,
                password: user_data.password,
            });
        navigate("/");
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-base-300 to-base-100 flex justify-center items-center py-12">
            <form className="card bg-base-100 shadow-2xl w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-orbitron font-bold text-center mb-6 text-primary tracking-wide">{t('welcomeBack')}</h2>
                <input
                    type="email"
                    placeholder={t('email')}
                    className="input input-bordered w-full mb-2"
                    {...register("email", { required: t('thisFieldRequired') })}
                />
                {errors.email && (
                    <p role="alert" className="text-red-500 text-sm mb-4">
                        {errors.email.message}
                    </p>
                )}
                
                <input
                    type="password"
                    placeholder={t('password')}
                    className="input input-bordered w-full mb-2"
                    {...register("password", { required: t('thisFieldRequired') })}
                />
                {errors.password && (
                    <p role="alert" className="text-red-500 text-sm mb-4">
                        {errors.password.message}
                    </p>
                )}

                <button type="submit" className="btn btn-primary w-full mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    {t('signIn')}
                </button>
                <p className="text-center text-sm mt-4">
                    {t('dontHave')} <a href="/auth/register" className="link link-primary">{t('registerHere')}</a>
                </p>
                </div>
            </form>
        </main>
    );
}
