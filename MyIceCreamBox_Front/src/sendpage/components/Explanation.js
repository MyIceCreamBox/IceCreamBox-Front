import { useState, useEffect, useRef } from "react";
import * as Font from "expo-font";

import { Text, View,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const Explanation = (props) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => { loadFonts(); }, []);
  async function loadFonts() {
    await Font.loadAsync({
      locus_sangsang: require('../../../assets/fonts/locus_sangsang.ttf'),
      recipe_korea:require('../../../assets/fonts/RecipekoreaOTF.ttf'),
    });
    setFontsLoaded(true);
  }
  if (!fontsLoaded) { return null; }
  return (
    <View>
      <Text style={styles.text}>{props.nickname}{props.contents}</Text>
    </View>
  );
};
Explanation.propTypes = {
    nickname: PropTypes.string,
    contents: PropTypes.string,
};

const styles = StyleSheet.create({
  text: {
    fontSize:15,
    marginBottom:30,
    fontFamily:'locus_sangsang',
    color:'#393939',
  },

});
export default Explanation;