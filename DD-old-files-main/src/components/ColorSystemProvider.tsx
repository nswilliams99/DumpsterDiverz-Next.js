"use client";

import { useEffect, ReactNode } from 'react';
import { useColorPalette } from '@/hooks/useColorPalette';

interface ColorSystemProviderProps {
  children: ReactNode;
}

export const ColorSystemProvider = ({ children }: ColorSystemProviderProps) => {
  const { palette, loading, error } = useColorPalette();

  useEffect(() => {
    if (!palette || !palette.variables) return;

    // Inject CSS custom properties into the document root
    const root = document.documentElement;
    
    // Clear any existing dynamic color variables first
    const existingVars = Array.from(document.documentElement.style)
      .filter(prop => prop.startsWith('--'));
    
    existingVars.forEach(varName => {
      if (varName.startsWith('--primary') || 
          varName.startsWith('--secondary') || 
          varName.startsWith('--accent') ||
          varName.startsWith('--background') ||
          varName.startsWith('--foreground') ||
          varName.startsWith('--muted') ||
          varName.startsWith('--border') ||
          varName.startsWith('--input') ||
          varName.startsWith('--ring') ||
          varName.startsWith('--destructive') ||
          varName.startsWith('--warning') ||
          varName.startsWith('--success') ||
          varName.startsWith('--color-')) {
        root.style.removeProperty(varName);
      }
    });

    // Set new color variables with highest priority
    palette.variables.forEach(variable => {
      root.style.setProperty(variable.css_variable_name, variable.hsl_value, 'important');
    });
  }, [palette]);

  // Log loading/error states but don't block rendering
  if (loading) {
    console.log('Color system loading...');
  }

  if (error) {
    console.error('Color system error:', error, '- Using fallback colors from index.css');
  }

  return <>{children}</>;
};