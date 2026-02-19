import { useScroll } from '@/src/context/ScrollContext';
import React from 'react';
import {
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native';

import { styles } from './styles';

const experiences = [
  {
    year: '2024 - Atualmente',
    title: 'Desenvolvedor FullStack',
    company: 'Delbicos',
    description: 'Responsável pelo desenvolvimento de APIs e interfaces responsivas com uso de Express e React Native'
  },
  {
    year: '2025 - 2025',
    title: 'Desenvolvedor Front-End',
    company: 'Imobiliária Elite Prime',
    description: 'Focado em criar soluções escaláveis com React Native e Node.js, mantendo a qualidade e performance.'
  },
  {
    year: '2024 - 2025',
    title: 'Bolsista de iniciação científica',
    company: 'Centro Paula Souza',
    description: 'Responsável pelo desenvolvimento de um sistema em python de reconhecimento facial com parceria à Receita Federal'
  }
];

export function Timeline() {
  const { width } = useWindowDimensions();
  const { saveSectionPosition } = useScroll();
  const isDesktop = width >= 768;

  return (
    <View 
      onLayout={(e) => saveSectionPosition('experiencia', e.nativeEvent.layout.y)}
      style={styles.container as ViewStyle}
    >
      <View style={styles.content as ViewStyle}>
        <Text style={[styles.sectionTitle as TextStyle, isDesktop ? styles.titleDesktop : styles.titleMobile]}>
          Experiência
        </Text>

        <View style={styles.timelineWrapper as ViewStyle}>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.itemContainer as ViewStyle}>
              <View style={styles.verticalLine as ViewStyle} />
              
              <View style={styles.bullet as ViewStyle} />

              <View style={styles.textContainer as ViewStyle}>
                <Text style={styles.yearText as TextStyle}>{exp.year}</Text>
                <Text style={styles.titleText as TextStyle}>{exp.title}</Text>
                <Text style={styles.companyText as TextStyle}>{exp.company}</Text>
                <Text style={styles.descriptionText as TextStyle}>{exp.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
