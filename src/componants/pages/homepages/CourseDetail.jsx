import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Sun } from "lucide-react-native";

const CourseDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.profileHeader}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Sun color={"#FFD6DD"} size={16} />
            <Text style={styles.greeting}>HELLO</Text>
          </View>
          <Text style={styles.name}>Pallavi</Text>
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
          <Text style={styles.courseTitle}>Course 1</Text>
          <View style={styles.courseNameContainer}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/bb99/b99f/6b8c5beeb186163f12607cb428369af8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGlftlCv5wvmbrPkPHuRfbbJfRPk33NOiJJWAWQzSp7PrCvYQbejFQos38yKrHHm-pP6rPE2juicl2bj0IYC2nhNdxY7IFNMaL5oGbZV5BM6WDIJ2qWjQ3i1ghe53WBhwYKbveLHW4W3FAkdg8oPWWZ~kRSpKr908rxBSIPBtdlcT90Ij2baKCxHRXewT3oXX9HLFlQIalTKID53rl0nF2marKhWKW~h9YmCpXmi6tsYhvDqcfk3hru7EWVsChF8XTgDtFD0SVLEw5LTLIHnWS~ni3PuEBwj0ZM-I6zUsVV6dc4RtakD2tD9jSOCWD2YQP1kjSYqMaV3YjcUrqxbZQ__",
              }}
              style={styles.courseIcon}
            />
            <Text style={styles.courseName}>Block programming</Text>
          </View>
        </View>
        <Text style={styles.progress}>0%</Text>
      </View>

      {/* Block Programming Description */}
      <View style={styles.descriptionCard}>
        <Text style={styles.descriptionTitle}>Block programming</Text>
        <Text style={styles.descriptionText}>
          Wear your explorer’s helmet and be prepared to fly to exciting and
          exotic locations. Wear your explorer’s helmet and be prepared to fly
          to exciting and exotic locations.Wear your explorer’s helmet and be
          prepared to fly to exciting and exotic locations.Wear your explorer’s
          helmet and be prepared to fly to exciting and exotic locations.
        </Text>
        <View style={styles.placeholder} />
      </View>

      {/* Start Now Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("LevelStepper")}
      >
        <Text style={styles.startButtonText}>Start now</Text>
      </TouchableOpacity>
    </View>
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
    flexDirection: "col",
    justifyContent: "space-between",
    // alignItems: 'center',
    paddingTop: 20,
  },
  greeting: {
    color: "#FFD6DD",
    fontSize: 16,
    fontWeight: "normal",
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
    fontWeight: "bold",
    // marginVertical: 8,
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
  descriptionCard: {
    borderWidth: 1,
    borderColor: "#C6C6C6",
    borderRadius: 12,
    padding: 16,
    marginVertical: 30,
  },
  descriptionTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: "#FFFFFFB8",
    marginVertical: 14,
  },
  placeholder: {
    width: "80%",
    height: 120,
    marginVertical: 10,
    marginTop: 20,
    margin: "auto",
    backgroundColor: "#C4C4C4",
    // borderRadius: 8,
  },
  startButton: {
    backgroundColor: "#F8A50B",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginVertical: 16,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CourseDetail;
