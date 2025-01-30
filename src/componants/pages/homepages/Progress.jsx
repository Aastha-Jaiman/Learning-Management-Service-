import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ChevronsLeft, ChevronsRight } from "lucide-react-native";

const Progress = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(25); // Starting with 25% progress

  const slides = [
    {
      title: "Around the world",
      description:
        "Wear your explorer's helmet and be prepared to fly to exciting and exotic locations.",
      bgColor: "#6C4CE5",
    },
    {
      title: "Around the world",
      description:
        "Wear your explorer's helmet and be prepared to fly to exciting and exotic locations.",
      bgColor: "#0ECDB9",
    },
    {
      title: "Around the world",
      description:
        "Wear your explorer's helmet and be prepared to fly to exciting and exotic locations.",
      bgColor: "#D773FF",
    },
    {
      title: "Congratulations",
      description: "You have completed all theory",
      bgColor: "#D773FF",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setProgress((currentSlide + 2) * 25); // Increment by 25% each time
    } else {
      // On last slide, handle the continue action
      try {
        // Reset to first slide or handle completion
        setCurrentSlide(0);
        setProgress(25);
        // You can add your custom logic here for what should happen after completion
        alert("Course completed! Returning to start.");
      } catch (error) {
        console.error("Navigation error:", error);
      }
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setProgress(currentSlide * 25); // Decrease by 25% each time
    }
  };

  return (
    <View style={[styles.container]}>
      {/* Header Section */}
      <View style={styles.profileHeader}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <ChevronsLeft
              color={"#FFFFFF"}
              size={26}
              onPress={() => navigation.goBack()}
            />
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
            <Text style={styles.courseName}>Web development</Text>
          </View>
        </View>
        <Text style={styles.progress}>0%</Text>
      </View>

      {/* Progress Bar */}
      <Text style={{ color: "white", marginHorizontal: 3, marginVertical: 9 }}>
        Progress Bar
      </Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground} />
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      {/* Description Card */}
      <View
        style={[
          styles.descriptionCard,
          { backgroundColor: slides[currentSlide].bgColor },
        ]}
      >
        <Text style={styles.descriptionTitle}>
          {slides[currentSlide].title}
        </Text>
        <Text style={styles.descriptionText}>
          {slides[currentSlide].description}
        </Text>
        <View style={styles.placeholder} />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={[styles.navButton, { opacity: currentSlide === 0 ? 0.5 : 1 }]}
          onPress={handleBack}
          disabled={currentSlide === 0}
        >
          <View style={[styles.navButtonInner, styles.homeButton]}>
            <ChevronsLeft color={"#333333"} size={26} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <View
            style={[
              styles.navButtonInner,
              styles.nextButton,
              currentSlide === slides.length - 1 && styles.continueButton,
            ]}
          >
            {currentSlide === slides.length - 1 ? (
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={[styles.navButtonText, { color: "#FFFFFF" }]}>
                  Continue
                </Text>
              </TouchableOpacity>
            ) : (
              <ChevronsRight color={"#FFFFFF"} size={26} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
    transition: "background-color 0.3s ease",
    backgroundColor: "#7646FE",
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
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "semibold",
  },
  progressBarContainer: {
    height: 15,
    marginHorizontal: 4,
    backgroundColor: "#FFF",
    borderRadius: 8,
    overflow: "hidden",
  },
  progressBarBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFF",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FFB6C1",
    borderRadius: 4,
    transition: "width 0.3s ease",
  },
  progress: {
    fontSize: 14,
    color: "white",
    backgroundColor: "#F48FB1",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  descriptionCard: {
    borderWidth: 1,
    borderColor: "#C6C6C6",
    borderRadius: 12,
    padding: 16,
    marginVertical: 70,
    transition: "background-color 0.3s ease",
  },
  descriptionTitle: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "semibold",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 50,
    color: "#FFFFFFB8",
    width: 250,
    textAlign: "center",
    marginVertical: 14,
  },
  placeholder: {
    width: "80%",
    height: 150,
    marginVertical: 10,
    marginTop: 20,
    margin: "auto",
    backgroundColor: "#C4C4C4",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 90,
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
  },
  navButton: {
    width: 50,
    height: 50,
  },
  navButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  continueButton: {
    width: 100,
    borderRadius: 25,
  },
  homeButton: {
    backgroundColor: "#E6E6E6",
  },
  nextButton: {
    backgroundColor: "#FFA500",
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Progress;
