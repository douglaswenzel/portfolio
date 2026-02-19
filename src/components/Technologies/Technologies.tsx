import { useScroll } from '@/src/context/ScrollContext';
import { Boxes, Code2, Database, Layout, Server, Smartphone } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Pressable,
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native';

import { styles } from './styles';

const technologies = [
  { icon: Code2, category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { icon: Smartphone, category: 'Mobile', skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'] },
  { icon: Server, category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'] },
  { icon: Database, category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
  { icon: Boxes, category: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'] },
  { icon: Layout, category: 'Design', skills: ['Figma', 'UI/UX', 'Responsive Design'] },
];

const TechCard = ({ tech }: { tech: typeof technologies[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.card as ViewStyle,
        isHovered && (styles.cardHover as ViewStyle)
      ]}
    >
      <Icon 
        size={40} 
        color={isHovered ? "black" : "white"} 
      />
      <Text style={[styles.categoryTitle as TextStyle, { color: isHovered ? "black" : "white" }]}>
        {tech.category}
      </Text>
      <View style={styles.skillsList as ViewStyle}>
        {tech.skills.map((skill) => (
          <Text 
            key={skill} 
            style={[styles.skillItem as TextStyle, { color: isHovered ? "#333" : "#9CA3AF" }]}
          >
            • {skill}
          </Text>
        ))}
      </View>
    </Pressable>
  );
};

export function Technologies() {
  const { width } = useWindowDimensions();
  const { saveSectionPosition } = useScroll();
  const isDesktop = width >= 1024;

  return (
    <View 
      onLayout={(e) => saveSectionPosition('tecnologias', e.nativeEvent.layout.y)}
      style={styles.container as ViewStyle}
    >
      <View style={styles.content as ViewStyle}>
        <Text style={[styles.sectionTitle as TextStyle, isDesktop ? styles.titleDesktop : styles.titleMobile]}>
          Tecnologias
        </Text>

        <View style={styles.grid as ViewStyle}>
          {technologies.map((tech) => (
            <TechCard key={tech.category} tech={tech} />
          ))}
        </View>
      </View>
    </View>
  );
}
