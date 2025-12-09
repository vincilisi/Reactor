import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const { t } = useTranslation();

    const features = [
        {
            icon: "🌍",
            title: "Multilingual",
            description: "Support for 9 languages making gaming accessible worldwide"
        },
        {
            icon: "⭐",
            title: "Reviews & Ratings",
            description: "Community-driven game reviews with star ratings"
        },
        {
            icon: "❤️",
            title: "Favorites",
            description: "Save and manage your favorite games in one place"
        },
        {
            icon: "🔒",
            title: "Secure",
            description: "Enterprise-grade security with Supabase authentication"
        },
        {
            icon: "🎨",
            title: "Modern Design",
            description: "Beautiful cyberpunk-themed UI with smooth animations"
        },
        {
            icon: "⚡",
            title: "Fast & Responsive",
            description: "Built with Vite and React for optimal performance"
        }
    ];

    const techStack = [
        { name: "React", color: "text-blue-400" },
        { name: "Vite", color: "text-purple-400" },
        { name: "Tailwind CSS", color: "text-cyan-400" },
        { name: "Supabase", color: "text-green-400" },
        { name: "i18next", color: "text-pink-400" },
        { name: "React Router", color: "text-red-400" }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 tracking-wide neon-glow">
                        About REACTOR
                    </h1>
                    <p className="text-xl text-white/70 font-rajdhani max-w-3xl mx-auto">
                        Your ultimate destination for discovering, reviewing, and tracking your favorite video games
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl mb-12">
                    <div className="card-body">
                        <h2 className="text-3xl font-orbitron font-bold text-primary mb-4 tracking-wide">
                            🚀 Our Mission
                        </h2>
                        <p className="text-lg text-white/80 font-rajdhani leading-relaxed mb-4">
                            REACTOR was created to provide gamers worldwide with a modern, intuitive platform to discover new games, 
                            share their experiences through reviews, and connect with a global gaming community.
                        </p>
                        <p className="text-lg text-white/80 font-rajdhani leading-relaxed">
                            We believe that gaming transcends borders and languages. That's why REACTOR supports 9 languages, 
                            making it accessible to millions of gamers around the world. Whether you're looking for your next adventure, 
                            sharing your thoughts on the latest release, or building your personal game collection, REACTOR has you covered.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-12">
                    <h2 className="text-3xl font-orbitron font-bold text-center text-white mb-8 tracking-wide">
                        ✨ Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-3">{feature.icon}</div>
                                    <h3 className="card-title font-orbitron text-primary">{feature.title}</h3>
                                    <p className="text-white/70 font-rajdhani">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="card bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl mb-12">
                    <div className="card-body">
                        <h2 className="text-3xl font-orbitron font-bold text-primary mb-6 tracking-wide">
                            🛠️ Built With
                        </h2>
                        <p className="text-lg text-white/80 font-rajdhani leading-relaxed mb-6">
                            REACTOR is built using modern, cutting-edge technologies to ensure the best performance, 
                            security, and user experience:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((tech, index) => (
                                <div key={index} className={`badge badge-lg ${tech.color} bg-black/40 border-white/20 font-rajdhani font-semibold py-4 px-4`}>
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Developer Section */}
                <div className="card bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-primary/30 shadow-2xl mb-12">
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-orbitron font-bold text-primary mb-4 tracking-wide">
                            👨‍💻 Developed By
                        </h2>
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <div className="avatar placeholder">
                                <div className="bg-primary text-neutral-content rounded-full w-20">
                                    <span className="text-3xl font-orbitron">VL</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Vincenzo Lisitano</h3>
                        <p className="text-white/70 font-rajdhani mb-6 max-w-2xl mx-auto">
                            Full-stack developer passionate about creating modern, user-friendly web applications. 
                            REACTOR combines my love for gaming with expertise in React, modern UI/UX design, and cloud technologies.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a 
                                href="https://github.com/vincilisi" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg font-rajdhani"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current mr-2">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/vincenzo-lisitano-33727a197/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-primary btn-lg font-rajdhani"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current mr-2">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-orbitron font-bold text-white mb-4 tracking-wide">
                        Ready to Start Gaming?
                    </h2>
                    <p className="text-lg text-white/70 font-rajdhani mb-6">
                        Join thousands of gamers discovering their next favorite game
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link to="/" className="btn btn-primary btn-lg font-rajdhani">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Browse Games
                        </Link>
                        <Link to="/contact" className="btn btn-outline btn-primary btn-lg font-rajdhani">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
