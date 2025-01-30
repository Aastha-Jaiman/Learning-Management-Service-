import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useState } from "react"; // For controlling focus animation

import LeadScreen from "../componants/screen/LeadScreen";
import HomeScreen from "../componants/screen/HomeScreen";
import Profile from "../componants/screen/Profile";
import LevelStepper from "../componants/pages/homepages/LevelStepper";
import LessonScreen from "../componants/pages/homepages/LessonScreen";
import CoursesScreen from "../componants/pages/homepages/AllCourse";
import CourseDetail from "../componants/pages/homepages/CourseDetail";
import Progress from "../componants/pages/homepages/Progress";
import Videos from "../componants/pages/homepages/Videos";
import QuizLevelScreen from "../componants/pages/homepages/Quiz";
import QuizQuestionScreen from "../componants/pages/homepages/QuizQuestions";
import NiceWorkScreen from "../componants/pages/homepages/NiceWork";
import AchievementScreen from "../componants/pages/homepages/Acheivment";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const hiddenTabScreens = [
  "AllCourses",
  "Achievement",
  "CourseDetail",
  "QuizLevel",
  "QuizQuestion",
  "NiceWork",
  "Videoes",
  "Theory",
  "LevelStepper",
  "Lesson",
];

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homes" component={HomeScreen} />
      <Stack.Screen name="AllCourses" component={CoursesScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="LevelStepper" component={LevelStepper} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
      <Stack.Screen name="Theory" component={Progress} />
      <Stack.Screen name="Videoes" component={Videos} />
      <Stack.Screen name="QuizLevel" component={QuizLevelScreen} />
      <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
      <Stack.Screen name="Achievement" component={AchievementScreen} />
      <Stack.Screen name="NiceWork" component={NiceWorkScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
        const isTabBarVisible = !hiddenTabScreens.includes(routeName);

        return {
          headerShown: false,
          tabBarStyle: {
            display: isTabBarVisible ? "flex" : "none",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 8,
            backgroundColor: "#fff",
            height: 70,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            paddingHorizontal: 10,
            paddingTop: 10,
          },
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center" }}>
                <Feather
                  name="home"
                  size={24}
                  style={{
                    color: focused ? "#6A5AE0" : "#9e9ea7",
                    transform: [{ scale: focused ? 1.2 : 1 }],
                    transition: "transform 0.3s ease", // Add transition for smooth effect
                  }}
                />
              </View>
            );
          },
          tabBarLabel: () => null, // Hide label
        }}
      />
      <Tab.Screen
        name="Lead"
        component={LeadScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center" }}>
                <Feather
                  name="briefcase"
                  size={24}
                  style={{
                    color: focused ? "#6A5AE0" : "#9e9ea7",
                    transform: [{ scale: focused ? 1.2 : 1 }],
                    transition: "transform 0.3s ease",
                  }}
                />
              </View>
            );
          },
          tabBarLabel: () => null, // Hide label
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center" }}>
                <Feather
                  name="user"
                  size={24}
                  style={{
                    color: focused ? "#6A5AE0" : "#9e9ea7",
                    transform: [{ scale: focused ? 1.2 : 1 }],
                    transition: "transform 0.3s ease",
                  }}
                />
              </View>
            );
          },
          tabBarLabel: () => null, // Hide label
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return <TabNavigator />;
}
