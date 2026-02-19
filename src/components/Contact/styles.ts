import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 100,
    alignItems: 'center',
  },
  content: {
    maxWidth: 1024,
    width: '100%',
  },
  sectionTitle: {
    color: 'black',
    marginBottom: 64,
    fontWeight: '400',
  },
  titleMobile: {
    fontSize: 40,
  },
  titleDesktop: {
    fontSize: 64,
  },
  grid: {
    gap: 64,
  },
  infoSide: {
    flex: 1,
  },
  formSide: {
    flex: 1.2,
    gap: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 32,
  },
  contactItems: {
    gap: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconBox: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  itemLabel: {
    fontSize: 12,
    color: '#6B7280',
    textTransform: 'uppercase',
  },
  itemValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 16,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 1,
  },
});