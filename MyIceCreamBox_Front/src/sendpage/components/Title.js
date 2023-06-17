import { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as Font from "expo-font";
const Title = (props) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => { loadFonts(); }, []);
  async function loadFonts() {
    await Font.loadAsync({
      locus_sangsang: require('../../../assets/fonts/locus_sangsang.ttf'),
      recipe_korea: require('../../../assets/fonts/RecipekoreaOTF.ttf'),
    });
    setFontsLoaded(true);
  }
  if (!fontsLoaded) { return null; }

  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
Title.propTypes = {
  title: PropTypes.string,
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: 'recipe_korea',
    color: '#393939',

  },

});
export default Title;