import { useScroll } from '@/src/context/ScrollContext';
import { Mail, MapPin, Send } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle
} from 'react-native';

import { styles } from './styles';

export function Contact() {
  const { width } = useWindowDimensions();
  const { saveSectionPosition } = useScroll();
  const isDesktop = width >= 768;

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {      
      console.log("Dados para salvar no MongoDB:", form);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert("Sucesso!", "Sua mensagem foi enviada.");
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível enviar a mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View 
      onLayout={(e) => saveSectionPosition('contato', e.nativeEvent.layout.y)}
      style={styles.container as ViewStyle}
    >
      <View style={styles.content as ViewStyle}>
        <Text style={[styles.sectionTitle as TextStyle, isDesktop ? styles.titleDesktop : styles.titleMobile]}>
          Contato
        </Text>

        <View style={[styles.grid, { flexDirection: isDesktop ? 'row' : 'column' }]}>
          <View style={styles.infoSide}>
            <Text style={styles.subtitle}>Vamos conversar?</Text>
            <Text style={styles.description}>
              Sinta-se à vontade para entrar em contato. Responderemos o mais breve possível.
            </Text>

            <View style={styles.contactItems}>
              <View style={styles.item}>
                <View style={styles.iconBox}><Mail color="black" size={24}/></View>
                <View><Text style={styles.itemLabel}>Email</Text><Text style={styles.itemValue}>douglas.wenzel@hotmail.com</Text></View>
              </View>
              <View style={styles.item}>
                <View style={styles.iconBox}><MapPin color="black" size={24}/></View>
                <View><Text style={styles.itemLabel}>Localização</Text><Text style={styles.itemValue}>Sorocaba, São Paulo, Brasil</Text></View>
              </View>
            </View>
          </View>

          <View style={styles.formSide}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#666"
              value={form.name}
              onChangeText={(t) => setForm({...form, name: t})}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={form.email}
              onChangeText={(t) => setForm({...form, email: t})}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Sua mensagem"
              placeholderTextColor="#666"
              multiline
              numberOfLines={6}
              value={form.message}
              onChangeText={(t) => setForm({...form, message: t})}
            />
            
            <Pressable 
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#333' : 'black' }
              ]}
              onPress={handleSend}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <>
                  <Text style={styles.buttonText}>ENVIAR MENSAGEM</Text>
                  <Send color="white" size={18} />
                </>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

