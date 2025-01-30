import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronsLeft, ChevronsRight } from "lucide-react-native";

export default function Videos() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of images
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/400/500",
    "https://picsum.photos/600/700",
    "https://picsum.photos/800/900",
    "https://picsum.photos/200/100",
    "https://picsum.photos/200/300",
  ];

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.overlay}>
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

        {/* Upper Box */}
        <View style={styles.upperBox}>
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={styles.selectedImage}
            />
          ) : (
            <Text style={styles.placeholderText}>Select an image below</Text>
          )}
        </View>

        {/* Slider */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedImage(image)}
            >
              <Image source={{ uri: image }} style={styles.sliderImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
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
  overlay: {
    backgroundColor: "rgba(188, 222, 233, 0.7)",
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
  },

  upperBox: {
    margin: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImage: {
    width: 350,
    height: 300,
    borderRadius: 12,
  },
  placeholderText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  slider: {
    // marginHorizontal: 10,
    // marginVertical: 8,
  },
  sliderImage: {
    width: 140,
    marginTop: 20,
    height: 150,
    borderRadius: 8,
    marginRight: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#7D5CF6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
