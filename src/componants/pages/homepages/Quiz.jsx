import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { ChevronsLeft } from "lucide-react-native";

const QuizLevelScreen = ({ navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { id: 1, color: "#FFA726", title: "Level 1" },
    { id: 2, color: "#FF7043", title: "Level 2" },
    { id: 3, color: "#BA68C8", title: "Level 3" },
    { id: 4, color: "#E57373", title: "Level 4" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.profileHeader}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <ChevronsLeft color={"#FFFFFF"} size={26} />
            <Text style={styles.name}>Pallavi</Text>
          </View>
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
          <Text style={styles.courseTitle}>Lesson 1</Text>
          <View style={styles.courseNameContainer}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/bb99/b99f/6b8c5beeb186163f12607cb428369af8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGlftlCv5wvmbrPkPHuRfbbJfRPk33NOiJJWAWQzSp7PrCvYQbejFQos38yKrHHm-pP6rPE2juicl2bj0IYC2nhNdxY7IFNMaL5oGbZV5BM6WDIJ2qWjQ3i1ghe53WBhwYKbveLHW4W3FAkdg8oPWWZ~kRSpKr908rxBSIPBtdlcT90Ij2baKCxHRXewT3oXX9HLFlQIalTKID53rl0nF2marKhWKW~h9YmCpXmi6tsYhvDqcfk3hru7EWVsChF8XTgDtFD0SVLEw5LTLIHnWS~ni3PuEBwj0ZM-I6zUsVV6dc4RtakD2tD9jSOCWD2YQP1kjSYqMaV3YjcUrqxbZQ__",
              }}
              style={styles.courseIcon}
            />
            <Text style={styles.courseName}>Web Development</Text>
          </View>
        </View>
        <Text style={styles.progress}>0%</Text>
      </View>

      {/* Level Grid */}
      <View style={styles.gridContainer}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={[
              styles.levelCard,
              { backgroundColor: level.color },
              selectedLevel === level.id && styles.selectedLevelCard,
            ]}
            onPress={() => setSelectedLevel(level.id)}
          >
            <Text style={styles.levelText}>{level.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Progress Button */}
      <TouchableOpacity
        onPress={() => {
          selectedLevel !== null && navigation.navigate("QuizQuestion");
        }}
        style={[
          styles.progressButton,
          selectedLevel !== null && { backgroundColor: "#FFA726" },
        ]}
      >
        <Text style={styles.progressButtonText}>Start Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C4CE8",
    padding: 25,
    paddingTop: 50,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  header: {
    flexDirection: "column",
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
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
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
    fontWeight: "bold",
  },
  courseNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  courseName: {
    fontSize: 16,
    color: "#000",
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 30,
    justifyContent: "space-between",
  },
  levelCard: {
    width: "45%",
    height: 5,
    aspectRatio: 1,
    margin: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedLevelCard: {
    borderWidth: 4,
    borderColor: "#FFF",
  },
  levelText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  progressButton: {
    backgroundColor: "#FFF",
    padding: 16,
    marginVertical: 50,
    alignSelf: "center",
    width: 200,
    borderRadius: 25,
    alignItems: "center",
  },
  progressButtonText: {
    fontSize: 16,
    color: "#666",
  },
});

export default QuizLevelScreen;
