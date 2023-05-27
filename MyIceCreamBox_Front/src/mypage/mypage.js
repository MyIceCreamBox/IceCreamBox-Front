import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Back from './title/back';
import IceTitle from './title/iceTitle';
import Have from './header/have';
import Pie from './header/piechart';
import DBar from './content/dBar';
import PBar from './content/pBar';
import OBar from './content/oBar';
import Strawberry from './content/strawberry';
import { width, height } from '../global/dimension';

const IceBox = () => {
  const navigation = useNavigation();

  const getChartData = () => {
    const coneCount = 1; // Replace with the actual count of OBar components
    const stickCount = 5; // Replace with the actual count of PBar components
    const etcCount = 0; // Replace with the actual count of Strawberry components

    const data = [
      {
        name: 'cone',
        population: coneCount,
        color: '#B5F562',
      },
      {
        name: 'stick',
        population: stickCount,
        color: '#ffdddd',
      },
      {
        name: 'etc',
        population: etcCount,
        color: '#609FFF',
      },
    ];

    return data;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <Back onPress={() => navigation.navigate('LoggedInMainpage')} />
        <IceTitle />
      </View>
      <View style={styles.header}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: '#797979',
          }}
        >
          ${'{닉네임}'}
        </Text>
        <View style={styles.pinkbox}>
          <Have />
          <Pie data={getChartData()} />
        </View>
        <Text style={{ marginTop: height * 0.021 }}></Text>
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          <View style={styles.iceList}>
            <DBar />
            <Strawberry />
          </View>
          <View style={styles.iceList}>
            <PBar onPress={() => {}} />
            <OBar />
          </View>
          <View style={styles.iceList}>
            <PBar />
            <OBar />
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {},
  scroll: {
    width: width * 0.821,
    height: height * 0.533,
    backgroundColor: '#FFFFEE',
  },
  pinkbox: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width * 0.877,
    height: height * 0.208,
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#FF6969',
    borderRadius: 20,
    marginTop: height * 0.015,
  },
  beigeBox: {
    width: width * 0.821,
    height: height * 0.533,
    backgroundColor: '#AAACCC',
  },
  iceList: {
    flexDirection: 'row',
    margin: width * 0.077,
    justifyContent: 'space-evenly',
  },
});

export default IceBox;
