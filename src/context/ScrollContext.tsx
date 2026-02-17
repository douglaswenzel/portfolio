import React, { createContext, useContext, useRef, useState } from 'react';
import { ScrollView } from 'react-native';

interface ScrollContextData {
  scrollRef: React.RefObject<ScrollView | null>;
  scrollToSection: (sectionName: string) => void;
  saveSectionPosition: (name: string, y: number) => void;
}

const ScrollContext = createContext<ScrollContextData | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<ScrollView>(null);
  const [positions, setPositions] = useState<Record<string, number>>({});

  const saveSectionPosition = (name: string, y: number) => {
    setPositions(prev => ({ ...prev, [name]: y }));
  };

  const scrollToSection = (sectionName: string) => {
    const y = positions[sectionName.toLowerCase()];
    if (y !== undefined) {
      scrollRef.current?.scrollTo({ y, animated: true });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollRef, scrollToSection, saveSectionPosition }}>
      {children}
    </ScrollContext.Provider>
    
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error('useScroll deve ser usado dentro de um ScrollProvider');
  return context;
};