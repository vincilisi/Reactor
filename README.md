# 🎮 REACTOR - Gaming Marketplace

A modern, multilingual gaming marketplace built with React, featuring game discovery, user reviews, ratings, and personalized favorites. Built with a stunning gaming-themed UI with purple/pink/blue gradients and cyberpunk aesthetics.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)
![i18next](https://img.shields.io/badge/i18next-24.1.0-26A69A?logo=i18next)

## ✨ Features

### 🌍 Internationalization (i18n)
- **9 Languages Support**: English, Italian, Spanish, French, German, Portuguese, Russian, Japanese, Chinese
- Dynamic language switching with persistent user preferences
- Custom language selector with country flags
- Fully translated UI across all pages and components

### 🎮 Game Features
- **Game Discovery**: Browse thousands of games via RAWG API
- **Search**: Fast search functionality with real-time results
- **Genre Filtering**: Explore games by genre categories
- **Game Details**: Comprehensive information including ratings, release dates, descriptions, and genres
- **Favorites System**: Save favorite games to your profile with heart toggle

### ⭐ Reviews & Ratings
- **Star Ratings**: Rate games from 1-5 stars
- **Written Reviews**: Share detailed thoughts about games
- **Community Reviews**: View all user reviews with ratings
- **Smart Delete**: Reviews with ratings cannot be deleted (data integrity)
- **Username Display**: Author attribution for all reviews

### 👤 User Profile & Authentication
- **Supabase Authentication**: Secure email/password registration and login
- **User Profiles**: Customizable profiles with avatar upload
- **Profile Settings**: Update name, username, email individually
- **Avatar Management**: Upload and manage profile pictures stored in Supabase Storage
- **Favorite Games Collection**: Personal gallery of favorite games

### 🎨 Modern UI/UX
- **Gaming Theme**: Purple/Indigo/Blue gradient backgrounds
- **Cyberpunk Aesthetics**: Neon glows, transparent cards, futuristic design
- **Custom Fonts**: 
  - Orbitron (headings)
  - Rajdhani (body text)
  - Space Grotesk (accents)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **DaisyUI Components**: Pre-built, customizable UI components
- **Glass Morphism**: Transparent cards with backdrop blur effects

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1**: UI library with hooks and context API
- **Vite 6.0.1**: Lightning-fast build tool with HMR
- **React Router DOM 7.1.0**: Client-side routing with loaders
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **DaisyUI 4.12.23**: Tailwind component library

### Backend & Database
- **Supabase**: 
  - PostgreSQL database
  - Authentication system
  - Storage for avatars
  - Real-time capabilities
- **RAWG API**: Game data provider

### Internationalization
- **i18next 24.1.0**: i18n framework
- **react-i18next 15.1.3**: React bindings for i18next
- **i18next-browser-languagedetector 8.0.2**: Automatic language detection

### State Management
- **React Context API**: Global user state
- **React Hook Form**: Form handling and validation
- **Local Storage**: Language preferences persistence

### Icons & Assets
- **React Icons**: fa, fa6 icon libraries
- **Custom Assets**: Gaming-themed images (pokeball avatar placeholder)

## 📁 Project Structure

```
Reactor/
├── src/
│   ├── Components/
│   │   ├── DetailComponents/
│   │   │   ├── BodySection.jsx      # Reviews, ratings, favorites
│   │   │   └── Header.jsx           # Game detail header
│   │   ├── HomeComponents/
│   │   │   ├── GameCard.jsx         # Game preview card
│   │   │   └── Gamelist.jsx         # Game grid layout
│   │   ├── LayoutComponents/
│   │   │   ├── Footer.jsx           # Site footer with links
│   │   │   ├── Navbar.jsx           # Navigation with search
│   │   │   └── Sidebar.jsx          # Genre navigation
│   │   ├── layout/
│   │   │   ├── AuthenticationLayout.jsx
│   │   │   └── Layout.jsx           # Main layout wrapper
│   │   └── LanguageSelector.jsx     # Language dropdown
│   ├── views/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   └── ProfileSetingsPage.jsx
│   │   ├── DetailPage.jsx           # Game details
│   │   ├── GenrePage.jsx            # Genre filtering
│   │   ├── Homepage.jsx             # Landing page
│   │   └── SearchPage.jsx           # Search results
│   ├── context/
│   │   └── UserContext.jsx          # Global user state
│   ├── database/
│   │   └── supabase.js              # Supabase client
│   ├── i18n/
│   │   └── config.js                # i18n configuration & translations
│   ├── router/
│   │   ├── loaders.jsx              # Route data loaders
│   │   ├── router.jsx               # Router configuration
│   │   └── routes.js                # Route constants
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── public/
├── .env                             # Environment variables
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🗄️ Database Schema

### Tables

#### `profiles`
- `id` (uuid, PK) - References auth.users
- `first_name` (text)
- `last_name` (text)
- `username` (text, unique)
- `avatar_url` (text)
- `language` (text, default: 'en')

#### `favourites`
- `id` (bigint, PK)
- `profile_id` (uuid, FK → profiles.id)
- `game_id` (bigint)
- `game_name` (text)

#### `reviews`
- `id` (bigint, PK)
- `profile_id` (uuid, FK → profiles.id)
- `game_name` (text)
- `description` (text)
- `username` (text)
- `rating` (integer, nullable) - Star rating 1-5

#### `ratings`
- `id` (bigint, PK)
- `profile_id` (uuid, FK → profiles.id)
- `game_id` (bigint)
- `game_name` (text)
- `rating` (integer) - Star rating 1-5

### Storage Buckets
- `avatars` - User profile pictures

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm
- Supabase account
- RAWG API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vincilisi/Reactor.git
cd Reactor
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_KEY=your_rawg_api_key
```

4. **Set up Supabase**

Run these SQL commands in Supabase SQL Editor:

```sql
-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE favourites ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Favourites policies
CREATE POLICY "Users can view own favourites"
  ON favourites FOR SELECT
  USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert own favourites"
  ON favourites FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own favourites"
  ON favourites FOR DELETE
  USING (auth.uid() = profile_id);

-- Reviews policies
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can delete own reviews without ratings"
  ON reviews FOR DELETE
  USING (auth.uid() = profile_id AND rating IS NULL);

-- Ratings policies
CREATE POLICY "Ratings are viewable by everyone"
  ON ratings FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own ratings"
  ON ratings FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update own ratings"
  ON ratings FOR UPDATE
  USING (auth.uid() = profile_id);
```

5. **Create Storage Bucket**
- Go to Supabase Storage
- Create bucket named `avatars`
- Make it public
- Add policy for uploads

6. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Supported Languages

| Language | Code | Flag |
|----------|------|------|
| English | en | 🇬🇧 |
| Italiano | it | 🇮🇹 |
| Español | es | 🇪🇸 |
| Français | fr | 🇫🇷 |
| Deutsch | de | 🇩🇪 |
| Português | pt | 🇵🇹 |
| Русский | ru | 🇷🇺 |
| 日本語 | ja | 🇯🇵 |
| 中文 | zh | 🇨🇳 |

## 🎯 Key Implementation Details

### i18n Architecture
- Centralized translations in `src/i18n/config.js`
- Browser language detection on first visit
- User preference stored in localStorage
- Synced with Supabase user profile
- Full page reload on language change for consistency

### Review System
- Combined reviews and ratings in single table
- Optional star rating (1-5)
- Reviews with ratings are protected from deletion
- Username displayed from user metadata

### Favorites System
- Toggle heart icon for instant feedback
- Stores both game_id and game_name
- Real-time sync with Supabase
- Displayed in user profile

### Authentication Flow
- Email/password registration
- Profile auto-created on signup
- User metadata stored in auth.users
- Profile data in separate profiles table

### Avatar System
- Upload to Supabase Storage
- Automatic file extension detection
- Preview before upload
- Fallback to pokeball placeholder

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**vincilisi**
- GitHub: [@vincilisi](https://github.com/vincilisi)

## 🙏 Acknowledgments

- [RAWG API](https://rawg.io/apidocs) for game data
- [Supabase](https://supabase.com/) for backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) for styling
- [i18next](https://www.i18next.com/) for internationalization

---

Made with 💜 by vincilisi
