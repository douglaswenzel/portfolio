import { Platform, StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  content: {
    maxWidth: 1280,
    width: '100%',
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 64,
    fontWeight: '400',
  },
  titleMobile: { fontSize: 40 },
  titleDesktop: { fontSize: 64 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12, 
  },
  card: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 32,
    margin: 12,
    backgroundColor: 'transparent',
    width: Platform.OS === 'web' 
      ? ('calc(33.33% - 24px)' as any) 
      : '100%',
    minWidth: 280,
    flexGrow: 1,
  },
  cardHover: {
    backgroundColor: 'white',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 16,
  },
  skillsList: {
    gap: 8,
  },
  skillItem: {
    fontSize: 16,
  },
});