import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: 'Universal Expo Image Components' }} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.description}>
          expo-image is a library for rendering AVIF, HEIC, WebP, SVG, (A)PNG,
          JPEG, and GIFs in your universal app, everywhere.
        </Text>
        <View style={styles.gallery}>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/router.avif' },
                  default: require('../assets/images/router.avif'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>AVIF</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/logo-type-b.heic' },
                  default: require('../assets/images/logo-type-b.heic'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>HEIC</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/cli.webp' },
                  default: require('../assets/images/cli.webp'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>WebP</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/sdk.svg' },
                  default: require('../assets/images/sdk.svg'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>SVG</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/snack.png' },
                  default: require('../assets/images/snack.png'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>PNG</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/client.jpg' },
                  default: require('../assets/images/client.jpg'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>JPEG</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/hdr.jpg' },
                  default: require('../assets/images/hdr.jpg'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>JPEG (HDR)</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={Platform.select({
                  web: { uri: '../assets/images/hdr.heic' },
                  default: require('../assets/images/hdr.heic'),
                })}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>HEIC (HDR)</Text>
            </View>
          </View>
        </View>
        <Text style={styles.footnote}>
          Made with Expo, Expo Router, and Expo Image. Runs universally on
          Android, iOS, and the web.
        </Text>
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
  footnote: {
    marginBottom: 20,
    marginTop: 20,
  },
});
