import { View } from 'react-native';
import { width, height } from '../../global/dimension';
import { PieChart } from 'react-native-chart-kit';

const Pie = ({ data }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PieChart
        data={data}
        width={width * 0.533}
        height={height * 0.15}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default Pie;
