import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Pressable,
  useWindowDimensions, 
  Linking, 
  Platform
} from 'react-native';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react-native'; 
import { useScroll } from '@/src/context/ScrollContext';


const SocialButton = ({ icon: Icon, url }: { icon: any, url: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const openLink = () => Linking.openURL(url);

  return (
    <Pressable
      onPress={openLink}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.iconButton,
        isHovered && styles.iconButtonHover
      ]}
    >
      <Icon 
        color={isHovered ? "black" : "white"} 
        size={24} 
      />
    </Pressable>
  );
};

export function Hero() {
  const { width, height } = useWindowDimensions();
  const { saveSectionPosition } = useScroll();
  const isDesktop = width >= 768;

  return (
    <View 
      style={[styles.container, { minHeight: height }]}
    >
      <View style={[styles.content, isDesktop ? styles.contentRow : styles.contentCol]}>
        
        <View style={styles.imageWrapper}>
          <View style={[styles.imageBorder, isDesktop ? styles.imgDesktop : styles.imgMobile]}>
            <Image
              source={{ uri: 'http://github.com/douglaswenzel.png' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={[styles.textContent, isDesktop ? { alignItems: 'flex-start' } : { alignItems: 'center' }]}>
          <Text style={[styles.title, isDesktop ? styles.titleDesktop : styles.titleMobile]}>
            Desenvolvedor de Software
          </Text>
          
          <Text style={[styles.subtitle, isDesktop ? styles.subtitleDesktop : styles.subtitleMobile]}>
            Transformando ideias em soluções digitais elegantes, funcionais e seguras.
          </Text>

          <View style={styles.socialContainer}>
            <SocialButton icon={Github} url="https://github.com/douglaswenzel" />
            <SocialButton icon={Linkedin} url="https://linkedin.com/in/douglas-wenzel" />
            <SocialButton icon={Instagram} url="https://instagram.com/wenz.el" />
            <SocialButton icon={Mail} url="mailto:douglas.wenzel@hotmail.com" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 80,
  },
  content: {
    maxWidth: 1024,
    width: '100%',
    gap: 48,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentCol: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageWrapper: {
    flexShrink: 0,
  },
  imageBorder: {
    borderWidth: 4,
    borderColor: 'white',
    overflow: 'hidden',
  },
  imgMobile: { width: 192, height: 192 },
  imgDesktop: { width: 256, height: 256 },
  image: { width: '100%', height: '100%' },
  textContent: { flex: 1, gap: 24 },
  title: {
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontWeight: '400',
  },
  titleMobile: { fontSize: 48, textAlign: 'center' },
  titleDesktop: { fontSize: 72, textAlign: 'left' },
  subtitle: { color: '#9CA3AF' },
  subtitleMobile: { fontSize: 20, textAlign: 'center' },
  subtitleDesktop: { fontSize: 24, textAlign: 'left' },
  socialContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingTop: 16,
  },
  iconButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    ...Platform.select({
      web: { transition: '0.3s ease' }
    })
  },
  iconButtonHover: {
    backgroundColor: 'white',
  },
});