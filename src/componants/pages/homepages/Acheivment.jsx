import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const AchievementScreen = ({ points = 80, navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://s3-alpha-sig.figma.com/img/bdaf/f2e8/8834486d2df7deb658fb45654d84d5c7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxf-R-e304eewwzYXHlLUptFhXOOWfpCMFZOampyEMF-VgfUcqy2647NNkYjC1pTErhNLWgt3ng0m~sRnU1C5g6cnLbQsL8V1LyMxcMsvgVj-fpitvwdiYH1xA~D4GN0NNtp52~QAOg~i13XdghPUchzTv~tFyhcdn-~dEk02ibwn87FIN4sg18VhR1yINBEKM6lXq988gJO-E9H0G3k0OKSBKTgqLnyIjOiv5zzllRpbAwTqpcfsAlDv~~hNB6s8GDz0YGmhcCGNGm-bP28oV9trs-elgV6S~lrJtiOXozMDFTIJeeZ8~BtSadI0jtvqrFxiKd3o6ohWABaKQL8tA__",
      }}
      style={styles.container}
    >
      <View></View>
      <View style={styles.content}>
        <Text style={styles.header}>Nice Work</Text>

        {/* Checkmark Circle */}
        <View style={styles.achievementCircleOuter}>
          <View style={styles.achievementCircleInner}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </View>

        {/* Stars */}
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

        <Text style={styles.points}>You Earned {points} pts</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("NiceWork")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7646FE",
    height: 500,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
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
    fontSize: 65,
    marginTop: -5,
  },
  filledStar: {
    color: "#FFE55A",
  },
  emptyStar: {
    color: "##7646FE",
  },
  points: {
    color: "white",
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AchievementScreen;
