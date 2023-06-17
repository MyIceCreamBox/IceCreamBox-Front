import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Text } from 'react-native';
import BackBtn from '../components/BackBtn';
import Explanation from '../components/Explanation';
import NextBtn from '../components/NextBtn';
import RedBorderBox from '../components/RedBorderBox';
import axios from 'axios';


// eslint-disable-next-line react/prop-types
const ConfigLetterScreen = ({ route }) => {
  const navigation = useNavigation();
  // eslint-disable-next-line react/prop-types
  const { receiverName, writer, letter, iceType } = route.params;
  // function sendLetter(){
  //   axios({
  //     method:'get',
  //     url: 'http://ec2-13-209-138-31.ap-northeast-2.compute.amazonaws.com:8080/gifts/send/'+receiverName,
  //     data:{
  //       "iceCreamName":iceType,
  //       "senderNickname":writer,
  //       "message":letter
  //     }
  //   })
  //   .then(function(resp){
  //     if(resp.data.description==null){
  //       console.log('보내기 성공')
  //     }else{
  //       console.log('보내기 실패')
  //     }
  //   })
  //   .catch(function (err) {
  //     console.log(`Error Message: ${err}`);
  //   });
  // }

  return (
    <View style={styles.container}>
      <View style={styles.containerTop1}>
        <BackBtn type='goToWriteLetter' onPress={() => navigation.navigate('WriteLetterPage',
          {
            receiverName: receiverName,
            selectedIcecream: iceType,
          }
        )}></BackBtn>
      </View>
      <View style={styles.containerTop2}>

        <Image source={require('../../../assets/imgsForSendpage/giftBox.png')} style={styles.image} />
        <Explanation nickname={receiverName} contents='에게 아이스크림을 보낼까요?'></Explanation>
      </View>
      <View style={styles.containerMid}>
        <RedBorderBox type='img' iceType={iceType} style={styles.minItem}></RedBorderBox>
        <View style={styles.containerMidInner}>

          <Text style={styles.contents}>
            {letter}
          </Text>

          <Text style={styles.writer}>
            {writer}
          </Text>
        </View>


      </View>

      <View style={styles.containerBottom}>

        <NextBtn title='확인' type='goToFinishSend' onPress={() => {
          //sendLetter()
          navigation.navigate('FinshSendPage', {receiverName: receiverName,iceType: iceType,})
          }}></NextBtn>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',

  },
  containerTop1: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',

  },
  containerTop2: {
    flex: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerMid: {
    flex: 11,
    backgroundColor: '#FFDDDD',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginHorizontal: '10%',

  },
  containerMidInner: {
    height: '65%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  minItem: {
    flex: 1,

  },
  containerBottom: {
    flex: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents: {
    paddingTop: '3%',
    paddingHorizontal: '10%',
    backgroundColor:'#fff',
    marginHorizontal:'5%',
    borderRadius:20,
    height:'80%',
    width:280
    
  },
  writer: {
    paddingBottom:'6%',
    paddingHorizontal: '15%',
    
  }


});

export default ConfigLetterScreen;
