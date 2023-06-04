import { Pressable, Text, StyleSheet, Alert} from "react-native";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import { showToast } from "../component/Toast";
import axios from "axios";


const DoubleCheckBtn = ({title, onPress, buttonStyle, disabled, value}) => {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        loadFonts();
    }, []);

    async function loadFonts() {
        await Font.loadAsync({
        locus_sangsang: require('../../assets/fonts/locus_sangsang.ttf'),
        });
        setFontsLoaded(true);
    }

    if (!fontsLoaded) {
        return null;
    }

    function checkNickname(nickname) {
        axios({
            method: 'post',
            url: 'http://ec2-13-209-138-31.ap-northeast-2.compute.amazonaws.com:8080/users/nickname',
            data: {
              nickname: nickname,
            },
          }).then(function (resp) {
              if (resp.data.data !== null && resp.data.data != '') {
                if(resp.data.data.existence) {showToast(2)}
                else if(!resp.data.data.existence) {showToast(1)}
              } else {
                Alert.alert('닉네임 중복 확인 실패', resp.data.description);
              }
            })
            .catch(function (err) {
              console.log(`Error Message: ${err}`);
            });
      }

    return (
        <Pressable
            style={({pressed})=>[
                styles.button,
                {backgroundColor:'#FF6969'},
                pressed && {backgroundColor:'#FF6969'},
                buttonStyle,
            ]}
            value={value}
            onPress={checkNickname(value)}
            onPressOut={onPress}
            disabled={disabled}
            >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

DoubleCheckBtn.proptypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
    disabled: PropTypes.bool
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