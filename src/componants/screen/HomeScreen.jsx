import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  index,
  StatusBar,
} from "react-native";
import { Sun } from "lucide-react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const courses = [
    {
      name: "Block programming",
      lessons: 12,
      price: 500,
      image:
        "https://s3-alpha-sig.figma.com/img/fade/79de/1fc1837a13972fbd4d0bd9f859fc4302?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6N5lpJdubSSY49~xx1K7IQNCrKT~h2dkxy~pFxLodseKKSIMVTRO4jyUTGrg4LfQdLgBlJTACNlG4Y1efDwjVQvPy1-V07YPT9tR2Ij64bDxU7Wu8UAwrtyn8qloo4HcgD9qHsSA8OhMWoL6a8zmV21kl690iMHzpgY3ldVl7wj09sOtM2Y8eGE5DGngM4DWx~MkTPIHPgg~hP-m6Vc6-0-qNxD~e1gpSjLM-Ox74YzLKbJrHUjX2KLfehhkCl7CtRoC48oRhPc-YuoGOd~Fm2Rc3kHiLi-Uo6PBiKxCbo27DX9-fv9EwhAeuifew7ccn0njmZsn6P3zXn2RtnfxA__",
    },
    {
      name: "App development",
      lessons: 10,
      price: 500,
      image:
        "https://s3-alpha-sig.figma.com/img/413f/402a/5d733bfac19283d603f5d20e89a3414c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cq2RoVf0-Sq709r4HO-jVNrxKD8YL9PP6GvZjf1MeHK08ZNTzgLltIwG36vFeUwPESpReD7ZCv2ePsMXLqj5PO86~doBiD992qyJnEvF-guTNZ-jeuQQQPk8maqdkGniY9rX2xmnqT~YXHnaybK~5coIpr7noLnYFrbk3AIsUFCFfUY5pjQgadNRfscD3hFUoEp~TMPRmmO4j1ZAXdovo05ZojO3fjIrQQScrw5KXWexgEO0q5nVbV3NwM9nO1aYpIoJ2aK4ORN4~MtBWdqDLN4pFPBU56XVToMjve9hfHIGPy35KOS7tYdF4BBfvJfaDfMY9z69QRzk6SlZSjrl0A__",
    },
    {
      name: "Web development1",
      lessons: 10,
      price: 500,
      image:
        "https://s3-alpha-sig.figma.com/img/82b6/ffbd/0cca50676372beee1bcbf02e353cfc26?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eou9tYnV5muKoEFbdFYuODxJc5i-RB3o5gFE9IXQ51aWxFi2o7Bw3YTe9Qgyq37yGLhi2did2zZnCsGc158a3wvnvLmPkVsNUJzMOqHC0WOL6igSau6cq1brA9DdgxPr0dRdu-hLenGhUyoNJJQGqrfIEB60ONP5LvoQpDevu5rWTD~ziFxaoS9KSqzgywHhcvHD7QC6R8h7gooWF0vPDEFjl0yHLPIULVuOUTG7fIEJ3HDgQHUny0VSl7op6IALQCez9Cfwjdh0hU9QdKrqoridiyewTOVmp5ImWTx0HM4L5YjVlXkjeKMOHyHhlGPC7H1Qem2NLEjhKjnOZDA3DQ__",
    },
    {
      name: "Web development",
      lessons: 10,
      price: 500,
      image:
        "https://s3-alpha-sig.figma.com/img/82b6/ffbd/0cca50676372beee1bcbf02e353cfc26?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eou9tYnV5muKoEFbdFYuODxJc5i-RB3o5gFE9IXQ51aWxFi2o7Bw3YTe9Qgyq37yGLhi2did2zZnCsGc158a3wvnvLmPkVsNUJzMOqHC0WOL6igSau6cq1brA9DdgxPr0dRdu-hLenGhUyoNJJQGqrfIEB60ONP5LvoQpDevu5rWTD~ziFxaoS9KSqzgywHhcvHD7QC6R8h7gooWF0vPDEFjl0yHLPIULVuOUTG7fIEJ3HDgQHUny0VSl7op6IALQCez9Cfwjdh0hU9QdKrqoridiyewTOVmp5ImWTx0HM4L5YjVlXkjeKMOHyHhlGPC7H1Qem2NLEjhKjnOZDA3DQ__",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.header}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Sun color={"#FFD6DD"} size={16} />
              <Text style={styles.greeting}>HELLO</Text>
            </View>
            <Text style={styles.name}>Pallavi</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.crown}>
              <FontAwesome6 name="crown" size={30} color="#ECC055" />
            </View>
            <View style={styles.avatar}>
              <Ionicons name="diamond" size={30} color="#02A1FB" />
            </View>
          </View>

          <View style={styles.profilePic}>
            <Image
              source={{
                uri: "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg",
              }}
              style={styles.profileImage}
            />
          </View>
        </View>

        <View style={styles.Courses}>
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>Your Course</Text>
            <View style={styles.courseNameContainer}>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/bb99/b99f/6b8c5beeb186163f12607cb428369af8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGlftlCv5wvmbrPkPHuRfbbJfRPk33NOiJJWAWQzSp7PrCvYQbejFQos38yKrHHm-pP6rPE2juicl2bj0IYC2nhNdxY7IFNMaL5oGbZV5BM6WDIJ2qWjQ3i1ghe53WBhwYKbveLHW4W3FAkdg8oPWWZ~kRSpKr908rxBSIPBtdlcT90Ij2baKCxHRXewT3oXX9HLFlQIalTKID53rl0nF2marKhWKW~h9YmCpXmi6tsYhvDqcfk3hru7EWVsChF8XTgDtFD0SVLEw5LTLIHnWS~ni3PuEBwj0ZM-I6zUsVV6dc4RtakD2tD9jSOCWD2YQP1kjSYqMaV3YjcUrqxbZQ__",
                }}
                style={styles.courseIcon}
              />
              <Text style={styles.courseName}>Coding</Text>
            </View>
          </View>
          <Text style={styles.progress}>0%</Text>
        </View>

        {/* Premium Banner */}
        <View style={styles.premiumBanner}>
          <View style={styles.premiumContent}>
            <View style={styles.avatarStack}>
              <View style={styles.profilePicture}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid",
                  }}
                  style={styles.profileImage}
                />
              </View>
              <View style={{ flexDirection: "col" }}>
                <Text
                  style={{ textAlign: "center", color: "#FFD2DD", margin: 10 }}
                >
                  Unlock Courses
                </Text>
                <Text style={styles.premiumText}>
                  Join The Fun, Unlock More Courses, and{"\n"}Shine Brighter
                  Every Day!
                </Text>
              </View>

              <View style={styles.profilePictureBottom}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg",
                  }}
                  style={styles.profileImage}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Course List */}
        <View style={styles.coursesSection}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseHeaderText}>All courses</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AllCourses")}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          {courses.map((course) => (
            <TouchableOpacity
              key={course.name}
              style={styles.courseCard}
              onPress={() => navigation.navigate("CourseDetail")}
            >
              <Image
                source={{ uri: course.image }}
                style={styles.courseImage}
              />
              <View style={styles.courseInfo}>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.lessonCount}>{course.lessons} Lessons</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceTag}>₹{course.price}</Text>
                <Ionicons name="chevron-forward" size={18} color="gray" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C4CE8",
    padding: 20,
    paddingBottom: 70,
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
  profilePic: {
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

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  crown: {
    padding: 8,
    // backgroundColor: '#fff',
    borderRadius: 20,
  },

  Courses: {
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

  premiumBanner: {
    backgroundColor: "#6A6AE0",
    borderRadius: 16,
    padding: 20,
    height: 200,
  },
  premiumContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarStack: {
    flexDirection: "row",
  },
  profilePicture: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 10,
  },
  profilePictureBottom: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    top: 100,
    right: 20,
    // paddingLeft: 20
    // marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  premiumText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    width: 250,
  },
  coursesSection: {
    padding: 20,
    backgroundColor: "rgba(173, 216, 230, 0.7)",
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  courseHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6A5AE0",
  },
  viewAllText: {
    fontWeight: "bold",
    color: "#6223A9",
  },
  courseCard: {
    backgroundColor: "#FFFFFF",
    padding: 17,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  courseImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 15,
  },

  courseInfo: {
    flex: 1,
  },

  courseName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  lessonCount: {
    fontSize: 14,
    color: "gray",
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  priceTag: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "orange",
    marginRight: 9,
    padding: 3,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default HomeScreen;
