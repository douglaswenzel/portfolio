import { useScroll } from '@/src/context/ScrollContext';
import { Menu, X } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';

import { styles } from './styles';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { scrollToSection } = useScroll();
  
  const isDesktop = width >= 768;

  const handleNavPress = (id: string) => {
    const formattedId = id.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    scrollToSection(formattedId);
    setIsOpen(false);
  };

  const NavLinks = ({ isMobile = false }) => (
    <View style={[styles.navLinks, isMobile && styles.navLinksMobile]}>
      {['Sobre', 'Tecnologias', 'Projetos', 'Experiência', 'Contato'].map((item) => (
        <TouchableOpacity 
          key={item} 
          onPress={() => handleNavPress(item)}
          style={isMobile ? styles.mobileBtn : styles.desktopBtn}
        >
          <Text style={styles.linkText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logo}>Douglas Wenzel</Text>

          {isDesktop && <NavLinks />}

          {!isDesktop && (
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.iconBtn}>
              {isOpen ? <X color="white" size={24} /> : <Menu color="white" size={24} />}
            </TouchableOpacity>
          )}
        </View>

        {(!isDesktop && isOpen) && (
          <View style={styles.mobileMenu}>
            <NavLinks isMobile />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const HEADER_HEIGHT = 70;
