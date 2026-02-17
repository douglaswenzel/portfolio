import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  useWindowDimensions, 
  ViewStyle, 
  TextStyle 
} from 'react-native';
import { useScroll } from '@/src/context/ScrollContext';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  content: {
    maxWidth: 1024,
    width: '100%',
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 64,
    fontWeight: '600',
  },
  titleMobile: { fontSize: 40 },
  titleDesktop: { fontSize: 64 },
  timelineWrapper: {
    paddingLeft: 8,
  },
  itemContainer: {
    position: 'relative',
    paddingLeft: 40,
    paddingBottom: 48,
  },
  verticalLine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'white',
    opacity: 0.3,
  },
  bullet: {
    position: 'absolute',
    left: -6,
    top: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
  },
  textContainer: {
    marginTop: -4,
  },
  yearText: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  companyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
    opacity: 0.8,
  },
  descriptionText: {
    color: '#D1D5DB',
    fontSize: 16,
    lineHeight: 24,
  },
});