import { ImageBackground } from 'react-native';
import ellipse from '../../../assets/imgs/Ellipse.png';
import { StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { width, height } from '../../global/dimension';

// const Ellipse = () => {
//   return <Image source={ellipse} style={styles.container} />;
// };

const Ellipse = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  async function loadFonts() {
    await Font.loadAsync({
      locus_sangsang: require('../../../assets/fonts/locus_sangsang.ttf'),
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator while the fonts are being loaded
  }

  return (
    <ImageBackground
      source={ellipse}
      style={styles.container}
      resizeMode="contain"
    >
      <Text style={styles.write}>3개</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.103,
    height: height * 0.047,
    aspectRatio: 1 / 1,
    // resizeMode: 'contain',
    position: 'absolute',
    marginTop: height * 0.78 * 0.5,
    right: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  write: {
    fontSize: width * 0.038,
    fontFamily: 'locus_sangsang',
  },
});

export default Ellipse;
