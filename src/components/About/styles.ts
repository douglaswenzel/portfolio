import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 80,
  },
  content: {
    maxWidth: 1024,
    width: '100%',
  },
  title: {
    color: 'black',
    marginBottom: 48,
    fontWeight: '400',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  titleMobile: {
    fontSize: 40,
  },
  titleDesktop: {
    fontSize: 64,
  },
  textContainer: {
    gap: 24,
  },
  paragraph: {
    color: '#374151',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'left',
  },
});