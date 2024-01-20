import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Standard' }} />
      <Tabs.Screen name="hdr" options={{ title: 'HDR' }} />
    </Tabs>
  );
}
