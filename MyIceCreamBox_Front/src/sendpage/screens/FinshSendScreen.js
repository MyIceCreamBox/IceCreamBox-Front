import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Text } from 'react-native';
import Explanation from '../components/Explanation';
import NextBtn from '../components/NextBtn';
import RedBorderBox from '../components/RedBorderBox';
// eslint-disable-next-line react/prop-types
const FinshSendScreen = ({ route }) => {
  const navigation = useNavigation();
  // eslint-disable-next-line react/prop-types
  const { receiverName, iceType } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.containerTop2}>
        <Image source={require('../../../assets/imgsForSendpage/giftBox.png')} style={styles.image} />
        <Text>두근두근</Text>
        <Explanation nickname={receiverName} contents='에게 아이스크림을 보냈습니다!'></Explanation>
      </View>
      <View style={styles.containerMid}>
        <RedBorderBox type='img' iceType={iceType} style={styles.minItem}></RedBorderBox>
        <View style={styles.containerMidInner}>
          <Text style={styles.contents}>
            {receiverName}에게
          </Text>

        </View>
      </View>

      <View style={styles.containerBottom}>
        <NextBtn title='확인' type='goToWriteLetter' onPress={() => navigation.navigate('SelectIcecreamPage')}></NextBtn>
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

  containerTop2: {
    paddingTop: '35%',
    flex: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '3%',
  },
  containerMid: {
    flex: 11,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginHorizontal: '3%',

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
    paddingHorizontal: '15%',
  },
  writer: {
    paddingBottom: '0%',
    paddingHorizontal: '15%',
  }


});

export default FinshSendScreen;