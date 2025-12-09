import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HelpPage() {
    const { t } = useTranslation();

    const faqs = [
        {
            question: "How do I create an account?",
            answer: "Click on the profile icon in the top right corner and select 'Register'. Fill in your details including name, username, email and password to create your account."
        },
        {
            question: "How can I search for games?",
            answer: "Use the search bar in the navigation to search for games by title. You can also browse games by genre using the sidebar on the homepage."
        },
        {
            question: "How do I add a game to favorites?",
            answer: "On any game detail page, click the heart icon to add or remove the game from your favorites. You must be logged in to use this feature."
        },
        {
            question: "Can I change my language preference?",
            answer: "Yes! Click on the language selector (flag icon) in the navigation bar or footer and choose from 9 available languages."
        },
        {
            question: "How do I write a review?",
            answer: "Navigate to a game's detail page and scroll down to the review section. You can write a review and optionally rate the game with 1-5 stars."
        },
        {
            question: "Can I delete my reviews?",
            answer: "You can delete reviews that don't have star ratings. Reviews with ratings are permanent to maintain rating integrity."
        },
        {
            question: "How do I change my profile picture?",
            answer: "Go to your profile, click 'Settings', then scroll to the 'Change Avatar' section. Upload a new image and click 'Upload Avatar'."
        },
        {
            question: "Is my data secure?",
            answer: "Yes! We use Supabase for authentication and data storage, which provides enterprise-grade security and encryption."
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 tracking-wide neon-glow">
                        🆘 Help Center
                    </h1>
                    <p className="text-xl text-white/70 font-rajdhani">
                        Find answers to common questions and learn how to use REACTOR
                    </p>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <Link to="/contact" className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                        <div className="card-body items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <h3 className="font-orbitron font-bold text-white">Contact Us</h3>
                            <p className="text-sm text-white/60 font-rajdhani">Get in touch with support</p>
                        </div>
                    </Link>
                    
                    <Link to="/about" className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                        <div className="card-body items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="font-orbitron font-bold text-white">About REACTOR</h3>
                            <p className="text-sm text-white/60 font-rajdhani">Learn more about us</p>
                        </div>
                    </Link>

                    <Link to="/" className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                        <div className="card-body items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <h3 className="font-orbitron font-bold text-white">Back to Home</h3>
                            <p className="text-sm text-white/60 font-rajdhani">Browse games</p>
                        </div>
                    </Link>
                </div>

                {/* FAQ Section */}
                <div className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-orbitron font-bold text-primary mb-6 tracking-wide">
                            📚 Frequently Asked Questions
                        </h2>
                        
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="collapse collapse-plus bg-black/40 border border-white/10">
                                    <input type="radio" name="faq-accordion" />
                                    <div className="collapse-title text-lg font-rajdhani font-semibold text-white">
                                        {faq.question}
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-white/80 font-rajdhani leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Help */}
                <div className="mt-12 text-center">
                    <p className="text-white/60 font-rajdhani mb-4">
                        Can't find what you're looking for?
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-lg font-rajdhani">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Support
                    </Link>
                </div>
            </div>
        </main>
    );
}
