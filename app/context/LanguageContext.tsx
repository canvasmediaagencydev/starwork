'use client';

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  ReactNode,
} from 'react';

type Language = 'TH' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (th: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'language';

// External store backed by localStorage. Using useSyncExternalStore lets us read
// the persisted language without a setState-in-effect (SSR and the first client
// render both use the server snapshot = 'TH', so there is no hydration mismatch;
// React then re-renders with the real client value after hydration).
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  // Reflect changes made in other tabs.
  window.addEventListener('storage', onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function getSnapshot(): Language {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'EN' ? 'EN' : 'TH';
  } catch {
    return 'TH';
  }
}

// Server + first client render default to Thai to keep hydration stable.
function getServerSnapshot(): Language {
  return 'TH';
}

function persistLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Ignore storage failures (private mode, quota) — in-memory state still updates.
  }
  // Notify same-tab subscribers (the `storage` event only fires in other tabs).
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    persistLanguage(lang);
  }, []);

  const t = useCallback(
    (th: string, en: string): string => (language === 'EN' ? en : th),
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
