import { useScroll } from '@/src/context/ScrollContext';
import { ExternalLink, Github } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Linking,
  Pressable,
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native';

import { styles } from './styles';

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
