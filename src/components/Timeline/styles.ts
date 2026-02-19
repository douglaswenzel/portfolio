import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  content: {
    maxWidth: 1024,
    width: '100%',
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 64,
    fontWeight: '600',
  },
  titleMobile: { fontSize: 40 },
  titleDesktop: { fontSize: 64 },
  timelineWrapper: {
    paddingLeft: 8,
  },
  itemContainer: {
    position: 'relative',
    paddingLeft: 40,
    paddingBottom: 48,
  },
  verticalLine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'white',
    opacity: 0.3,
  },
  bullet: {
    position: 'absolute',
    left: -6,
    top: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
  },
  textContainer: {
    marginTop: -4,
  },
  yearText: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  companyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
    opacity: 0.8,
  },
  descriptionText: {
    color: '#D1D5DB',
    fontSize: 16,
    lineHeight: 24,
  },
});