import { Stack } from 'expo-router';
import { ScrollProvider } from '@/src/context/ScrollContext';
import { Navigation } from '@/src/components/Navigation';

export default function RootLayout() {
  return (
    <ScrollProvider>
      <Navigation />
      <Stack screenOptions={{ headerShown: false }} />
    </ScrollProvider>
  );
}