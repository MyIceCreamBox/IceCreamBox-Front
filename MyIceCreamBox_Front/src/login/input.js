import { StyleSheet, Text, View, Platform,TextInput } from "react-native";
import PropTypes from 'prop-types'
import * as Font from 'expo-font';
import { useState } from "react";

export const KeyboardTypes = {
    DEFAULT: 'default',
    EMAIL:'email'
}

export const ReturnKeyTypes = {
    DONE: 'done',
    NEXT: 'next'
}

Font.loadAsync({"locus_sangsang": require('icecream_box/assets/fonts/locus_sangsang.otf'),});


const Input = ({title, maxLength ,keyboardType, returnKeyType, secureTextEntry, ref, value, useState}) => {
    return (
        <View 
            behavior={Platform.select({ios:'padding'})}
            style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.inputText}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={maxLength}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                secureTextEntry={secureTextEntry}
                ref={ref}
                onChangeText={useState}
                />
        </View>
    );
};

Input.defaultProps = {
    keyboardType: KeyboardTypes.DEFAULT,
    returnKeyType: ReturnKeyTypes.DONE
};

const styles = StyleSheet.create(
    {
        container:{
            width:'100%',
            height:'100%',
        },
        text:{
            fontStyle: 'normal',
            fontFamily: 'locus_sangsang',
            fontSize: 20,
            color: '#000000',
            left: '7%',
            marginBottom: '3%'
        },
        inputText:{
            padding:'5%',
            fontSize:16,
            fontFamily: 'locus_sangsang',
            borderColor: '#FF6969',
            borderRadius: 20,
            borderWidth: 2,
            height: '54%',
            marginBottom: '10%'
        }
    }
);

export default Input;