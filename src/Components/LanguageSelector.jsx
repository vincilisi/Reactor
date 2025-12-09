import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import supabase from '../database/supabase';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const { profile } = useContext(UserContext);

  // Load saved language from profile
  useEffect(() => {
    if (profile && profile.language) {
      i18n.changeLanguage(profile.language);
    }
  }, [profile, i18n]);

  const changeLanguage = async (lng) => {
    console.log('Changing language to:', lng);
    
    // Change language in i18next (this will also save to localStorage)
    await i18n.changeLanguage(lng);
    console.log('Language changed to:', i18n.language);
    console.log('localStorage i18nextLng:', localStorage.getItem('i18nextLng'));
    
    // Save to Supabase if user is logged in
    if (profile) {
      const { error } = await supabase
        .from('profiles')
        .update({ language: lng })
        .eq('id', profile.id);
      
      if (error) {
        console.error('Error saving language to Supabase:', error);
      } else {
        console.log('Language saved to Supabase');
      }
    }
    
    // Force reload to ensure all components update
    window.location.reload();
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-2 font-rajdhani">
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-2xl border border-primary/20 mt-2">
        <li className="menu-title">
          <span className="text-primary font-orbitron">{t('selectLanguage')}</span>
        </li>
        {languages.map((lang) => (
          <li key={lang.code}>
            <a
              onClick={() => changeLanguage(lang.code)}
              className={`font-rajdhani ${i18n.language === lang.code ? 'active bg-primary/20' : ''}`}
            >
              <span className="text-xl">{lang.flag}</span>
              {lang.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
