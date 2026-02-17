import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  useWindowDimensions, 
  Pressable, 
  Platform,
  ViewStyle,
  TextStyle
} from 'react-native';
import { Code2, Database, Layout, Smartphone, Server, Boxes } from 'lucide-react-native';
import { useScroll } from '@/src/context/ScrollContext';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  content: {
    maxWidth: 1280,
    width: '100%',
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 64,
    fontWeight: '400',
  },
  titleMobile: { fontSize: 40 },
  titleDesktop: { fontSize: 64 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12, 
  },
  card: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 32,
    margin: 12,
    backgroundColor: 'transparent',
    width: Platform.OS === 'web' 
      ? ('calc(33.33% - 24px)' as any) 
      : '100%',
    minWidth: 280,
    flexGrow: 1,
  },
  cardHover: {
    backgroundColor: 'white',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 16,
  },
  skillsList: {
    gap: 8,
  },
  skillItem: {
    fontSize: 16,
  },
});