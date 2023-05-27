// import { StyleSheet } from 'react-native';
// import { width, height } from '../../../global/dimension';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

const Bar = () => {
  return (
    <Progress.Bar
      progress={0.3}
      width={200}
      height={10}
      // marginTop={10}
      color={'#FF0044'}
      borderWidth={0}
    />
  );
};

// const styles = StyleSheet.create({
//   container: {
//     // width: width / 1.5,
//   },
// });

export default Bar;
