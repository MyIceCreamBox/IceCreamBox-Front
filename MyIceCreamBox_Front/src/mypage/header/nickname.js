import axios from 'axios';
import { View, Text } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const NickName = () => {
  const [nickname, setNickName] = useState('');

  const navigation = useNavigation();


  AsyncStorage.getItem('token').then((token) => {
    if (token) {
      axios({
        method: 'get',
        url: 'http://ec2-13-209-138-31.ap-northeast-2.compute.amazonaws.com:8080/users/my-page',
        headers: {
          Authorization: `${token}`,
        },
      })
        .then(function (res) {
          if(res.data.statusCode==404){
            navigation.navigate('Page404');
          }else{
            setNickName(res.data.data.nickname);
            AsyncStorage.setItem('nickname', res.data.data.nickname);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

  return (
    <View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          color: '#797979',
        }}
      >
        {`${nickname}`}
      </Text>
    </View>
  );
};
export default NickName;
