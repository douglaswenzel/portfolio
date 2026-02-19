import { About } from '@/src/components/About/About';
import { Contact } from '@/src/components/Contact/Contact';
import { Footer } from '@/src/components/Footer/Footer';
import { Hero } from '@/src/components/Hero/Hero';
import { Projects } from '@/src/components/Projects/Projects';
import { Technologies } from '@/src/components/Technologies/Technologies';
import { Timeline } from '@/src/components/Timeline/Timeline';
import { useScroll } from '@/src/context/ScrollContext';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

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
        onLayout={(e) => saveSectionPosition('projetos', e.nativeEvent.layout.y)}>
        <Projects />
      </View>

      <View 
        onLayout={(e) => saveSectionPosition('experiencia', e.nativeEvent.layout.y)}>
          <Timeline />
      </View>

      <View 
        onLayout={(e) => saveSectionPosition('contato', e.nativeEvent.layout.y)}>
        <Contact />
      </View> 

      <Footer />
      
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