import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useScroll } from '@/src/context/ScrollContext';
import { Hero } from '@/src/components/Hero';
import { About } from '@/src/components/About';
import { Technologies } from '@/src/components/Technologies';

const { height } = Dimensions.get('window');

export default function Home() {
  const { scrollRef, saveSectionPosition } = useScroll();

  return (
    <ScrollView 
      ref={scrollRef} 
      scrollEventThrottle={16}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Hero />
      <View onLayout={(e) => saveSectionPosition('sobre', e.nativeEvent.layout.y)}>
        <About />
      </View>   

      <View 
        onLayout={(e) => saveSectionPosition('tecnologias', e.nativeEvent.layout.y)}>
        <Technologies />
      </View>

      <View 
        onLayout={(e) => saveSectionPosition('projetos', e.nativeEvent.layout.y)}
        style={[styles.section, { backgroundColor: '#1a1a1a' }]}
      >
        <Text style={styles.title}>Projetos</Text>
      </View>

      <View 
        onLayout={(e) => saveSectionPosition('experiencia', e.nativeEvent.layout.y)}
        style={[styles.section, { backgroundColor: '#161616' }]}
      >
        <Text style={styles.title}>Experiência</Text>
      </View>

      <View 
        onLayout={(e) => saveSectionPosition('contato', e.nativeEvent.layout.y)}
        style={[styles.section, { backgroundColor: '#1a1a1a' }]}
      >
        <Text style={styles.title}>Contato</Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: 'white', fontSize: 32, fontWeight: 'bold' }
});