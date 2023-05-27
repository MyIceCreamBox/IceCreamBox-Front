import Button from '../component/Button';
import SignUpButton from './signup_btn';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
} from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from './input';
import * as Font from 'expo-font';

const Login = ({ navigation }) => {
  const screenWidth = useWindowDimensions().width;
  const screenHeight = useWindowDimensions().height;

  const onPress = () => navigation.navigate('SignUp');

  // useEffect(async() => {
  //     await Font.loadAsync({
  //         "locus_sangsang": require('icecream_box/assets/fonts/locus_sangsang.otf'),
  //     });
  //     setIsReady(true);
  // }, [])

  Font.loadAsync({
    locus_sangsang: require('icecream_box/assets/fonts/locus_sangsang.otf'),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'padding' })}
      style={[styles.container, { width: screenWidth, height: screenHeight }]}
    >
      <Pressable
        style={[styles.container, { width: screenWidth, height: screenHeight }]}
        onPress={() => Keyboard.dismiss()}
      >
        <StatusBar style="auto" />
        <View
          style={{
            top: '17.2%',
            width: screenWidth * 0.78,
            height: screenHeight * 0.06,
          }}
        >
          <Image
            source={require('icecream_box/assets/login/login_title.png')}
            style={[styles.title]}
          />
        </View>

        <View style={{ top: '29.6%' }}>
          <View
            style={[
              styles.input,
              { width: screenWidth * 0.88, height: screenHeight * 0.14 },
            ]}
          >
            <View style={styles.text}>
              <Input
                title={'아이디'}
                keyboardType={KeyboardTypes.EMAIL}
                returnKeyType={ReturnKeyTypes.NEXT}
              />
            </View>
            <View style={styles.text}>
              <Input
                title={'비밀번호'}
                returnKeyType={ReturnKeyTypes.DONE}
                secureTextEntry
              />
            </View>
          </View>
        </View>

        <View style={{ top: '48.7%' }}>
          <Button
            color="rgba(255, 232, 143, 1)"
            buttonStyle={[
              { width: screenWidth * 0.6, height: screenHeight * 0.06 },
            ]}
            title="로그인"
            onPress={() => navigation.navigate('LoggedInMainpage')} // 로그인 버튼 클릭 시 loggedInMainpage로 이동하도록 임시로 설정했습니다
          ></Button>
          <SignUpButton
            buttonStyle={[
              { width: screenWidth * 0.6, height: screenHeight * 0.06 },
            ]}
            title="회원가입"
            onPress={onPress}
          ></SignUpButton>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    color: '#000000',
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
