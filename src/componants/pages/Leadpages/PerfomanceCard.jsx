import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { BarChart2 } from "lucide-react-native";

const screenWidth = Dimensions.get("window").width;

export const PerformanceCard = () => {
  const data = {
    labels: ["Math", "Sports", "Music"],
    datasets: [
      {
        data: [3, 8, 6],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#8B5CF6",
    backgroundGradientTo: "#8B5CF6",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    barPercentage: 0.7,
    propsForBackgroundLines: {
      strokeDasharray: "6 6",
      strokeWidth: 2,
      stroke: "rgba(255, 255, 255, 0.2)",
    },
    propsForLabels: {
      fontSize: 10,
    },
  };

  const colors = ["#FFB7C5", "#60A5FA", "#4ADE80"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top performance by category</Text>
        <BarChart2 color="#fff" size={20} style={styles.icon} />
      </View>

      <View style={styles.categories}>
        <View style={styles.categoryItem}>
          <View style={[styles.dot, { backgroundColor: colors[0] }]} />
          <Text style={styles.categoryText}>Math</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={[styles.dot, { backgroundColor: colors[1] }]} />
          <Text style={styles.categoryText}>Sports</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={[styles.dot, { backgroundColor: colors[2] }]} />
          <Text style={styles.categoryText}>Music</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <BarChart
          data={data}
          width={screenWidth - 60}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
          showBarTops={false}
          fromZero={true}
          segments={4}
          withInnerLines={true}
          flatColor={true}
          withHorizontalLabels={false}
          yAxisLabel=""
          yAxisSuffix="%"
          renderCustomBarElement={({ x, y, width, height, index }) => {
            const maxHeight = 180;
            const scaledHeight = (height / maxHeight) * 100;
            return (
              <View key={index}>
                <View
                  style={{
                    position: "absolute",
                    left: x,
                    bottom: 0,
                    width: width,
                    height: scaledHeight,
                    backgroundColor: colors[index],
                    borderRadius: 8,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    left: x - width / 2,
                    bottom: -40,
                    width: width * 2,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={styles.barLabel}
                  >{`${data.datasets[0].data[index]}/10`}</Text>
                  <Text style={styles.barSubLabel}>Questions</Text>
                  <Text style={styles.barSubLabel}>Answered</Text>
                </View>
              </View>
            );
          }}
        />
        <View style={styles.yAxis}>
          {["100%", "75%", "50%", "25%", "0%"].map((label, index) => (
            <Text key={index} style={styles.yAxisLabel}>
              {label}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8B5CF6",
    borderRadius: 20,
    padding: 20,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  icon: {
    opacity: 0.8,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
    marginBottom: 20,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  chartContainer: {
    marginLeft: -20,
    marginRight: -20,
    flexDirection: "row",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  barLabel: {
    color: "#FFFFFF",
    fontSize: 12,
    marginBottom: 2,
  },
  barSubLabel: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 10,
  },
  yAxis: {
    position: "absolute",
    left: 10,
    top: 10,
    bottom: 30,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  yAxisLabel: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 10,
  },
});
