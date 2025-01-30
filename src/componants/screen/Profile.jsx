import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ArrowLeft, Award, Globe, Pencil, Star } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ArrowLeft
            color="white"
            size={24}
            onPress={() => navigation.navigate("Home")} // Replace 'Home' with the name of the screen you want to navigate to()}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.imageprofilecontainer}>
            <View style={styles.imageprofile}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.name}>Har Har Mahadev</Text>
              <TouchableOpacity style={styles.editIcon}>
                <Pencil color="black" size={24} />
              </TouchableOpacity>
            </View>
          </View>

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

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>John_Brown_12</Text>
            <Text style={styles.title}>John</Text>
            <Text style={styles.title}>Brown</Text>
            <Text style={styles.title}>john.brown@bu.edu</Text>
            <Text style={styles.title}>12/44/2333</Text>
          </View>

          <View style={styles.settings}>
            <TouchableOpacity style={styles.privacy}>
              <Text style={styles.privacyText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setting}>
              <Text style={styles.privacyText}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logout}>
              <Text style={styles.privacyText}>logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A5AE0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6A5AE0",
    padding: 16,
    marginTop: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 16,
    marginHorizontal: 12,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 16,
    paddingBottom: 60,
  },
  imageprofilecontainer: {
    alignItems: "center",
    marginTop: 20,
  },
  imageprofile: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#6A5AE0",
    borderRadius: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  editIcon: {
    position: "absolute",
    bottom: 50,
    right: 10,
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
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: "#6164A1",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#626262",
  },
  settings: {
    flexDirection: "column",
    marginTop: 20,
  },
  privacy: {
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#626262",
    paddingLeft: 10,
  },
  setting: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#626262",
  },
  logout: {
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#626262",
    padding: 10,
    marginBottom: 10,
  },
  privacyText: {
    color: "#6164A1",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
