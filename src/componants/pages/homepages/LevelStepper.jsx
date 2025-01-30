import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { Sun } from "lucide-react-native";
import { Card } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");
const HEXAGON_SIZE = 52;
const CENTER_POSITION = width / 2;
const OFFSET = 30;
const VERTICAL_SPACING = 80;

const LevelStepper = ({ currentLevel = 1, navigation }) => {
  // Levels data with only the last level marked as a gift
  const levels = Array.from({ length: 7 }, (_, index) => ({
    number: index + 1,
    isGift: index === 6, // Only the last level has isGift as true
  }));

  const renderHexagon = (level) => {
    const backgroundColor = level.isGift
      ? "#4ECDC4"
      : level.number === 1
      ? "#FF8A65"
      : "#8875FF";

    const isUnlocked = level.number <= currentLevel;

    return (
      <TouchableOpacity
        disabled={!isUnlocked} // Disable touch on locked levels
        onPress={() => {
          if (isUnlocked) {
            navigation.navigate("Lesson", { currentLevel: level.number });
          }
        }}
        style={[
          styles.hexagon,
          { backgroundColor, opacity: isUnlocked ? 1 : 0.5 },
        ]}
      >
        {isUnlocked ? (
          <Text style={styles.levelText}>{level.number}</Text>
        ) : level.isGift ? (
          <MaterialIcons name="card-giftcard" size={22} color="#FFFFFF" />
        ) : (
          <MaterialIcons name="lock" size={22} color="#FFFFFF" />
        )}
      </TouchableOpacity>
    );
  };

  const generatePath = (index) => {
    const isEven = index % 2 === 0;
    const startX = isEven
      ? CENTER_POSITION - HEXAGON_SIZE - OFFSET
      : CENTER_POSITION + OFFSET;
    const endX = !isEven
      ? CENTER_POSITION - HEXAGON_SIZE - OFFSET
      : CENTER_POSITION + OFFSET;
    const startY = VERTICAL_SPACING * (index + 1) + HEXAGON_SIZE / 2;
    const endY = VERTICAL_SPACING * (index + 2);
    const controlX = isEven
      ? CENTER_POSITION + OFFSET
      : CENTER_POSITION - OFFSET;
    const controlY = startY + (endY - startY) / 2;

    return `M${startX + HEXAGON_SIZE / 2} ${startY} 
            Q${controlX} ${controlY} 
            ${endX + HEXAGON_SIZE / 2} ${endY}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg",
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Sun size={20} color="#FFD6DD" />
            <Text>Good Morning</Text>
          </Text>
          <Text style={styles.name}>Maledyn Dias</Text>
        </View>
      </View>

      <Card style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg",
            }}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Coding</Text>
            <Text style={styles.cardLevel}>{currentLevel} lessons</Text>
          </View>
        </View>

        <View style={styles.circularprogress}>
          <Text style={styles.progressText}>0%</Text>
        </View>
      </Card>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Svg style={StyleSheet.absoluteFill}>
          {levels.slice(0, -1).map((_, index) => (
            <Path
              key={index}
              d={generatePath(index)}
              stroke="#8875FF"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </Svg>

        {levels.map((level, index) => {
          const isEven = index % 2 === 0;
          return (
            <View
              key={index}
              style={[
                styles.levelNode,
                {
                  left: isEven
                    ? CENTER_POSITION - HEXAGON_SIZE - OFFSET
                    : CENTER_POSITION + OFFSET,
                  top: VERTICAL_SPACING * (index + 1),
                },
              ]}
            >
              {renderHexagon(level)}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B4EFF",
    // paddingBottom: 100, // Ensure some space at the bottom
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "lightblue",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  text: {
    color: "#FFD6DD",
    fontSize: 16,
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  card: {
    position: "relative",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    color: "#8875FF",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardLevel: {
    color: "#C6C6C6",
    fontSize: 16,
    fontWeight: "bold",
  },
  circularprogress: {
    position: "absolute",
    top: 5,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#8875FF",
    borderRadius: 50,
  },
  progressText: {
    color: "#8875FF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  scrollContainer: {
    flexGrow: 1,
  },
  levelNode: {
    position: "absolute",
    width: HEXAGON_SIZE,
    height: HEXAGON_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  hexagon: {
    width: HEXAGON_SIZE,
    height: HEXAGON_SIZE,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  levelText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LevelStepper;
