import { useScroll } from '@/src/context/ScrollContext';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  Linking,
  Pressable,
  Text,
  useWindowDimensions,
  View
} from 'react-native';

import { styles } from './styles';

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
