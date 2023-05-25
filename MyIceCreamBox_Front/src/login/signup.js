import Button from "../component/Button";
import DoubleCheckBtn from "./doubleCheck_btn";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View,useWindowDimensions, Keyboard,KeyboardAvoidingView, Platform, Pressable, Alert, ScrollView } from "react-native";
import Input, { KeyboardTypes, ReturnKeyTypes } from "./input";
import * as Font from "expo-font";
import { useState, createRef } from "react";

const SignUp = ({navigation}) => {

    // 화면 변수
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

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
    const onPress = () => navigation.navigate('Login');

    // 확인 버튼 Press
    const onSubmit = () => {
        Keyboard.dismiss();
        Alert.alert({email},{pw},{name});
    }

    // 중복 확인 버튼 Press
    // const onDoubleCheck = () => {
    //     if({pw}=={checkPW}) 
    // }
    Font.loadAsync({"locus_sangsang": require('icecream_box/assets/fonts/locus_sangsang.otf'),});
    

    return(
        
        <KeyboardAvoidingView 
            behavior={Platform.select({ios:'padding'})}
            style={[{width:screenWidth, height:screenHeight},styles.container, ]}
        > 
            <ScrollView >
            <Pressable style={[styles.container, {width:screenWidth, height:screenHeight}]} onPress={()=>Keyboard.dismiss()}>
                <StatusBar style="auto"/>
                <View style={{ top:'10.9%', width : screenWidth * 0.346 ,height : screenHeight * 0.056}}>
                    <Text
                        style={[styles.basicText,styles.title]}>
                        회원가입
                    </Text>
                </View>

                <View style={{top:'14.19%'}}>
                    <View style={[styles.input, {width:screenWidth * 0.88, height : screenHeight*0.14}]}>
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
                                returnKeyType={ReturnKeyTypes.DONE}
                                value={name}
                                maxLength={15}
                                onChangeText={(name)=>{setName(name.trim())}}
                                ref={nameInputRef}
                                />
                        </View>
                    </View>
                </View>

                <View style={{top:'54.8%', width:screenWidth * 0.88, height : screenHeight*0.14}}>
                    <View style={{flexDirection:'row-reverse'}}>
                        <DoubleCheckBtn  
                            color='#FF6969'
                            buttonStyle={[
                                {width: screenWidth*0.3 ,
                                height: screenHeight*0.04,
                                marginBottom: '18%'}]}
                            title='중복 확인'
                            onPress={onSubmit}/>
                    </View>
                    <View style={{width:screenWidth * 0.88, flexDirection:'row', justifyContent:'center'}}>
                        <Button
                            color='rgba(255, 232, 143, 1)'
                            buttonStyle={[
                                {width: screenWidth*0.6 ,
                                height: screenHeight*0.06,
                                margin:'0%'}]}
                            title='확인'
                            onPress={onSubmit}/>       
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
    }

});

export default SignUp;