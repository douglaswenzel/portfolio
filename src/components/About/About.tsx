import React from 'react';
import {
  Text,
  useWindowDimensions,
  View
} from 'react-native';

import { useScroll } from '@/src/context/ScrollContext';
import { styles } from './styles';

export function About() {
  const { width, height } = useWindowDimensions();
  const { saveSectionPosition } = useScroll();
  
  const isDesktop = width >= 768;

  return (
    <View 
      onLayout={(e) => saveSectionPosition('sobre', e.nativeEvent.layout.y)}
      style={[styles.container, { minHeight: height }]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, isDesktop ? styles.titleDesktop : styles.titleMobile]}>
          Sobre Mim
        </Text>

        <View style={styles.textContainer}>
<Text style={styles.paragraph}>
            Sou um desenvolvedor apaixonado por criar experiências digitais que realmente fazem a diferença. 
            Com formação prevista para dezembro de 2026 pela Fatec Votorantim, venho construindo uma base sólida 
            através de projetos práticos, encarando com entusiasmo cada desafio proposto e transformando teoria 
            em soluções reais.
          </Text>
          
          <Text style={styles.paragraph}>
            Meu foco é escrever código limpo, eficiente e fácil de manter. Sigo sempre em busca das melhores 
            práticas e das tecnologias mais modernas, pois acredito que a simplicidade é, de fato, o ápice da sofisticação.
          </Text>
          
          <Text style={styles.paragraph}>
            Acredito que a tecnologia unida à educação é a chave para as mudanças que quero ver no mundo. Por isso, 
            também dedico meu tempo produzindo conteúdos didáticos para que o conhecimento técnico seja acessível a todos.
          </Text>

          <Text style={styles.paragraph}>
            Fora das linhas de código, compartilho minha rotina com meus dois grandes tesouros: a Pitchuluca e o Cadu. 
            Meus gatinhos são meus companheiros de jornada e os verdadeiros donos do meu setup!
          </Text>
        </View>
      </View>
    </View>
  );
}

