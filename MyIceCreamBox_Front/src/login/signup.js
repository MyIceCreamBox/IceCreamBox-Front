import Button from "../component/Button";
import DoubleCheckBtn from "./doubleCheck_btn";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View, Keyboard,KeyboardAvoidingView, Platform, Pressable, ScrollView } from "react-native";
import Input, { KeyboardTypes, ReturnKeyTypes } from "./input";
import * as Font from "expo-font";
import { useState, createRef, useEffect} from "react";
import {width, height } from '../global/dimension';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

    const navigation = useNavigation();

    //아이디, 비밀번호, 비밀번호 확인,닉네임 저장할 상태 변수
    const [email, setEmail] = useState('');
    const [pw, setPW] = useState('');
    const [checkPW, setCheckPW]= useState('');
    const [name, setName] = useState('');

    const emailInputRef = createRef();
    const pwInputRef = createRef();
    const checkPWInputRef = createRef();
    const nameInputRef = createRef();

    // 로그인 버튼 Press => Login 컴포넌트
    // const onPress = () => navigation.navigate('Login');

    // 확인 버튼 Press
    // const onSubmit = () => {
    //     navigation.navigate('Login');
    //     Keyboard.dismiss();
    //     Alert.alert({email},{pw},{name});
    // }

    // 중복 확인 버튼 Press
    // const onDoubleCheck = () => {
    //     if({pw}=={checkPW}) 
    // }

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

    return(
        
        <KeyboardAvoidingView 
            behavior={Platform.select({ios:'padding'})}
            style={styles.container}
        > 
            <ScrollView >
            <Pressable style={styles.container} onPress={()=>Keyboard.dismiss()}>
                <StatusBar style="auto"/>
                <View style={styles.header}>
                    <Text
                        style={[styles.basicText,styles.title]}>
                        회원가입
                    </Text>
                </View>

                <View style={{top:'14.19%'}}>
                    <View style={[styles.input]}>
                        <View>
                            <Input 
                                title={"아이디"}
                                keyboardType={KeyboardTypes.EMAIL}
                                returnKeyType={ReturnKeyTypes.NEXT}
                                value={email}
                                onChangeText={(email)=>{setEmail(email.trim())}}
                                ref={emailInputRef}
                                />
                        </View>
                        <View>
                            <Input 
                                title={"비밀번호"}
                                keyboardType={KeyboardTypes.DEFAULT}
                                returnKeyType={ReturnKeyTypes.NEXT}
                                secureTextEntry
                                value={pw}
                                onChangeText={(pw)=>{setPW(pw.trim())}}
                                ref={pwInputRef}
                                />
                        </View>
                        <View>
                            <Input 
                                title={"비밀번호 확인"}
                                keyboardType={KeyboardTypes.DEFAULT}
                                returnKeyType={ReturnKeyTypes.NEXT}
                                secureTextEntry
                                value={checkPW}
                                onChangeText={
                                    (checkPW)=>{setCheckPW(checkPW.trim())}
                                }
                                ref={checkPWInputRef}

                            />
                                  <View style={styles.errorText}>
                                    {pw !== checkPW ? (
                                        <Text style={styles.errorText}>
                                            *비밀번호가 일치하지 않습니다.
                                        </Text>
                                    ):
                                    <Text style={styles.errorText}>비밀번호가 일치합니다</Text>}
                                </View>
                        </View>
                        <View>
                            <Input 
                                title={"닉네임"}
                                keyboardType={KeyboardTypes.DEFAULT}
                                returnKeyType={ReturnKeyTypes.DONE}
                                value={name}
                                maxLength={15}
                                onChangeText={(name)=>{setName(name.trim())}}
                                ref={nameInputRef}
                                />
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={{flexDirection:'row-reverse'}}>
                        <DoubleCheckBtn  
                            color='#FF6969'
                            buttonStyle={[
                                {width: width*0.3 ,
                                height: height*0.04,
                                marginBottom: '18%'}]}
                            title='중복 확인'
                            onPress={() => navigation.navigate('Login')}/>
                    </View>
                    <View style={styles.submit}>
                        <Button
                            color='rgba(255, 232, 143, 1)'
                            buttonStyle={[
                                {width: width*0.6 ,
                                height: height*0.06,
                                margin:'0%'}]}
                            title='확인'
                            onPress={() => navigation.navigate('Login')}/>       
                    </View>              
                </View>
            </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems:'center',
        width:width, 
        height:height
    },
    header:{
        top:'10.9%', 
        width : width * 0.346 ,
        height : height * 0.056
    },
    basicText:{
        fontFamily: 'locus_sangsang',
        fontStyle: 'normal',
        color: '#000000',
        textAlign: 'center'
    },
    title:{
        fontSize: 40,
    }
    ,text:{
        fontSize: 20,
    },
    input:{
        width:width * 0.88, 
        height : height*0.14
    },
    inputText:{
        padding:5,
        borderColor: '#FF6969',
        borderRadius: 20,
        borderWidth: 2,
        height: '60%'
    },
    errorText:{
        marginRight: '4%',
        fontFamily: 'locus_sangsang',
        fontStyle: 'normal',
        color: '#FF6969',
        textAlign: 'center',
        backgroundColor:'black',
        fontSize: 10
    },
    footer:{
        top:'54.8%', 
        width:width * 0.88, 
        height : height*0.14
    },
    submit:{
        width:width * 0.88, 
        flexDirection:'row', 
        justifyContent:'center'
    }

});

export default SignUp;