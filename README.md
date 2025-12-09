# 🎮 REACTOR - Marketplace di Videogiochi

Un marketplace di videogiochi moderno e multilingue costruito con React, con scoperta di giochi, recensioni utenti, valutazioni e preferiti personalizzati. Realizzato con una straordinaria UI a tema gaming con gradienti viola/rosa/blu ed estetica cyberpunk.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)
![i18next](https://img.shields.io/badge/i18next-24.1.0-26A69A?logo=i18next)

## ✨ Caratteristiche

### 🌍 Internazionalizzazione (i18n)
- **Supporto per 9 Lingue**: Inglese, Italiano, Spagnolo, Francese, Tedesco, Portoghese, Russo, Giapponese, Cinese
- Cambio lingua dinamico con preferenze utente persistenti
- Selettore lingua personalizzato con bandiere
- UI completamente tradotta su tutte le pagine e componenti

### 🎮 Funzionalità Giochi
- **Scoperta Giochi**: Esplora migliaia di giochi tramite RAWG API
- **Ricerca**: Funzionalità di ricerca veloce con risultati in tempo reale
- **Filtro per Genere**: Esplora giochi per categorie di genere
- **Dettagli Gioco**: Informazioni complete incluse valutazioni, date di uscita, descrizioni e generi
- **Sistema Preferiti**: Salva i tuoi giochi preferiti nel profilo con toggle a cuore

### ⭐ Recensioni e Valutazioni
- **Valutazioni a Stelle**: Valuta i giochi da 1 a 5 stelle
- **Recensioni Scritte**: Condividi pensieri dettagliati sui giochi
- **Recensioni Community**: Visualizza tutte le recensioni utenti con valutazioni
- **Cancellazione Intelligente**: Le recensioni con valutazioni non possono essere eliminate (integrità dati)
- **Visualizzazione Username**: Attribuzione autore per tutte le recensioni

### 👤 Profilo Utente e Autenticazione
- **Autenticazione Supabase**: Registrazione e login sicuri con email/password
- **Profili Utente**: Profili personalizzabili con caricamento avatar
- **Impostazioni Profilo**: Aggiorna nome, username, email individualmente
- **Gestione Avatar**: Carica e gestisci immagini profilo salvate in Supabase Storage
- **Collezione Giochi Preferiti**: Galleria personale di giochi preferiti

### 🎨 UI/UX Moderna
- **Tema Gaming**: Sfondi con gradienti Viola/Indaco/Blu
- **Estetica Cyberpunk**: Effetti neon, card trasparenti, design futuristico
- **Font Personalizzati**: 
  - Orbitron (intestazioni)
  - Rajdhani (testo corpo)
  - Space Grotesk (accenti)
- **Design Responsive**: Approccio mobile-first con Tailwind CSS
- **Componenti DaisyUI**: Componenti UI pre-costruiti e personalizzabili
- **Glass Morphism**: Card trasparenti con effetti backdrop blur

## 🛠️ Stack Tecnologico

### Frontend
- **React 18.3.1**: Libreria UI con hooks e context API
- **Vite 6.0.1**: Build tool ultra-veloce con HMR
- **React Router DOM 7.1.0**: Routing lato client con loaders
- **Tailwind CSS 3.4.17**: Framework CSS utility-first
- **DaisyUI 4.12.23**: Libreria componenti Tailwind

### Backend e Database
- **Supabase**: 
  - Database PostgreSQL
  - Sistema di autenticazione
  - Storage per avatar
  - Capacità real-time
- **RAWG API**: Provider dati giochi

### Internazionalizzazione
- **i18next 24.1.0**: Framework i18n
- **react-i18next 15.1.3**: Binding React per i18next
- **i18next-browser-languagedetector 8.0.2**: Rilevamento automatico lingua

### Gestione Stato
- **React Context API**: Stato globale utente
- **React Hook Form**: Gestione e validazione form
- **Local Storage**: Persistenza preferenze lingua

### Icone e Asset
- **React Icons**: Librerie icone fa, fa6
- **Asset Personalizzati**: Immagini a tema gaming (placeholder avatar pokeball)

## 📁 Struttura Progetto

```
Reactor/
├── src/
│   ├── Components/
│   │   ├── DetailComponents/
│   │   │   ├── BodySection.jsx      # Recensioni, valutazioni, preferiti
│   │   │   └── Header.jsx           # Header dettaglio gioco
│   │   ├── HomeComponents/
│   │   │   ├── GameCard.jsx         # Card anteprima gioco
│   │   │   └── Gamelist.jsx         # Layout griglia giochi
│   │   ├── LayoutComponents/
│   │   │   ├── Footer.jsx           # Footer sito con link
│   │   │   ├── Navbar.jsx           # Navigazione con ricerca
│   │   │   └── Sidebar.jsx          # Navigazione generi
│   │   ├── layout/
│   │   │   ├── AuthenticationLayout.jsx
│   │   │   └── Layout.jsx           # Wrapper layout principale
│   │   └── LanguageSelector.jsx     # Dropdown lingua
│   ├── views/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   └── ProfileSetingsPage.jsx
│   │   ├── DetailPage.jsx           # Dettagli gioco
│   │   ├── GenrePage.jsx            # Filtro genere
│   │   ├── Homepage.jsx             # Landing page
│   │   └── SearchPage.jsx           # Risultati ricerca
│   ├── context/
│   │   └── UserContext.jsx          # Stato globale utente
│   ├── database/
│   │   └── supabase.js              # Client Supabase
│   ├── i18n/
│   │   └── config.js                # Configurazione i18n e traduzioni
│   ├── router/
│   │   ├── loaders.jsx              # Loaders dati route
│   │   ├── router.jsx               # Configurazione router
│   │   └── routes.js                # Costanti route
│   ├── App.jsx                      # Componente root
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Stili globali
├── public/
├── .env                             # Variabili ambiente
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🗄️ Schema Database

### Tabelle

#### `profiles`
- `id` (uuid, PK) - Riferimento a auth.users
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
- `rating` (integer, nullable) - Valutazione stelle 1-5

#### `ratings`
- `id` (bigint, PK)
- `profile_id` (uuid, FK → profiles.id)
- `game_id` (bigint)
- `game_name` (text)
- `rating` (integer) - Valutazione stelle 1-5

### Storage Buckets
- `avatars` - Immagini profilo utente

## 🚀 Come Iniziare

### Prerequisiti
- Node.js 20+ e npm
- Account Supabase
- Chiave API RAWG

### Installazione

1. **Clona il repository**
```bash
git clone https://github.com/vincilisi/Reactor.git
cd Reactor
```

2. **Installa le dipendenze**
```bash
npm install
```

3. **Configura le variabili d'ambiente**

Crea un file `.env`:
```env
VITE_SUPABASE_URL=tuo_url_supabase
VITE_SUPABASE_ANON_KEY=tua_chiave_anon_supabase
VITE_API_KEY=tua_chiave_api_rawg
```

4. **Configura Supabase**

Esegui questi comandi SQL nell'SQL Editor di Supabase:

```sql
-- Abilita RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE favourites ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

-- Policy profili
CREATE POLICY "I profili pubblici sono visibili a tutti"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Gli utenti possono aggiornare il proprio profilo"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Policy preferiti
CREATE POLICY "Gli utenti possono vedere i propri preferiti"
  ON favourites FOR SELECT
  USING (auth.uid() = profile_id);

CREATE POLICY "Gli utenti possono inserire i propri preferiti"
  ON favourites FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Gli utenti possono eliminare i propri preferiti"
  ON favourites FOR DELETE
  USING (auth.uid() = profile_id);

-- Policy recensioni
CREATE POLICY "Le recensioni sono visibili a tutti"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Gli utenti possono inserire le proprie recensioni"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Gli utenti possono eliminare le proprie recensioni senza valutazione"
  ON reviews FOR DELETE
  USING (auth.uid() = profile_id AND rating IS NULL);

-- Policy valutazioni
CREATE POLICY "Le valutazioni sono visibili a tutti"
  ON ratings FOR SELECT
  USING (true);

CREATE POLICY "Gli utenti possono inserire le proprie valutazioni"
  ON ratings FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Gli utenti possono aggiornare le proprie valutazioni"
  ON ratings FOR UPDATE
  USING (auth.uid() = profile_id);
```

5. **Crea Storage Bucket**
- Vai su Supabase Storage
- Crea un bucket chiamato `avatars`
- Rendilo pubblico
- Aggiungi policy per uploads

6. **Avvia il server di sviluppo**
```bash
npm run dev
```

Visita `http://localhost:5173`

## 📦 Build per Produzione

```bash
npm run build
npm run preview
```

## 🌐 Lingue Supportate

| Lingua | Codice | Bandiera |
|--------|--------|----------|
| English | en | 🇬🇧 |
| Italiano | it | 🇮🇹 |
| Español | es | 🇪🇸 |
| Français | fr | 🇫🇷 |
| Deutsch | de | 🇩🇪 |
| Português | pt | 🇵🇹 |
| Русский | ru | 🇷🇺 |
| 日本語 | ja | 🇯🇵 |
| 中文 | zh | 🇨🇳 |

## 🎯 Dettagli Implementazione Chiave

### Architettura i18n
- Traduzioni centralizzate in `src/i18n/config.js`
- Rilevamento lingua browser alla prima visita
- Preferenza utente salvata in localStorage
- Sincronizzata con profilo utente Supabase
- Ricaricamento completo pagina al cambio lingua per consistenza

### Sistema Recensioni
- Recensioni e valutazioni combinate in singola tabella
- Valutazione stelle opzionale (1-5)
- Recensioni con valutazioni protette da eliminazione
- Username visualizzato da metadati utente

### Sistema Preferiti
- Toggle icona cuore per feedback istantaneo
- Memorizza sia game_id che game_name
- Sincronizzazione real-time con Supabase
- Visualizzato nel profilo utente

### Flusso Autenticazione
- Registrazione email/password
- Profilo auto-creato alla registrazione
- Metadati utente salvati in auth.users
- Dati profilo in tabella profiles separata

### Sistema Avatar
- Upload su Supabase Storage
- Rilevamento automatico estensione file
- Anteprima prima dell'upload
- Fallback a placeholder pokeball

## 🤝 Contribuire

I contributi sono benvenuti! Sentiti libero di inviare una Pull Request.

## 📄 Licenza

Questo progetto è open source e disponibile sotto Licenza MIT.

## 👨‍💻 Autore

**vincilisi**
- GitHub: [@vincilisi](https://github.com/vincilisi)

## 🙏 Ringraziamenti

- [RAWG API](https://rawg.io/apidocs) per i dati dei giochi
- [Supabase](https://supabase.com/) per l'infrastruttura backend
- [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) per lo styling
- [i18next](https://www.i18next.com/) per l'internazionalizzazione

---

Fatto con 💜 da vincilisi
---------------------------------------------------------------------------------------------------------


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
