import { Image } from 'react-native';
import heart from '../../../assets/imgs/Heart.png';
import { StyleSheet } from 'react-native';
import { width, height } from '../../global/dimension';

const Heart = () => {
  return <Image source={heart} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.062,
    height: height * 0.028,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{ rotate: '3.57vdeg' }],
    marginTop: height * 0.78 * 0.685,
    right: width * 0.31,
  },
});

export default Heart;
