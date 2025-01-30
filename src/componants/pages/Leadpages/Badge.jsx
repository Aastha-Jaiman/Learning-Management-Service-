import React from "react";
import { View, StyleSheet } from "react-native";
import { Clock, SmilePlus, BarChart3 } from "lucide-react-native";

export const Badge = ({ type }) => {
  const getBadgeColors = () => {
    switch (type) {
      case "time":
        return {
          outer: "#E0FFF9",
          inner: "#4ADE80",
          iconColor: "#fff",
        };
      case "smile":
        return {
          outer: "#E5F3FF",
          inner: "#60A5FA",
          iconColor: "#fff",
        };
      case "chart":
        return {
          outer: "#FFF7E0",
          inner: "#FBBF24",
          iconColor: "#fff",
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case "time":
        return <Clock size={20} color="#fff" />;
      case "smile":
        return <SmilePlus size={20} color="#fff" />;
      case "chart":
        return <BarChart3 size={20} color="#fff" />;
    }
  };

  const colors = getBadgeColors();

  return (
    <View style={[styles.hexagon, { backgroundColor: colors.outer }]}>
      <View style={[styles.innerCircle, { backgroundColor: colors.inner }]}>
        {getIcon()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hexagon: {
    width: 90,
    height: 82,
    backgroundColor: "#E0FFF9",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "90deg" }],
  },
  innerCircle: {
    width: 56,
    height: 56,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#4ADE80",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-90deg" }],
  },
});
