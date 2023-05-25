import ErrorBackground from "./page404_background";
import { useWindowDimensions, StyleSheet, View,Image, Text } from "react-native";
const LoadingPage = () => {

    const screenWidth = useWindowDimensions().width
    const screenHeight = useWindowDimensions().height
    return(
        <View style={{width: screenWidth, height: screenHeight, alignItems: 'center', justifyContent: 'center'}}>
            <ErrorBackground style={styles.bg}/>
            <Image 
                style={
                    [styles.ribbon, 
                    {transform: [{rotate:'-8.12deg'}]},
                    ]}
                source={require('../assets/loading_ribbon.png')}/>
            <Text style={styles.text}>LOADING ...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bg:{
        position:'absolute'
    },
    ribbon:{
        position:'absolute',
        left: '11.54%',
        right: '51.18%',
        top: '29.8%',
        bottom: '57.88%',
        
    },
    text:{
        position:'absolute',
        marginTop: '40%',
        fontSize: 28,
        fontWeight: 700,
        /* gray */
        color: '#686868',
    }
})
export default LoadingPage;