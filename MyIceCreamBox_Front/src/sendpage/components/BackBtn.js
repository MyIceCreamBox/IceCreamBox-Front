import { View, Image, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const BackBtn = (props) => {

    switch (props.type) {
        case 'goToSelectLetter':
            return (
                <View>
                   <Pressable onPress={props.onPress}>
                        <Image source={require('../../../assets/imgsForSendpage/back.png')} style={styles.image} />
                    </Pressable>
                </View>
            );
        case 'goToWriteLetter':
            return (
                <View>
                    <Pressable onPress={props.onPress}>
                        <Image source={require('../../../assets/imgsForSendpage/back.png')} style={styles.image} />
                    </Pressable>
                </View>
            );
            
        case 'goToConfigLetter':
            return (
                <View>
                    <Pressable onPress={props.onPress}>
                        <Image source={require('../../../assets/imgsForSendpage/back.png')} style={styles.image} />
                    </Pressable>
                </View>
            );
        

    }
  
};
BackBtn.propTypes = {
    onPress:PropTypes.func,
    type:PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    image: {
        width: 30,
        height: 30,
    }
});
export default BackBtn;