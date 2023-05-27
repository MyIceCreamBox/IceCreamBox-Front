import { View } from 'react-native';
// import { width } from '../../global/dimension';
import { StackedBarChart } from 'react-native-chart-kit';

const StackBar = () => {
  const data = {
    // labels: ['Test1'],
    // legend: ['con', 'stick', 'unique'],
    data: [[20, 20, 12]],
    barColors: ['#B5F562', '#FFDDDD', '#609FFF'],
  };

  const chartConfig = {
    color: (opacity = 1) => `rgba(255, 242, 242, ${opacity})`,
    backgroundGradientFrom: '#FFF2F2',
    backgroundGradientTo: '#FFF2F2',
    decimalPlaces: 0,
    barRadius: 0,
    useShadowColorFromDataset: false,
    barPercentage: 0.5,
  };

  const chartStyle = {
    borderRadius: 10, // Apply a border radius to the chart container
    transform: [{ rotate: '90deg' }], // Rotate the chart 180 degrees to make it horizontal
  };

  return (
    <View>
      <StackedBarChart
        data={data}
        width={100}
        height={300}
        chartConfig={chartConfig}
        style={chartStyle}
      />
    </View>
  );
};

export default StackBar;
