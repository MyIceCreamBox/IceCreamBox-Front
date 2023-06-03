import { View, FlatList, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { width, height } from '../../global/dimension';

import DBar from './dBar';
import PBar from './pBar';
import OBar from './oBar';

const IceList = () => {
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
    { id: '7', name: 'Item 7' },
    { id: '8', name: 'Item 8' },
    { id: '9', name: 'Item 9' },
  ];
  console.log(data[0].id);

  const renderItem = ({ item }) => (
    <View style={styles.iceList}>
      {item.id === '1' ? (
        <OBar />
      ) : item.id === '2' ? (
        <DBar />
      ) : item.id === '3' ? (
        <PBar />
      ) : item.id === '4' ? (
        <DBar />
      ) : item.id === '5' ? (
        <PBar />
      ) : item.id === '6' ? (
        <OBar />
      ) : item.id === '7' ? (
        <OBar />
      ) : item.id === '8' ? (
        <PBar />
      ) : item.id === '9' ? (
        <DBar />
      ) : (
        <Text>없어요 없다구요</Text>
      )}
    </View>
  );

  return (
    <View style={styles.back}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: width * 0.821,
    height: height * 0.533,
    borderRadius: 20,
    backgroundColor: '#FFFFEE',
    alignItems: 'center',
  },
  iceList: {
    // margin: width * 0.077,
    margin: width * 0.1,
    justifyContent: 'space-evenly',
  },
});

export default IceList;
