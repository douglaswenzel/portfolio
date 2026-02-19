import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    maxWidth: 1280,
    width: '100%',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtext: {
    color: '#6B7280',
    fontSize: 12,
    textAlign: 'center',
  }
});