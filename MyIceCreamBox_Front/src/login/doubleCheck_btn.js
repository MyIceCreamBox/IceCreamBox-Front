import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import * as Font from 'expo-font';

Font.loadAsync({"locus_sangsang": require('icecream_box/assets/fonts/locus_sangsang.otf'),});

const DoubleCheckBtn = ({title, onPress, buttonStyle}) => {
    return (
        <Pressable
            style={({pressed})=>[
                styles.button,
                {backgroundColor:'#FF6969'},
                pressed && {backgroundColor:'#FF6969'},
                buttonStyle,
            ]}
            onPressOut={onPress}
            >
                <Text style={styles.title}>{title}</Text>
        </Pressable>
        );
};

DoubleCheckBtn.proptypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset:{
            width: 0,
            height:2,
          },
          shadowOpacity: 6,
          shadowRadius: 27,
          shadowColor: 'rgba(29, 29, 29, 0.25)',
          borderRadius: 27,
      
          fontColor: '#ffffff',
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'locus_sangsang',
        textAlign: 'center'
    }
})


export default DoubleCheckBtn;