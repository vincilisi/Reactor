import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navbar
      search: "Search games...",
      myProfile: "My Profile",
      logout: "Logout",
      login: "Login",
      
      // Footer
      browseGames: "Browse Games",
      helpCenter: "Help Center",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      aboutUs: "About Us",
      contact: "Contact",
      copyright: "All rights reserved.",
      
      // Homepage
      welcomeTitle: "Discover Your Next Gaming Adventure",
      welcomeSubtitle: "Browse thousands of games, leave reviews, and track your favorites",
      featuredGames: "Featured Games",
      gamesCount: "Games",
      
      // Profile
      personalInfo: "Personal Info",
      name: "Name",
      username: "Username",
      email: "Email",
      settings: "Settings",
      favoriteGames: "Favorite Games",
      favorite: "Favorite",
      
      // Settings
      profileSettings: "Profile Settings",
      firstName: "First Name",
      lastName: "Last Name",
      saveChanges: "Save Changes",
      changeAvatar: "Change Avatar",
      uploadAvatar: "Upload Avatar",
      
      // Auth
      register: "Register",
      registerAccount: "Create Account",
      password: "Password",
      confirmPassword: "Confirm Password",
      alreadyHave: "Already have an account?",
      dontHave: "Don't have an account?",
      signIn: "Sign In",
      signUp: "Sign Up",
      welcomeBack: "Welcome Back",
      registerHere: "Register here",
      loginHere: "Login here",
      thisFieldRequired: "This field is required",
      invalidEmail: "Invalid email address",
      
      // Reviews
      yourReview: "Your Review",
      shareThoughts: "Share your thoughts about this game",
      typeReview: "Type your review",
      communityReviews: "Community Reviews",
      cancel: "Cancel",
      submitReview: "Submit Review",
      rateReview: "Rate Your Review (Optional)",
      yourRating: "Your rating",
      stars: "stars",
      cannotDelete: "Reviews with ratings cannot be deleted",
      
      // Detail Page
      aboutGame: "About This Game",
      rating: "Rating",
      outOf: "out of 5.0",
      genres: "Genres",
      released: "Released",
      
      // Search
      searchResults: "Search Results",
      showingResults: "Showing results for",
      gamesFound: "games found",
      noResults: "No games found for",
      
      // Genre
      genreGames: "Games",
      
      // Language
      language: "Language",
      selectLanguage: "Select Language"
    }
  },
  it: {
    translation: {
      search: "Cerca giochi...",
      myProfile: "Il Mio Profilo",
      logout: "Esci",
      login: "Accedi",
      
      browseGames: "Esplora Giochi",
      helpCenter: "Centro Assistenza",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Termini di Servizio",
      aboutUs: "Chi Siamo",
      contact: "Contatti",
      copyright: "Tutti i diritti riservati.",
      
      welcomeTitle: "Scopri la Tua Prossima Avventura Gaming",
      welcomeSubtitle: "Esplora migliaia di giochi, lascia recensioni e traccia i tuoi preferiti",
      featuredGames: "Giochi in Evidenza",
      gamesCount: "Giochi",
      
      personalInfo: "Informazioni Personali",
      name: "Nome",
      username: "Username",
      email: "Email",
      settings: "Impostazioni",
      favoriteGames: "Giochi Preferiti",
      favorite: "Preferito",
      
      profileSettings: "Impostazioni Profilo",
      firstName: "Nome",
      lastName: "Cognome",
      saveChanges: "Salva Modifiche",
      changeAvatar: "Cambia Avatar",
      uploadAvatar: "Carica Avatar",
      
      register: "Registrati",
      registerAccount: "Crea Account",
      password: "Password",
      confirmPassword: "Conferma Password",
      alreadyHave: "Hai già un account?",
      dontHave: "Non hai un account?",
      signIn: "Accedi",
      signUp: "Iscriviti",
      welcomeBack: "Bentornato",
      registerHere: "Registrati qui",
      loginHere: "Accedi qui",
      thisFieldRequired: "Questo campo è obbligatorio",
      invalidEmail: "Indirizzo email non valido",
      
      yourReview: "La Tua Recensione",
      shareThoughts: "Condividi le tue opinioni su questo gioco",
      typeReview: "Scrivi la tua recensione",
      communityReviews: "Recensioni della Community",
      cancel: "Annulla",
      submitReview: "Invia Recensione",
      rateReview: "Valuta la Tua Recensione (Opzionale)",
      yourRating: "La tua valutazione",
      stars: "stelle",
      cannotDelete: "Le recensioni con valutazione non possono essere eliminate",
      
      aboutGame: "Informazioni su Questo Gioco",
      rating: "Valutazione",
      outOf: "su 5.0",
      genres: "Generi",
      released: "Rilasciato",
      
      searchResults: "Risultati di Ricerca",
      showingResults: "Mostrando risultati per",
      gamesFound: "giochi trovati",
      noResults: "Nessun gioco trovato per",
      
      genreGames: "Giochi",
      
      language: "Lingua",
      selectLanguage: "Seleziona Lingua"
    }
  },
  es: {
    translation: {
      search: "Buscar juegos...",
      myProfile: "Mi Perfil",
      logout: "Cerrar Sesión",
      login: "Iniciar Sesión",
      
      browseGames: "Explorar Juegos",
      helpCenter: "Centro de Ayuda",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      aboutUs: "Sobre Nosotros",
      contact: "Contacto",
      copyright: "Todos los derechos reservados.",
      
      welcomeTitle: "Descubre Tu Próxima Aventura Gaming",
      welcomeSubtitle: "Explora miles de juegos, deja reseñas y rastrea tus favoritos",
      featuredGames: "Juegos Destacados",
      gamesCount: "Juegos",
      
      personalInfo: "Información Personal",
      name: "Nombre",
      username: "Usuario",
      email: "Correo",
      settings: "Configuración",
      favoriteGames: "Juegos Favoritos",
      favorite: "Favorito",
      
      profileSettings: "Configuración de Perfil",
      firstName: "Nombre",
      lastName: "Apellido",
      saveChanges: "Guardar Cambios",
      changeAvatar: "Cambiar Avatar",
      uploadAvatar: "Subir Avatar",
      
      register: "Registrarse",
      registerAccount: "Crear Cuenta",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      alreadyHave: "¿Ya tienes una cuenta?",
      dontHave: "¿No tienes una cuenta?",
      signIn: "Iniciar Sesión",
      signUp: "Registrarse",
      welcomeBack: "Bienvenido de Nuevo",
      registerHere: "Regístrate aquí",
      loginHere: "Inicia sesión aquí",
      thisFieldRequired: "Este campo es obligatorio",
      invalidEmail: "Dirección de correo no válida",
      
      yourReview: "Tu Reseña",
      shareThoughts: "Comparte tus opiniones sobre este juego",
      typeReview: "Escribe tu reseña",
      communityReviews: "Reseñas de la Comunidad",
      cancel: "Cancelar",
      submitReview: "Enviar Reseña",
      rateReview: "Califica Tu Reseña (Opcional)",
      yourRating: "Tu calificación",
      stars: "estrellas",
      cannotDelete: "Las reseñas con calificación no se pueden eliminar",
      
      aboutGame: "Acerca de Este Juego",
      rating: "Calificación",
      outOf: "de 5.0",
      genres: "Géneros",
      released: "Lanzado",
      
      searchResults: "Resultados de Búsqueda",
      showingResults: "Mostrando resultados para",
      gamesFound: "juegos encontrados",
      noResults: "No se encontraron juegos para",
      
      genreGames: "Juegos",
      
      language: "Idioma",
      selectLanguage: "Seleccionar Idioma"
    }
  },
  fr: {
    translation: {
      search: "Rechercher des jeux...",
      myProfile: "Mon Profil",
      logout: "Déconnexion",
      login: "Connexion",
      
      browseGames: "Parcourir les Jeux",
      helpCenter: "Centre d'Aide",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions de Service",
      aboutUs: "À Propos",
      contact: "Contact",
      copyright: "Tous droits réservés.",
      
      welcomeTitle: "Découvrez Votre Prochaine Aventure Gaming",
      welcomeSubtitle: "Parcourez des milliers de jeux, laissez des avis et suivez vos favoris",
      featuredGames: "Jeux en Vedette",
      gamesCount: "Jeux",
      
      personalInfo: "Informations Personnelles",
      name: "Nom",
      username: "Nom d'utilisateur",
      email: "Email",
      settings: "Paramètres",
      favoriteGames: "Jeux Favoris",
      favorite: "Favori",
      
      profileSettings: "Paramètres du Profil",
      firstName: "Prénom",
      lastName: "Nom",
      saveChanges: "Enregistrer les Modifications",
      changeAvatar: "Changer l'Avatar",
      uploadAvatar: "Télécharger l'Avatar",
      
      register: "S'inscrire",
      registerAccount: "Créer un Compte",
      password: "Mot de Passe",
      confirmPassword: "Confirmer le Mot de Passe",
      alreadyHave: "Vous avez déjà un compte?",
      dontHave: "Vous n'avez pas de compte?",
      signIn: "Se Connecter",
      signUp: "S'inscrire",
      welcomeBack: "Bon Retour",
      registerHere: "Inscrivez-vous ici",
      loginHere: "Connectez-vous ici",
      thisFieldRequired: "Ce champ est requis",
      invalidEmail: "Adresse email invalide",
      
      yourReview: "Votre Avis",
      shareThoughts: "Partagez vos pensées sur ce jeu",
      typeReview: "Écrivez votre avis",
      communityReviews: "Avis de la Communauté",
      cancel: "Annuler",
      submitReview: "Soumettre l'Avis",
      rateReview: "Évaluez Votre Avis (Optionnel)",
      yourRating: "Votre note",
      stars: "étoiles",
      cannotDelete: "Les avis avec notes ne peuvent pas être supprimés",
      
      aboutGame: "À Propos de Ce Jeu",
      rating: "Évaluation",
      outOf: "sur 5.0",
      genres: "Genres",
      released: "Sorti",
      
      searchResults: "Résultats de Recherche",
      showingResults: "Affichage des résultats pour",
      gamesFound: "jeux trouvés",
      noResults: "Aucun jeu trouvé pour",
      
      genreGames: "Jeux",
      
      language: "Langue",
      selectLanguage: "Sélectionner la Langue"
    }
  },
  de: {
    translation: {
      search: "Spiele suchen...",
      myProfile: "Mein Profil",
      logout: "Abmelden",
      login: "Anmelden",
      
      browseGames: "Spiele Durchsuchen",
      helpCenter: "Hilfezentrum",
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfService: "Nutzungsbedingungen",
      aboutUs: "Über Uns",
      contact: "Kontakt",
      copyright: "Alle Rechte vorbehalten.",
      
      welcomeTitle: "Entdecke Dein Nächstes Gaming-Abenteuer",
      welcomeSubtitle: "Durchsuche Tausende von Spielen, hinterlasse Bewertungen und verfolge deine Favoriten",
      featuredGames: "Empfohlene Spiele",
      gamesCount: "Spiele",
      
      personalInfo: "Persönliche Informationen",
      name: "Name",
      username: "Benutzername",
      email: "E-Mail",
      settings: "Einstellungen",
      favoriteGames: "Lieblingsspiele",
      favorite: "Favorit",
      
      profileSettings: "Profileinstellungen",
      firstName: "Vorname",
      lastName: "Nachname",
      saveChanges: "Änderungen Speichern",
      changeAvatar: "Avatar Ändern",
      uploadAvatar: "Avatar Hochladen",
      
      register: "Registrieren",
      registerAccount: "Konto Erstellen",
      password: "Passwort",
      confirmPassword: "Passwort Bestätigen",
      alreadyHave: "Haben Sie bereits ein Konto?",
      dontHave: "Haben Sie noch kein Konto?",
      signIn: "Anmelden",
      signUp: "Registrieren",
      welcomeBack: "Willkommen Zurück",
      registerHere: "Hier registrieren",
      loginHere: "Hier anmelden",
      thisFieldRequired: "Dieses Feld ist erforderlich",
      invalidEmail: "Ungültige E-Mail-Adresse",
      
      yourReview: "Deine Bewertung",
      shareThoughts: "Teile deine Gedanken über dieses Spiel",
      typeReview: "Schreibe deine Bewertung",
      communityReviews: "Community-Bewertungen",
      cancel: "Abbrechen",
      submitReview: "Bewertung Absenden",
      rateReview: "Bewerte Deine Rezension (Optional)",
      yourRating: "Deine Bewertung",
      stars: "Sterne",
      cannotDelete: "Bewertungen mit Sternebewertung können nicht gelöscht werden",
      
      aboutGame: "Über Dieses Spiel",
      rating: "Bewertung",
      outOf: "von 5.0",
      genres: "Genres",
      released: "Veröffentlicht",
      
      searchResults: "Suchergebnisse",
      showingResults: "Ergebnisse für",
      gamesFound: "Spiele gefunden",
      noResults: "Keine Spiele gefunden für",
      
      genreGames: "Spiele",
      
      language: "Sprache",
      selectLanguage: "Sprache Auswählen"
    }
  },
  pt: {
    translation: {
      search: "Pesquisar jogos...",
      myProfile: "Meu Perfil",
      logout: "Sair",
      login: "Entrar",
      
      browseGames: "Explorar Jogos",
      helpCenter: "Centro de Ajuda",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
      aboutUs: "Sobre Nós",
      contact: "Contato",
      copyright: "Todos os direitos reservados.",
      
      welcomeTitle: "Descubra Sua Próxima Aventura Gaming",
      welcomeSubtitle: "Navegue por milhares de jogos, deixe avaliações e acompanhe seus favoritos",
      featuredGames: "Jogos em Destaque",
      gamesCount: "Jogos",
      
      personalInfo: "Informações Pessoais",
      name: "Nome",
      username: "Nome de Usuário",
      email: "Email",
      settings: "Configurações",
      favoriteGames: "Jogos Favoritos",
      favorite: "Favorito",
      
      profileSettings: "Configurações de Perfil",
      firstName: "Nome",
      lastName: "Sobrenome",
      saveChanges: "Salvar Alterações",
      changeAvatar: "Mudar Avatar",
      uploadAvatar: "Enviar Avatar",
      
      register: "Registrar",
      registerAccount: "Criar Conta",
      password: "Senha",
      confirmPassword: "Confirmar Senha",
      alreadyHave: "Já tem uma conta?",
      dontHave: "Não tem uma conta?",
      signIn: "Entrar",
      signUp: "Cadastrar",
      welcomeBack: "Bem-vindo de Volta",
      registerHere: "Registre-se aqui",
      loginHere: "Faça login aqui",
      thisFieldRequired: "Este campo é obrigatório",
      invalidEmail: "Endereço de email inválido",
      
      yourReview: "Sua Avaliação",
      shareThoughts: "Compartilhe seus pensamentos sobre este jogo",
      typeReview: "Digite sua avaliação",
      communityReviews: "Avaliações da Comunidade",
      cancel: "Cancelar",
      submitReview: "Enviar Avaliação",
      rateReview: "Avalie Sua Resenha (Opcional)",
      yourRating: "Sua avaliação",
      stars: "estrelas",
      cannotDelete: "Avaliações com classificação não podem ser excluídas",
      
      aboutGame: "Sobre Este Jogo",
      rating: "Classificação",
      outOf: "de 5.0",
      genres: "Gêneros",
      released: "Lançado",
      
      searchResults: "Resultados da Pesquisa",
      showingResults: "Mostrando resultados para",
      gamesFound: "jogos encontrados",
      noResults: "Nenhum jogo encontrado para",
      
      genreGames: "Jogos",
      
      language: "Idioma",
      selectLanguage: "Selecionar Idioma"
    }
  },
  ru: {
    translation: {
      search: "Поиск игр...",
      myProfile: "Мой Профиль",
      logout: "Выйти",
      login: "Войти",
      
      browseGames: "Обзор Игр",
      helpCenter: "Центр Помощи",
      privacyPolicy: "Политика Конфиденциальности",
      termsOfService: "Условия Обслуживания",
      aboutUs: "О Нас",
      contact: "Контакты",
      copyright: "Все права защищены.",
      
      welcomeTitle: "Откройте Для Себя Новое Игровое Приключение",
      welcomeSubtitle: "Просматривайте тысячи игр, оставляйте отзывы и отслеживайте избранное",
      featuredGames: "Избранные Игры",
      gamesCount: "Игры",
      
      personalInfo: "Личная Информация",
      name: "Имя",
      username: "Имя Пользователя",
      email: "Электронная Почта",
      settings: "Настройки",
      favoriteGames: "Любимые Игры",
      favorite: "Избранное",
      
      profileSettings: "Настройки Профиля",
      firstName: "Имя",
      lastName: "Фамилия",
      saveChanges: "Сохранить Изменения",
      changeAvatar: "Изменить Аватар",
      uploadAvatar: "Загрузить Аватар",
      
      register: "Регистрация",
      registerAccount: "Создать Аккаунт",
      password: "Пароль",
      confirmPassword: "Подтвердить Пароль",
      alreadyHave: "Уже есть аккаунт?",
      dontHave: "Нет аккаунта?",
      
      yourReview: "Ваш Отзыв",
      shareThoughts: "Поделитесь своими мыслями об этой игре",
      typeReview: "Напишите свой отзыв",
      communityReviews: "Отзывы Сообщества",
      cancel: "Отмена",
      submitReview: "Отправить Отзыв",
      rateReview: "Оцените Свой Отзыв (Опционально)",
      yourRating: "Ваша оценка",
      stars: "звезд",
      cannotDelete: "Отзывы с рейтингом не могут быть удалены",
      
      aboutGame: "Об Этой Игре",
      rating: "Рейтинг",
      outOf: "из 5.0",
      genres: "Жанры",
      released: "Выпущено",
      
      searchResults: "Результаты Поиска",
      showingResults: "Показаны результаты для",
      gamesFound: "игр найдено",
      noResults: "Игры не найдены для",
      
      genreGames: "Игры",
      
      language: "Язык",
      selectLanguage: "Выбрать Язык"
    }
  },
  ja: {
    translation: {
      search: "ゲームを検索...",
      myProfile: "マイプロフィール",
      logout: "ログアウト",
      login: "ログイン",
      
      browseGames: "ゲームを閲覧",
      helpCenter: "ヘルプセンター",
      privacyPolicy: "プライバシーポリシー",
      termsOfService: "利用規約",
      aboutUs: "私たちについて",
      contact: "お問い合わせ",
      copyright: "All rights reserved.",
      
      welcomeTitle: "次のゲーム冒険を発見",
      welcomeSubtitle: "何千ものゲームを閲覧し、レビューを残し、お気に入りを追跡",
      featuredGames: "注目のゲーム",
      gamesCount: "ゲーム",
      
      personalInfo: "個人情報",
      name: "名前",
      username: "ユーザー名",
      email: "メール",
      settings: "設定",
      favoriteGames: "お気に入りのゲーム",
      favorite: "お気に入り",
      
      profileSettings: "プロフィール設定",
      firstName: "名",
      lastName: "姓",
      saveChanges: "変更を保存",
      changeAvatar: "アバターを変更",
      uploadAvatar: "アバターをアップロード",
      
      register: "登録",
      registerAccount: "アカウント作成",
      password: "パスワード",
      confirmPassword: "パスワード確認",
      alreadyHave: "すでにアカウントをお持ちですか？",
      dontHave: "アカウントをお持ちではありませんか？",
      signIn: "ログイン",
      signUp: "登録",
      welcomeBack: "お帰りなさい",
      registerHere: "ここから登録",
      loginHere: "ここからログイン",
      thisFieldRequired: "このフィールドは必須です",
      invalidEmail: "無効なメールアドレス",
      
      yourReview: "あなたのレビュー",
      shareThoughts: "このゲームについての感想を共有",
      typeReview: "レビューを入力",
      communityReviews: "コミュニティレビュー",
      cancel: "キャンセル",
      submitReview: "レビューを送信",
      rateReview: "レビューを評価 (オプション)",
      yourRating: "あなたの評価",
      stars: "つ星",
      cannotDelete: "評価付きレビューは削除できません",
      
      aboutGame: "このゲームについて",
      rating: "評価",
      outOf: "/ 5.0",
      genres: "ジャンル",
      released: "リリース日",
      
      searchResults: "検索結果",
      showingResults: "検索結果を表示",
      gamesFound: "ゲームが見つかりました",
      noResults: "ゲームが見つかりませんでした",
      
      genreGames: "ゲーム",
      
      language: "言語",
      selectLanguage: "言語を選択"
    }
  },
  zh: {
    translation: {
      search: "搜索游戏...",
      myProfile: "我的资料",
      logout: "登出",
      login: "登录",
      
      browseGames: "浏览游戏",
      helpCenter: "帮助中心",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      aboutUs: "关于我们",
      contact: "联系方式",
      copyright: "版权所有。",
      
      welcomeTitle: "发现您的下一个游戏冒险",
      welcomeSubtitle: "浏览数千款游戏，发表评论并追踪您的最爱",
      featuredGames: "精选游戏",
      gamesCount: "游戏",
      
      personalInfo: "个人信息",
      name: "姓名",
      username: "用户名",
      email: "电子邮件",
      settings: "设置",
      favoriteGames: "最喜欢的游戏",
      favorite: "收藏",
      
      profileSettings: "个人资料设置",
      firstName: "名",
      lastName: "姓",
      saveChanges: "保存更改",
      changeAvatar: "更改头像",
      uploadAvatar: "上传头像",
      
      register: "注册",
      registerAccount: "创建账户",
      password: "密码",
      confirmPassword: "确认密码",
      alreadyHave: "已有账户？",
      dontHave: "没有账户？",
      signIn: "登录",
      signUp: "注册",
      welcomeBack: "欢迎回来",
      registerHere: "在此注册",
      loginHere: "在此登录",
      thisFieldRequired: "此字段是必填的",
      invalidEmail: "无效的电子邮件地址",
      
      yourReview: "您的评论",
      shareThoughts: "分享您对这款游戏的想法",
      typeReview: "输入您的评论",
      communityReviews: "社区评论",
      cancel: "取消",
      submitReview: "提交评论",
      rateReview: "评价您的评论 (可选)",
      yourRating: "您的评分",
      stars: "星",
      cannotDelete: "带评分的评论无法删除",
      
      aboutGame: "关于此游戏",
      rating: "评分",
      outOf: "/ 5.0",
      genres: "类型",
      released: "发布日期",
      
      searchResults: "搜索结果",
      showingResults: "显示搜索结果",
      gamesFound: "找到游戏",
      noResults: "未找到游戏",
      
      genreGames: "游戏",
      
      language: "语言",
      selectLanguage: "选择语言"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
