import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: 'HDR Images' }} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.description}>
          HDR images have a wider range of colors and brightness than the
          standard dynamic range (SDR). Support for HDR is not yet ubiquitous.
          Libraries like SDWebImage do not support it and support in web
          browsers is inconsistent. If HDR works on this screen, you'll know it
          when you see it.
        </Text>
        <View style={styles.gallery}>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/hdr-avif.avif')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>AVIF (HDR)</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/hdr-heic.heic')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>HEIC (HDR)</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/hdr-png.png')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>PNG (HDR)</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/hdr-jpeg.jpg')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>JPEG (HDR)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 18,
  },
  description: {
    marginBottom: 20,
  },
  gallery: {
    alignSelf: 'stretch',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  item: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 64,
    height: 64,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
  },
});
