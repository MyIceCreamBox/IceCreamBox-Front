import { Image } from 'react-native';
// 굳이 딸기콘 이유?
import Strawberry from '../../../assets/imgs/strawberry.png';
import { StyleSheet } from 'react-native';
import { width, height } from '../../global/dimension';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Have = () => {
  return <Image source={Strawberry} style={styles.con} />;
};

const styles = StyleSheet.create({
  con: {
    width: width * 0.205,
    height: height * 0.105,
    // aspectRatio: 80 / 126,
    resizeMode: 'contain',
    // top: hp('1.8%'),
  },
});

export default Have;
