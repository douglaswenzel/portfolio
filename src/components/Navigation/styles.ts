
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    zIndex: 50,
    paddingTop: 0, 
  },
  container: {
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '100%',
  },
  content: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 32,
  },
  navLinksMobile: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  desktopBtn: {
    paddingVertical: 4,
  },
  mobileBtn: {
    width: '100%',
    paddingVertical: 8,
  },
  iconBtn: {
    padding: 8,
  },
  mobileMenu: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    backgroundColor: 'black',
    width: '100%',
  }
});