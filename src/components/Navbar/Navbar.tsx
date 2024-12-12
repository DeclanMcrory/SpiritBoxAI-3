import React from 'react';
import { Ghost } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Ghost className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">SpiritBoxAI</span>
          </div>
          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </nav>
  );
}