import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: 'Universal Expo Image Components' }} />
      <ScrollView
        contentInsetAdjustmentBehavior="always"
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.description}>
          expo-image is a library for rendering AVIF, HEIC, WebP, SVG, (A)PNG,
          JPEG, and GIFs in your universal app, everywhere.
        </Text>
        <View style={styles.gallery}>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/router.avif')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>AVIF</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/logo-type-b.heic')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>HEIC</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/cli.webp')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>WebP</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/sdk.svg')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>SVG</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/snack.png')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>PNG</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/client.jpg')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>JPEG</Text>
            </View>
          </View>
        </View>
        <View style={styles.gallery}>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/router.avif')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>AVIF</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/logo-type-b.heic')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>HEIC</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/cli.webp')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>WebP</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/sdk.svg')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>SVG</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/snack.png')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>PNG</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/client.jpg')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>JPEG</Text>
            </View>
          </View>
        </View>
        <View style={styles.gallery}>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/router.avif')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>AVIF</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/logo-type-b.heic')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>HEIC</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/cli.webp')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>WebP</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/sdk.svg')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>SVG</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/snack.png')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>PNG</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../../assets/images/client.jpg')}
                contentFit="contain"
                style={styles.image}
              />
              <Text style={styles.label}>JPEG</Text>
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
    alignItems: 'flex-start',
    padding: 18,
    justifyContent: 'space-between',
  },
  description: {
    marginBottom: 20,
  },
  gallery: {
    alignSelf: 'stretch',
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
    marginTop: 'auto',
    paddingTop: 20,
  },
});
