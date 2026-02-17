import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  useWindowDimensions, 
  SafeAreaView,
} from 'react-native';
import { Menu, X } from 'lucide-react-native';
import { useScroll } from '@/src/context/ScrollContext';

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

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    zIndex: 50,
    paddingTop: 0, 
  },
  container: {
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '100%',
  },
  content: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 32,
  },
  navLinksMobile: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  desktopBtn: {
    paddingVertical: 4,
  },
  mobileBtn: {
    width: '100%',
    paddingVertical: 8,
  },
  iconBtn: {
    padding: 8,
  },
  mobileMenu: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    backgroundColor: 'black',
    width: '100%',
  }
});