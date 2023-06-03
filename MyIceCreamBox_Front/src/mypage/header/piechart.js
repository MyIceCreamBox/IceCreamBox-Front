import { View } from 'react-native';
import { width, height } from '../../global/dimension';
import { PieChart } from 'react-native-chart-kit';

const Pie = () => {
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PieChart
        data={getChartData()}
        width={width * 0.533}
        height={height * 0.15}
        chartConfig={{
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
