import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ChevronsLeft } from "lucide-react-native";
import Svg, { Circle } from "react-native-svg";

const ProgressCircle = () => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * 0.25; // 75% white border

  return (
    <View style={styles.progressWrapper}>
      <Svg width="40" height="40" style={styles.progressSvg}>
        <Circle
          cx="20"
          cy="20"
          r={radius}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2.5"
          fill="transparent"
        />
        <Circle
          cx="20"
          cy="20"
          r={radius}
          stroke="white"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          transform="rotate(-90 20 20)"
        />
      </Svg>
      <Text style={styles.progressText}>01</Text>
    </View>
  );
};

const QuizQuestionScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const quizOptions = [
    {
      id: 1,
      title: "The game of six numbers",
      image: "",
    },
    {
      id: 2,
      title: "Around the world",
      image: "",
    },
    {
      id: 3,
      title: "The game of six numbers",
      image: "",
    },
    {
      id: 4,
      title: "Around the world",
      image: "",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.profileHeader}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          >
            <ChevronsLeft color={"#FFFFFF"} size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <ProgressCircle />
        </View>

        <View style={styles.profilePicture}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg",
            }}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Course Card */}
      <View style={styles.courseCard}>
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Quiz - Level 1</Text>
          <View style={styles.courseNameContainer}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/bb99/b99f/6b8c5beeb186163f12607cb428369af8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGlftlCv5wvmbrPkPHuRfbbJfRPk33NOiJJWAWQzSp7PrCvYQbejFQos38yKrHHm-pP6rPE2juicl2bj0IYC2nhNdxY7IFNMaL5oGbZV5BM6WDIJ2qWjQ3i1ghe53WBhwYKbveLHW4W3FAkdg8oPWWZ~kRSpKr908rxBSIPBtdlcT90Ij2baKCxHRXewT3oXX9HLFlQIalTKID53rl0nF2marKhWKW~h9YmCpXmi6tsYhvDqcfk3hru7EWVsChF8XTgDtFD0SVLEw5LTLIHnWS~ni3PuEBwj0ZM-I6zUsVV6dc4RtakD2tD9jSOCWD2YQP1kjSYqMaV3YjcUrqxbZQ__",
              }}
              style={styles.courseIcon}
            />
            <Text style={styles.courseName}>Web devlopment</Text>
          </View>
        </View>
        <Text style={styles.progress}>0%</Text>
      </View>

      {/* Question Section */}
      <View style={styles.questionSection}>
        <Text style={styles.questionNumber}>Question 1</Text>
        <Text style={styles.questionText}>1. Join Our Quiz Squad</Text>
      </View>

      {/* Options Grid */}
      {/* <ImageBackground
        source={{ uri: "https://s3-alpha-sig.figma.com/img/23ac/4934/dfb907893fbd389d5b2e20989893e7b4?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drE0EcCPjvgiVrjiGQPSLtHc7y4Zjzv0vnflu-LeiDtKhXiad1oq83ORDviLJnKmdwVaMS1q7B2o0P3n-mEh5DrGQcVLvNgtJNX0i-Ebzzhe1NzczAbPmopyEzRwR~K-oD-Dvh~6DXHjk2XjgQZ5Y076JfYXlmIQSDE9i2ncRCUl76qK4ItgBhVozL5LaU9QDy1xLcFpWNO7UoWLAGvUb2sx29A~1D9uCvOM9ROyPlgn3YErG0O9mFkIb1f1MxHHzP0h~Id~BTqkWY-kP1yfx5-bgPWMkHKJjgScX50Z9LdBfJefnqJ9-Toyrups0rAVlb0eZHB4jy~vTWLZJfLC2w__" }}
        style={styles.backgroundImage}
      > */}
      <View style={styles.gridContainer}>
        {quizOptions.map((option, index) => (
          <TouchableOpacity
            onPress={() => setSelectedOption(option.id)}
            key={index}
            style={[
              styles.optionCard,
              selectedOption === option.id && styles.selectedLevelCard,
            ]}
          >
            <Text style={styles.optionTitle}>{option.title}</Text>
            <Image
              source={option.image}
              style={styles.optionImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Action Buttons */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={[styles.actionButton, styles.wrongButton]}>
          <Ionicons name="close" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectedOption && navigation.navigate("Achievement")}
          style={[styles.actionButton, styles.correctButton]}
        >
          <Ionicons name="checkmark" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C4CE8",
    padding: 25,
    // paddingTop: 50
  },
  backgroundImage: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  header: {
    flexDirection: "col",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  progressWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  progressSvg: {
    position: "absolute",
  },
  progressText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  selectedLevelCard: {
    borderWidth: 3,
    borderColor: "#fff",
  },
  courseCard: {
    backgroundColor: "#FFB3C0",
    borderRadius: 15,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseInfo: {
    flexDirection: "column",
    padding: 3,
  },
  courseTitle: {
    fontSize: 14,
    color: "#660012",
    fontWeight: "semibold",
  },
  courseNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  courseName: {
    fontSize: 16,
    color: "#660012",
    fontWeight: "bold",
    marginLeft: 8,
  },
  courseIcon: {
    width: 30,
    height: 30,
  },
  progress: {
    fontSize: 14,
    color: "white",
    backgroundColor: "#F48FB1",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  questionSection: {
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  questionNumber: {
    color: "#FFF",
    fontSize: 14,
    opacity: 0.8,
  },
  questionText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  optionCard: {
    width: "47%",
    aspectRatio: 1,
    backgroundColor: "#F2C413",
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
  },
  optionTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
  },
  optionImage: {
    width: "80%",
    height: "60%",
    alignSelf: "flex-end",
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  wrongButton: {
    backgroundColor: "#FF4444",
  },
  correctButton: {
    backgroundColor: "#4CAF50",
  },
});

export default QuizQuestionScreen;
