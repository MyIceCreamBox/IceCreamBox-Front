import { View, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icecream from './Icecream';

const RedBorderBox = (props) => {


    switch (props.type) {
        case 'img':
            return (

                <View>
                    <View style={styles.imgBox}>
                        {/* eslint-disable-next-line react/prop-types */}
                        <Icecream iceType={props.iceType}></Icecream>
                    </View>
                </View>
            );
        case 'TextField':
            return (
                <View style={styles.container}>

                    <TextInput style={styles.textFieldBox}
                        placeholder='작성자의 이름을 입력해 주세요.'
                        maxLength={15}
                        value={props.value}
                        onChangeText={props.onChangeText}
                    ></TextInput>
                </View>
            );
        case 'InputReceiver':
            return (
                <View style={styles.container}>
                    <TextInput style={styles.InputReceiver}
                        placeholder='받는 친구의 이름을 입력해주세요.'
                        maxLength={15}
                        value={props.value}
                        onChangeText={props.onChangeText}
                    ></TextInput>
                </View>
            );
        case 'TextArea':
            return (
                <View style={styles.container}>
                    <TextInput style={styles.textAreaBox}
                        placeholder='내용을 입력해주세요.'
                        multiline
                        numberOfLines={10}
                        maxLength={100}
                        textAlignVertical='top'
                        value={props.value}
                        onChangeText={props.onChangeText}
                    ></TextInput>
                </View>
            );

        default:
            return (
                <View style={styles.container}>

                    <TextInput style={styles.textFieldBox} placeholder='작성자의 이름을 입력해 주세요.'></TextInput>

                </View>
            );
    }

};
RedBorderBox.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    imgBox: {
        marginTop: 10,
        borderWidth: 2.5,
        borderColor: '#FF6969',
        borderRadius: 20,
        padding: 5,
        marginBottom: 10,

    },
    textFieldBox: {

        width: '100%',
        color: '#393939',
        borderWidth: 2,
        borderColor: '#FF6969',
        borderRadius: 15,
        paddingHorizontal: 80,
        paddingVertical: 5,

    },
    textAreaBox: {
        width: '100%',
        color: '#393939',
        borderWidth: 2.5,
        borderColor: '#FF6969',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    InputReceiver: {

        width: '100%',
        color: '#393939',
        borderWidth: 2,
        borderColor: '#FF6969',
        borderRadius: 15,
        paddingHorizontal: '15%',
        paddingVertical: 5,

    },


});
export default RedBorderBox;