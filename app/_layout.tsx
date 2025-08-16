import {
  Icon,
  Label,
  NativeTabs as Tabs,
} from 'expo-router/unstable-native-tabs';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Trigger name="index">
        <Label>Standard</Label>
        <Icon sf="photo.stack" drawable="ic_menu_gallery" />
      </Tabs.Trigger>
      <Tabs.Trigger name="hdr">
        <Icon sf="sparkles" drawable="ic_menu_manage" />
        <Label>HDR</Label>
      </Tabs.Trigger>
    </Tabs>
  );
}
