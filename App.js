import React from 'react';
import { Alert, StyleSheet, View, Text, StatusBar, ScrollView } from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';
import Constants from 'expo-constants';

const API_KEY = '92793b5443c183d36be6300ca569c3e8';

export default class App extends React.Component {

  state = {
    isLoading: true,
    weathers: []
  };

  getWeather = async (latitude, longitude) => {
    // const {
    //   data: {
    //     main: { temp },
    //     weather,
    //     name
    //   }
    // } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    //this.setState({isLoading: false, condition: weather[0].main, temp, city: name})
    const { data: { list } } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
    this.setState({ isLoading: false, weathers: list })

  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {
          latitude,
          longitude
        }
      } = await Location.getCurrentPositionAsync();

      // send to API and get Weather
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }

  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, weathers } = this.state;

    return (
      isLoading
        ? <Loading />
        : (
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {weathers.map((weather_data) => (
                <Weather 
                  key={weather_data.dt_txt} 
                  date={weather_data.dt_txt} 
                  temp={Math.round(weather_data.main.temp)} 
                  condition={weather_data.weather[0].main} />
              ))}
            </ScrollView>
          </View>
        )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    marginHorizontal: 1,
  }
});
