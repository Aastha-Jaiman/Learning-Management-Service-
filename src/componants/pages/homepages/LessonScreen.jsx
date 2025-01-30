import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  ChevronsRight,
  BookOpen,
  Video,
  FileText,
  ChevronsLeft,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const LessonScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ChevronsLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Coding</Text>
      </View>

      {/* Lesson Card */}
      <View style={styles.lessonCard}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/70cb/2619/286a48877aa49dfae51a7b458749a2b1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7HwLyQXjWwD6O8dGRHJLIU1-ZpH3lSABTiIPSeXk~QCpw17vDv8n9JoHvxJyf7DhjWx2JnS6XnCYjNGKdyiUM44ldy6WY~7BvNn8scLFTday1aec~OGWmpKvHSzuFSygWQFywtzqI4-F2hR-0AocWETmCdhmWOVsTqLi0kWJj7HrWMkBrDKgQYz3PNgd5A4OPNyQvXKQz~pkAAmAbm4boI~CNMPjQTyMhfPDAdQnjoHGa1WJEhnCuqkDALB6Q-vMe-k15KBTj-aqfcGAyTWgzIpCqXdC2EXx9ZZwOAZNVGo1157GH5D0ieMSg6lT9JgQytAZcws~cpYqYKlE9pcvA__",
          }}
          style={styles.horseImage}
        />
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonLabel}>Lesson 1</Text>
          <Text style={styles.lessonTitle}>WEB DEVELOPMENT</Text>
          <Text style={styles.progressText}>1/6</Text>
        </View>
      </View>

      {/* Learning Options */}
      <View style={styles.optionsContainer}>
        {/* Theory Option */}
        <View style={styles.centeredOption}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate("Theory")}
          >
            <View style={styles.optionIconlayer}>
              <View style={styles.optionIcon}>
                <BookOpen size={24} color="#fff" />
              </View>
            </View>
            <Text style={styles.optionText}>Theory</Text>
          </TouchableOpacity>
        </View>

        {/* Video and Quiz Options */}
        <View style={styles.rowOptions}>
          {/* Video Option */}
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate("Videoes")}
          >
            <View style={styles.optionIconlayer}>
              <View style={styles.optionIcon}>
                <Video size={24} color="#fff" />
              </View>
            </View>
            <Text style={styles.optionText}>Video</Text>
          </TouchableOpacity>

          {/* Quiz Option */}
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate("QuizLevel")}
          >
            <View style={styles.optionIconlayer}>
              <View style={styles.optionIcon}>
                <FileText size={24} color="#fff" />
              </View>
            </View>
            <Text style={styles.optionText}>Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <ChevronsRight size={24} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7060e6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingVertical: 20,
    backgroundColor: "#E8E5EE",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  lessonCard: {
    alignSelf: "center",
    marginTop: 100,
    alignItems: "center",
    width: "60%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  horseImage: {
    position: "absolute",
    top: -70,
    width: 100,
    height: 100, // Adjusted the height for better visibility
    resizeMode: "contain",
    borderRadius: 50, // Added borderRadius to make it circular
    marginBottom: 0, // Space between the image and the text below
  },
  lessonInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  lessonLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6B4EFF",
    marginTop: 8,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#8E8E8E",
    marginTop: 4,
    marginRight: 16,
    alignSelf: "flex-end",
  },
  optionsContainer: {
    paddingHorizontal: 16,
    marginTop: 42,
  },
  centeredOption: {
    alignItems: "center",
    marginBottom: 16,
  },
  rowOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionButton: {
    alignItems: "center",
    width: "30%",
  },
  optionIconlayer: {
    borderWidth: 10,
    padding: 5,
    borderColor: "#fff",
    backgroundColor: "#7060e6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  optionIcon: {
    width: 80,
    height: 80,
    margin: 5,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#7060e6",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 8,
  },
  nextButton: {
    position: "absolute",
    bottom: 82,
    right: 42,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FF8A65",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default LessonScreen;
