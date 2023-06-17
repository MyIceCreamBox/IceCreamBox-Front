import { useState, useEffect, useRef } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Text, Pressable } from 'react-native';

import PropTypes from 'prop-types';
const NextBtn = (props) => {
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
  switch (props.type) {
    case 'goToWriteLetter':
      return (
        <View>
        <Pressable
          onPress={props.onPress}
          style={({ pressed }) => [
            styles.btn,
            pressed && { backgroundColor: '#F3D048' }
          ]}>
          <Text style={styles.text}>
            {props.title}
          </Text>
        </Pressable>
      </View>
      );
    case 'goToConfigLetter':
      return (
        <View>
          <Pressable
            onPress={props.onPress}
            style={({ pressed }) => [
              styles.btn,
              pressed && { backgroundColor: '#F3D048' }
            ]}>
            <Text style={styles.text}>
              {props.title}
            </Text>
          </Pressable>
        </View>
      );
    case 'goToSendLetter':
      return (
        <View>
          <Pressable
            onPress={props.onPress}
            style={({ pressed }) => [
              styles.btn,
              pressed && { backgroundColor: '#F3D048' }
            ]}>
            <Text style={styles.text}>
              {props.title}
            </Text>
          </Pressable>
        </View>
      );
    case 'goToFinishSend':
      return (
        <View>
          <Pressable
            onPress={props.onPress}
            style={({ pressed }) => [
              styles.btn,
              pressed && { backgroundColor: '#F3D048' }
            ]}>
            <Text style={styles.text}>
              {props.title}
            </Text>
          </Pressable>
        </View>
      );


  }

};
NextBtn.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  btn: {
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderRadius: 45,
    backgroundColor: '#FFE88F',
    
  },
  text:{
    fontFamily:'locus_sangsang'
  }
  // btnPressed: {
  //   backgroundColor: '#F3D048',
  // },

});
export default NextBtn;