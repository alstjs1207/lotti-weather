import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥 번개",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "Is like rain, but gay 🏳️‍🌈"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비",
    subtitle: "For more info look outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "Do you want to build a snowman? Fuck no."
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "화창",
    subtitle: "Go get your ass burnt"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#5D4157", "#A8CABA"],
    title: "안개",
    subtitle: "Just don't go outside."
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "대체로 흐림",
    subtitle: "대체로 흐림"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "미세먼지",
    subtitle: "Thanks a lot China 🖕🏻"
  },
}

export default function Weather({ date, temp, condition }) {

  return (
    <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.halfContainer}>
        <Text style={styles.date}>
          {date}
        </Text>
        <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.temp}>
          {temp}°
        </Text>
      </View>
      {/* <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>
          {weatherOptions[condition].title}
        </Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View> */}
    </LinearGradient>);
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Dust",
    "Haze",
    "Mist"
  ]).isRequired,
  date: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  },
  halfContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white",
    borderRadius: 25
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  },
  city: {
    color: "white",
    fontSize: 33,
    fontWeight: '600'
  },
  date: {
    color: "white",
    fontSize: 18,
    fontWeight: '500'
  }
});
