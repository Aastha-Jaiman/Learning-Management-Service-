import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    name: "Web development",
    lessons: 10,
    price: 500,
    image:
      "https://s3-alpha-sig.figma.com/img/82b6/ffbd/0cca50676372beee1bcbf02e353cfc26?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eou9tYnV5muKoEFbdFYuODxJc5i-RB3o5gFE9IXQ51aWxFi2o7Bw3YTe9Qgyq37yGLhi2did2zZnCsGc158a3wvnvLmPkVsNUJzMOqHC0WOL6igSau6cq1brA9DdgxPr0dRdu-hLenGhUyoNJJQGqrfIEB60ONP5LvoQpDevu5rWTD~ziFxaoS9KSqzgywHhcvHD7QC6R8h7gooWF0vPDEFjl0yHLPIULVuOUTG7fIEJ3HDgQHUny0VSl7op6IALQCez9Cfwjdh0hU9QdKrqoridiyewTOVmp5ImWTx0HM4L5YjVlXkjeKMOHyHhlGPC7H1Qem2NLEjhKjnOZDA3DQ__",
  },
  {
    name: "Python",
    lessons: 12,
    price: 500,
    image:
      "https://s3-alpha-sig.figma.com/img/7a52/4540/9ab7416bf9cdc7b216e2f3063a81558f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bt1JYohvqGC2MnDkQ90ZygWTb23ZWRuVgAzVChNGsgM0PVfi-vn5rBtd5VPnFBE89mlGCeyTepnVnFks~-KVV6JxvYKdREz-4iXw5rV6OojjSNkf2696c8GzueYNO~-ykrv5y1~wanhyqvgBcaObjrtEZDKmJFiAXwu-7TCRQVw4TTbOlR~sfCcijFqvxVVMWYzMYz9MHysjELdiM6E7aEiaEuRR9uujz55qgq7oIRFBii5muz8Lx75MRqCXemefguijYDXWtLRxHNsk8LkKM30of7M3diXNA2yALbNpH2XEqsV6~3WkBKAuoejDuRfj-2pwFP3~DgCr2AK7yhAHaw__",
  },
  {
    name: "AI",
    lessons: 10,
    price: 500,
    image:
      "https://s3-alpha-sig.figma.com/img/6295/a87f/4270ecd4f65063447791cdb5c7d84fd9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8SP7I328dOOQdt3Oz~Gphy9XAG-zoavMPYPacK83kWQ47pIKqwW7OTQk7e8R~M8STmbM41b~pIqZpSyXcxTP6734v13lsuEE41N3G3ovR74J7x8iunL8yJBrnXgLJbF6Gz-YWDywRqyFrfL-JnUOUbaldr7Xg3S48iVbKMXEcEZiote58vj6jKO5NYy7fLLiwM-HxyafQi9r6g1Zt6YQQHvTmLnTkifryYz-vsuUYHlClNCZgzvQ~DZwT28MklZJ-PHDn-Muj5T4o3b6B9xvvMGOdjbhDtqlWOCNZaOyVD4W2Whj6zoYifFTzCDBFD3-2YD0kyuSibT1Oy5GfPXeQ__",
  },
];
export default function CoursesScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={"transparent"}
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>All courses</Text>
        </View>
        <View style={styles.overlay}>
          <View style={styles.courseList}>
            {courses.map((course, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetail")}
                key={index}
                style={styles.courseCard}
              >
                <Image
                  source={{ uri: course.image }}
                  style={styles.courseImage}
                />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseName}>{course.name}</Text>
                  <Text style={styles.lessonCount}>
                    {course.lessons} Lessons
                  </Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceTag}>₹{course.price}</Text>
                  <Ionicons name="chevron-forward" size={18} color="gray" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6A5ACD",
    // flex: 1,
    padding: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },

  overlay: {
    backgroundColor: "rgba(188, 222, 233, 0.7)",
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
  },
  //   courseList: { backgroundColor: "#E6E6FA", padding: 15, borderRadius: 20 },
  courseCard: {
    backgroundColor: "white",
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
