import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  content: {
    maxWidth: 1280,
    width: '100%',
  },
  sectionTitle: {
    color: 'black',
    marginBottom: 64,
    fontWeight: '400',
  },
  titleMobile: { fontSize: 40 },
  titleDesktop: { fontSize: 64 },
  grid: {
    gap: 24,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 32,
    backgroundColor: 'transparent',
    minHeight: 300,
    justifyContent: 'space-between',
  },
  cardHover: {
    backgroundColor: 'black',
  },
  projectTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 32,
  },
  tag: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  footer: {
    flexDirection: 'row',
    gap: 24,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '500',
  }
});