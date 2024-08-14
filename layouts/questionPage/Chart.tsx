import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";
import Card from "@/components/card/Card";

const Chart = () => {
    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 1,
        color: () => 'black',
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const data = {
        labels: ["1:30 AM", "1:30 AM", "1:30 AM", "1:30 AM"],
        datasets: [
          {
            data: [55, 42, 65, 40, 75, 60, 50, 35, 50, 78],
            strokeWidth: 2, // optional
            color: () => 'blue'
          },
          {
            data: [44, 59, 43, 80, 25, 40, 50, 65, 50, 22],
            strokeWidth: 2, // optional
            color: () => 'green'
          },
        ],
        legend: ["THE MARKET TREND / CHART"] // optional
    };

    return (
        <Card style={styles.container}>
            <LineChart
                data={data}
                width={screenWidth-50}
                height={256}
                chartConfig={chartConfig}
                withDots={false}
                fromZero
                bezier
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Chart