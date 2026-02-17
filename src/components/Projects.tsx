import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  useWindowDimensions, 
  Pressable, 
  Platform,
  ViewStyle,
  TextStyle,
  Linking
} from 'react-native';
import { Github, ExternalLink } from 'lucide-react-native';
import { useScroll } from '@/src/context/ScrollContext';

const projects = [
  {
    title: 'Delbicos - Delivery de bicos',
    description: 'Plataforma voltada a conectar prestadores de serviço a clientes a partir de um sistema de agendamento on-line.',
    tags: ['React Native', 'Node.js', 'MySql', 'Express'],
    github: 'https://github.com/fershibli/DelBicosV2',
    demo: 'https://www.delbicos.com.br'
  },
  {
    title: 'DeltaOne - Iniciação Científica',
    description: 'Projeto de iniciação científica que realiza controle de acesso por meio de reconhecimento Facial.',
    tags: ['Python', 'Linux', 'TensorFlow', 'DeepFace'],
    github: 'https://github.com/douglaswenzel/DeltaGo-Reconhecimento-Facial'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.card as ViewStyle,
        isHovered && (styles.cardHover as ViewStyle)
      ]}
    >
      <Text style={[styles.projectTitle as TextStyle, { color: isHovered ? "white" : "black" }]}>
        {project.title}
      </Text>
      
      <Text style={[styles.description as TextStyle, { color: isHovered ? "#CCC" : "#4B5563" }]}>
        {project.description}
      </Text>

      <View style={styles.tagContainer}>
        {project.tags.map(tag => (
          <View key={tag} style={[styles.tag, { borderColor: isHovered ? "white" : "black" }]}>
            <Text style={[styles.tagText, { color: isHovered ? "white" : "black" }]}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Pressable onPress={() => Linking.openURL(project.github)} style={styles.link}>
          <Github size={20} color={isHovered ? "white" : "black"} />
          <Text style={[styles.linkText, { color: isHovered ? "white" : "black" }]}>Código</Text>
        </Pressable>
        
        {project.demo && (
          <Pressable onPress={() => Linking.openURL(project.demo)} style={styles.link}>
            <ExternalLink size={20} color={isHovered ? "white" : "black"} />
            <Text style={[styles.linkText, { color: isHovered ? "white" : "black" }]}>Demo</Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

export function Projects() {
  const { width } = useWindowDimensions();
  const { saveSectionPosition } = useScroll();
  const isDesktop = width >= 768;

  return (
    <View 
      onLayout={(e) => saveSectionPosition('projetos', e.nativeEvent.layout.y)}
      style={styles.container as ViewStyle}
    >
      <View style={styles.content as ViewStyle}>
        <Text style={[styles.sectionTitle as TextStyle, isDesktop ? styles.titleDesktop : styles.titleMobile]}>
          Projetos
        </Text>

        <View style={[styles.grid, { flexDirection: isDesktop ? 'row' : 'column' }]}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  content: {
    maxWidth: 1280,
    width: '100%',
  },
  sectionTitle: {
    color: 'black',
    marginBottom: 64,
    fontWeight: '400',
  },
  titleMobile: { fontSize: 40 },
  titleDesktop: { fontSize: 64 },
  grid: {
    gap: 24,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 32,
    backgroundColor: 'transparent',
    minHeight: 300,
    justifyContent: 'space-between',
  },
  cardHover: {
    backgroundColor: 'black',
  },
  projectTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 32,
  },
  tag: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  footer: {
    flexDirection: 'row',
    gap: 24,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '500',
  }
});