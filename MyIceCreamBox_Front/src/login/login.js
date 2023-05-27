import Button from '../component/Button';
import SignUpButton from './signup_btn';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, View, Keyboard, Pressable,} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {useEffect, useState, useRef} from 'react';
import Input, { KeyboardTypes, ReturnKeyTypes } from './input';
import {width, height } from '../global/dimension';
import * as Font from 'expo-font';

const Login = () => {
  const navigation = useNavigation();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  
    //아이디, 비밀번호 저장할 상태 변수
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    const passwordRef = useRef();

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

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
      <Pressable
        style={[styles.container]}
        onPress={() => Keyboard.dismiss()}
      >
        <StatusBar style="auto" />
        <View style={[styles.view]}>
          <Image
            source={require('icecream_box/assets/login/login_title.png')}
            style={[styles.title]}
          />
        </View>

        <View style={{ top: '29.6%' }}>
          <View style={styles.input}>
            <View style={styles.text}>
              <Input
                title={'아이디'}
                keyboardType={KeyboardTypes.EMAIL}
                returnKeyType={ReturnKeyTypes.NEXT}
                onSubmitEditing={()=>passwordRef.current.focus()}
                value={id}
                onChangeText={text=>setID(text)}
              />
            </View>
            <View style={styles.text}>
              <Input
                title={'비밀번호'}
                returnKeyType={ReturnKeyTypes.DONE}
                secureTextEntry
                value={pw}
                onChangeText={text=>setPW(text)}
                ref={passwordRef}
              />
            </View>
          </View>
        </View>

        <View style={{ top: '48.7%' }}>
          <Button
            color="rgba(255, 232, 143, 1)"
            buttonStyle={{ width: width * 0.6, height: height * 0.06 }}
            title="로그인"
            onPress={() => navigation.navigate('LoggedInMainpage')} // 로그인 버튼 클릭 시 loggedInMainpage로 이동하도록 임시로 설정했습니다
          ></Button>
          <SignUpButton
            buttonStyle={{ width: width * 0.6, height: height * 0.06 }}
            title="회원가입"
            onPress={() => navigation.navigate('SignUp')}
          ></SignUpButton>
        </View>
      </Pressable>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: width,
    height: height
  },
  view:{
    top: '17.2%', 
    width: width * 0.78, 
    height: height * 0.06,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    color: '#000000',
  },
  input:{
    width: width * 0.88, 
    height: height * 0.14,
    fontFamily: 'locus_sangsang'
  },
  inputText: {
    padding: 5,
    borderColor: '#FF6969',
    borderRadius: 20,
    borderWidth: 2,
    height: '60%',
  },
});

export default Login;
