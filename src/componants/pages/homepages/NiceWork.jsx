import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { ChevronsLeft } from "lucide-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const NiceWorkScreen = ({
  points = 80,
  totalQuestions = 10,
  answeredQuestions = 9,
  // onNextLevel = () => {},
  // onPlayAgain = () => {},
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Homes")}
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <ChevronsLeft color={"#FFFFFF"} size={30} />
            </TouchableOpacity>
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

        <View style={styles.content}>
          <Text style={styles.title}>Nice Work</Text>

          {/* Double Achievement circles with enhanced shadow */}
          <View style={styles.achievementCircleOuter}>
            <View style={styles.achievementCircleInner}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
          </View>

          {/* Updated stars with larger center star */}
          <View style={styles.starsContainer}>
            <Text style={[styles.star, styles.filledStar]}>
              <AntDesign name="star" size={34} color="#FFE55A" />
            </Text>
            <Text style={[styles.star, styles.filledStar, styles.centerStar]}>
              <AntDesign name="star" size={50} color="#FFE55A" />
            </Text>
            <Text style={[styles.star, styles.emptyStar]}>
              <AntDesign name="star" size={34} color="#7616FE" />
            </Text>
          </View>

          <Text style={styles.points}>
            You Earned <Text style={styles.pointsNumber}>{points} pts</Text>
          </Text>

          <Text style={styles.progress}>
            {answeredQuestions} answered out of {totalQuestions}
          </Text>

          <TouchableOpacity
            style={[styles.button, styles.nextLevelButton]}
            onPress={() => navigation.navigate("QuizLevel")}
          >
            <Text style={styles.buttonText}>Next level</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.playAgainButton]}
            // onPress={onPlayAgain}
          >
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#7646FE",
  },
  container: {
    flex: 1,
    padding: 35,
    marginTop: 20,
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
  content: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },
  // Enhanced shadow for achievement circles
  achievementCircleOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C6C6C6",
    backgroundColor: "#FFAB01",
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    marginBottom: 20,
  },
  achievementCircleInner: {
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: "#FFAB01",
    borderWidth: 1,
    borderColor: "#C6C6C6",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6.27,
  },
  checkmark: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  // Updated stars with larger center star
  starsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    marginTop: 20,
  },
  star: {
    fontSize: 45,
    marginHorizontal: 4,
  },
  centerStar: {
    fontSize: 65, // Larger size for center star
    marginTop: -5, // Adjust vertical alignment
  },
  filledStar: {
    color: "#FFE55A",
  },
  emptyStar: {
    color: "##7646FE",
  },
  points: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  pointsNumber: {
    fontWeight: "800", // Extra bold for the points number
    fontSize: 20, // Slightly larger size
  },
  progress: {
    color: "white",
    fontSize: 14,
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#C6C6C6",
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginVertical: 10,
  },
  nextLevelButton: {
    backgroundColor: "#FFA500",
  },
  playAgainButton: {
    backgroundColor: "#87CEEB",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NiceWorkScreen;
