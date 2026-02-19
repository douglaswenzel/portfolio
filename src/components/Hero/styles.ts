import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 80,
  },
  content: {
    maxWidth: 1024,
    width: '100%',
    gap: 48,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentCol: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageWrapper: {
    flexShrink: 0,
  },
  imageBorder: {
    borderWidth: 4,
    borderColor: 'white',
    overflow: 'hidden',
  },
  imgMobile: { width: 192, height: 192 },
  imgDesktop: { width: 256, height: 256 },
  image: { width: '100%', height: '100%' },
  textContent: { flex: 1, gap: 24 },
  title: {
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontWeight: '400',
  },
  titleMobile: { fontSize: 48, textAlign: 'center' },
  titleDesktop: { fontSize: 72, textAlign: 'left' },
  subtitle: { color: '#9CA3AF' },
  subtitleMobile: { fontSize: 20, textAlign: 'center' },
  subtitleDesktop: { fontSize: 24, textAlign: 'left' },
  socialContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingTop: 16,
  },
  iconButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    ...Platform.select({
      web: { transition: '0.3s ease' }
    })
  },
  iconButtonHover: {
    backgroundColor: 'white',
  },
});