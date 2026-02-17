import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useScroll } from '@/src/context/ScrollContext';

const { height } = Dimensions.get('window');

export default function Home() {
  const { scrollRef, saveSectionPosition } = useScroll();

  return (
    <ScrollView 
      ref={scrollRef} 
      scrollEventThrottle={16}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View 
        onLayout={(e) => saveSectionPosition('sobre', e.nativeEvent.layout.y)}
        style={[styles.section, { backgroundColor: '#121212' }]}
      >
        <Text style={styles.title}>Sobre Mim</Text>
      </View>

      <View 
        onLayout={(e) => saveSectionPosition('tecnologias', e.nativeEvent.layout.y)}
        style={[styles.section, { backgroundColor: '#000' }]}
      >
        <Text style={styles.title}>Tecnologias</Text>
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