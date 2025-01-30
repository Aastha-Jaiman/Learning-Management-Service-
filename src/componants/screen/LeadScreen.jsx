import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import {
  ArrowLeft,
  Settings,
  Star,
  Globe,
  Award,
  Pencil,
  Trophy,
  ChevronDown,
} from "lucide-react-native";
import { CircularProgress } from "react-native-circular-progress";
import { BarChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";
import { Badge } from "../pages/Leadpages/Badge";
import { PerformanceCard } from "../pages/Leadpages/PerfomanceCard";

const { width } = Dimensions.get("window");

export default function LeadScreen() {
  const chartData = {
    labels: ["Math", "Sports", "Music"],
    datasets: [
      {
        data: [70, 90, 60],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LinearGradient colors={["#7C4DFF", "#6200EA"]} style={styles.gradient}>
        <ScrollView>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <ArrowLeft color="white" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Settings color="white" size={24} />
            </TouchableOpacity>
          </View>

          {/* Profile Section */}
          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N41Owo3DDKJ4tCluQfRSdDUZKFbsex.png",
              }}
              style={styles.avatar}
            />
            <Text style={styles.name}>Madelyn Dias</Text>
          </View>

          {/* Progress Section */}
          <View style={styles.progressSection}>
            {/* Metrics */}
            <View style={styles.metrics}>
              <View style={styles.metricItem}>
                <Star size={24} color="#fff" />
                <Text style={styles.metricLabel}>POINTS</Text>
                <Text style={styles.metricValue}>590</Text>
              </View>
              <View style={styles.metricItem}>
                <Globe size={24} color="#fff" />
                <Text style={styles.metricLabel}>COURSES </Text>
                <Text style={[styles.metricLabel, { marginTop: 0 }]}>
                  COMPLETED{" "}
                </Text>
                <Text style={styles.metricValue}>1</Text>
              </View>
              <View style={styles.metricItem}>
                <Award size={24} color="#fff" />
                <Text style={styles.metricLabel}>COURSES </Text>
                <Text style={[styles.metricLabel, { marginTop: 0 }]}>
                  ENROLLED{" "}
                </Text>
                <Text style={styles.metricValue}>4</Text>
              </View>
            </View>

            {/* Badges */}
            <Text style={styles.badgeTitle}>Badges</Text>
            <View style={styles.badgeContainer}>
              <Badge type="time" />
              <Badge type="smile" />
              <Badge type="chart" />
            </View>

            <View style={styles.progressContainer}>
              <View style={styles.coursedropdown}>
                <Text style={styles.coursedropdownText}>Courses</Text>
                <ChevronDown size={22} color="#6A5AE0" />
              </View>
              {/* Section Title */}
              <Text style={styles.sectionTitle}>Your progress</Text>
              <View style={styles.circularProgress}>
                <CircularProgress
                  size={120}
                  width={15}
                  fill={37}
                  tintColor="#7C4DFF"
                  backgroundColor="#E0E0E0"
                >
                  {() => <Text style={styles.progressText}>37%</Text>}
                </CircularProgress>
              </View>
              <View style={styles.progressStats}>
                <View style={[styles.card, styles.lessonCard]}>
                  <View style={styles.contentContainer}>
                    <Text style={[styles.number, styles.lessonText]}>{1}</Text>
                    <Text style={[styles.label, { width: 150 }]}>
                      {"Lesson Completed"}
                    </Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Pencil size={20} color="#000" />
                  </View>
                </View>
                <View style={[styles.card, styles.quizCard]}>
                  <View style={styles.contentContainer}>
                    <Text style={[styles.number, styles.quizText]}>{1}</Text>
                    <Text style={[styles.label, styles.quizText]}>
                      Quiz Won
                    </Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Trophy size={20} color="#fff" />
                  </View>
                </View>
              </View>
            </View>

            {/* Performance Chart */}
            <View style={styles.chartContainer}>
              <PerformanceCard />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: StatusBar.currentHeight + 10,
  },
  profile: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  metrics: {
    backgroundColor: "#7C4DFF",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  metricItem: {
    alignItems: "center",
  },
  metricValue: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  metricLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,

    marginTop: 5,
  },

  badgeTitle: {
    color: "#6A5AE0",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 24,
    marginBottom: 16,
    fontWeight: "bold",
  },
  badgeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 25,
  },
  progressContainer: {
    backgroundColor: "#E8E5FA",
    borderRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  coursedropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "white",
    alignSelf: "flex-end",
    padding: 10,
    width: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  coursedropdownText: {
    color: "#000",
    fontSize: 18,

    fontWeight: "bold",
  },

  progressSection: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    padding: 20,
    flex: 1,
  },

  sectionTitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  circularProgress: {
    alignItems: "center",
    marginBottom: 30,
  },
  progressStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    gap: 16,
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7C4DFF",
  },
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  lessonCard: {
    backgroundColor: "#F8F7FF",
  },
  quizCard: {
    backgroundColor: "#8B5CF6",
  },
  contentContainer: {
    flex: 1,
  },
  number: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 4,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  lessonText: {
    color: "#1F2937",
  },
  quizText: {
    color: "#FFFFFF",
  },
  iconContainer: {
    padding: 8,
  },

  chartContainer: {
    marginTop: 24,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },
  chartIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
  },
  chart: {
    marginLeft: -16,
  },
});
