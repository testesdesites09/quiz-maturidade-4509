'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';
import { saveSettings, getSettings } from '@/lib/storage';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const settings = getSettings();
    setTheme(settings.theme);
    applyTheme(settings.theme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    const root = document.documentElement;
    
    if (newTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
  };

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'auto'> = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    setTheme(nextTheme);
    saveSettings({ theme: nextTheme });
    applyTheme(nextTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg bg-[#F5F1E8] dark:bg-[#2C2C2C] border border-[#2C5F6F]/20 dark:border-[#5A7C5A]/30 hover:bg-[#E5DFD0] dark:hover:bg-[#3C3C3C] transition-all duration-300"
      aria-label="Alternar tema"
    >
      {theme === 'light' && <Sun className="w-5 h-5 text-[#2C5F6F]" />}
      {theme === 'dark' && <Moon className="w-5 h-5 text-[#5A7C5A]" />}
      {theme === 'auto' && <Monitor className="w-5 h-5 text-[#8B7355]" />}
    </button>
  );
}
