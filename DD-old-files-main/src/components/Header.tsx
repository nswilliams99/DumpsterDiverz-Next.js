"use client";


import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TopBar from './header/TopBar';
import MainNavigation from './header/MainNavigation';
import MobileMenu from './header/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdminMode, setShowAdminMode] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const adminParam = searchParams?.get('admin');
    const storedAdminMode = typeof window !== 'undefined' ? localStorage.getItem('adminMode') : null;
    
    if (adminParam === 'true') {
      setShowAdminMode(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminMode', 'true');
      }
    } else if (storedAdminMode === 'true') {
      setShowAdminMode(true);
    }
  }, [searchParams]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background shadow-sm relative z-50" role="banner">
      <TopBar showAdminMode={showAdminMode} />
      <MainNavigation
        isMenuOpen={isMenuOpen}
        onMenuToggle={toggleMenu}
      />
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </header>
  );
};

export default Header;
