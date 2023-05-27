import { Text, Pressable, StyleSheet, View } from 'react-native';
import { width, height } from '../../global/dimension';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

// eslint-disable-next-line react/prop-types
const ButtonSend = ({ title, onPress }) => {
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
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.count}>보낼 수 있는 기회 : 5회</Text>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: '#FFDDDD',
          },
          pressed && {
            backgroundColor: '#FFC2C2',
          },
        ]}
        onPressOut={onPress}
      >
        <Text style={styles.word}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.359,
    height: height * 0.062,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#393939',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 0.5,
    shadowOpacity: 0.3,
  },
  word: {
    fontSize: width * 0.051,
    fontFamily: 'locus_sangsang',
  },
  count: {
    fontSize: width * 0.024,
    fontFamily: 'locus_sangsang',
    bottom: height * 0.005,
  },
});

export default ButtonSend;
