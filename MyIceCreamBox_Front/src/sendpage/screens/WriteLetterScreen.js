import { useNavigation } from '@react-navigation/native';
import { Alert,StyleSheet, View } from 'react-native';
import BackBtn from '../components/BackBtn';
import Title from '../components/Title';
import Explanation from '../components/Explanation';
import NextBtn from '../components/NextBtn';
import RedBorderBox from '../components/RedBorderBox'; import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const WriteLetterScreen = ({ route }) => {
  const navigation = useNavigation();
  // eslint-disable-next-line react/prop-types
  const { receiverName, selectedIcecream } = route.params; // get the selected ice cream

  const [writer, setWriter] = useState('');
  const [letter, setLetter] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerTop1}>
        <BackBtn type='goToSelectLetter' onPress={() => navigation.navigate('SelectIcecreamPage')}></BackBtn>
      </View>
      <View style={styles.containerTop2}>

        <Title title='아이스크림 선택'></Title>
        <Explanation nickname={receiverName} contents='에게 아이스크림과 함께 전할 말이 있나요?'></Explanation>
      </View>
      <View style={styles.containerMid}>
        <RedBorderBox type='img' iceType={selectedIcecream} style={styles.minItem}></RedBorderBox>
        <RedBorderBox
          type='TextField'
          style={styles.minItem}
          value={writer}
          onChangeText={(text) => setWriter(text)}
        >
        </RedBorderBox>
        <View style={{ width: '100%' }}>
          <RedBorderBox
            type='TextArea'
            style={styles.minItem}
            value={letter}
            onChangeText={(text) => setLetter(text)}
          ></RedBorderBox>
        </View>

      </View>

      <View style={styles.containerBottom}>
      <NextBtn title='보내기' type='goToConfigLetter'
        onPress={() => {
            if (!writer.trim() || !letter.trim()) {
                let missingField = '';
                if (!writer.trim() && !letter.trim()) {
                    missingField = '작성자와 내용';
                } else if (!writer.trim()) {
                    missingField = '작성자';
                } else {
                    missingField = '내용';
                }
                Alert.alert(`${missingField}을(를) 입력해주세요.`);
            } else {
                navigation.navigate('ConfigLetterScreenPage', {
                    receiverName: receiverName,
                    writer: writer,
                    letter: letter,
                    iceType: selectedIcecream,
                });
            }
        }}>
    </NextBtn>
        
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginHorizontal: '3%',

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


});

export default WriteLetterScreen;