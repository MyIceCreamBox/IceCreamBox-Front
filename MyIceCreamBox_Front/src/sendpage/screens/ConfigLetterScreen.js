import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, Alert } from 'react-native';
import BackBtn from '../components/BackBtn';
import Explanation from '../components/Explanation';
import NextBtn from '../components/NextBtn';
import RedBorderBox from '../components/RedBorderBox';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line react/prop-types
const ConfigLetterScreen = ({ route }) => {

  var isSuccessed = true;
  function icetypeToIcename(icetype) {
    var iceName = '슈파두바';
    var iceSrc = require('../../../assets/imgsForSendpage/ice01.png');
    switch (icetype) {
      case 'ice01':
        iceSrc = require('../../../assets/imgsForSendpage/ice01.png');
        iceName = '이거먹으면나랑사귀는바';
        break;
      case 'ice02':
        iceSrc = require('../../../assets/imgsForSendpage/ice02.png');
        iceName = '이거먹으면에이쁠받는바';
        break;
      case 'ice03':
        iceSrc = require('../../../assets/imgsForSendpage/ice03.png');
        iceName = '이거먹으면안돼바';
        break;
      case 'ice04':
        iceSrc = require('../../../assets/imgsForSendpage/ice04.png');
        iceName = '흑마법사가만든저체온증바';
        break;
      case 'ice05':
        iceSrc = require('../../../assets/imgsForSendpage/ice05.png');
        iceName = '쿨복숭아쌍쌍바';
        break;
      case 'ice06':
        iceSrc = require('../../../assets/imgsForSendpage/ice06.png');
        iceName = '초콜릿태닝쌍쌍바';
        break;
      case 'ice07':
        iceSrc = require('../../../assets/imgsForSendpage/ice07.png');
        iceName = '물고기도반한에어콘';
        break;
      case 'ice08':
        iceSrc = require('../../../assets/imgsForSendpage/ice08.png');
        iceName = '여름이온지얼마나오렌지콘';
        break;
      case 'ice09':
        iceSrc = require('../../../assets/imgsForSendpage/ice09.png');
        iceName = '베리베리더워콘';
        break;

    }
    return iceName;
  }
  const navigation = useNavigation();
  // eslint-disable-next-line react/prop-types
  const { receiverName, writer, letter, iceType } = route.params;

  async function sendLetter() {
    isSuccessed = true;
    await AsyncStorage.getItem('token')
      .then((token) => {
        if (token) {
          return axios({
            method: 'post',
            url: 'http://ec2-13-209-138-31.ap-northeast-2.compute.amazonaws.com:8080/gifts/send',
            headers: {
              Authorization: `${token}`, // 헤더에 토큰을 추가
            },
            data: {
              "iceCreamName": icetypeToIcename(iceType),
              "senderNickname": writer,
              "receiverNickname": receiverName,
              "message": letter,
            }
          })
        } else {
          console.log('토큰이 없습니다.');
          isSuccessed = false;
        }
      })
      .then(function (resp) {
        if (resp && resp.data.description == null) {
          console.log('보내기 성공' + resp.data.data)
          isSuccessed = true;
        } else {
          console.log(`아이스크림:${iceType}, 보내는사람:${writer} 받는사람:${receiverName}`)
          console.log('보내기 실패')
          isSuccessed = false;
        }
      })
      .catch(function (err) {
        console.log(err.response);
        isSuccessed = false;
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTop1}>
        <BackBtn type='goToWriteLetter' onPress={() => {
          navigation.navigate('WriteLetterPage',
            {
              receiverName: receiverName,
              selectedIcecream: iceType,
            }
          )
        }

        }></BackBtn>
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
        <NextBtn title='확인' type='goToFinishSend' onPress={async () => {
          await sendLetter();
          if (isSuccessed) {
            navigation.navigate('FinshSendPage', { receiverName: receiverName, iceType: iceType, })
          } else {
            Alert.alert('받는 친구를 찾을 수 없어요.')
          }
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
    backgroundColor: '#fff',
    marginHorizontal: '5%',
    borderRadius: 20,
    height: '70%',
    width: 280

  },
  writer: {
    paddingBottom: '15%',
    paddingHorizontal: '15%',

  }


});

export default ConfigLetterScreen;
