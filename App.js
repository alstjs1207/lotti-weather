import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '';

export default class App extends React.Component {

  state = {
    isLoading : true
  };

  getWeather = async(latitude,longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();

      // send to API and get Weather
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });

    } catch (error) {
      Alert.alert("Can't find you.","So sad");
    }

  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return (isLoading ? <Loading /> : null);
  }
}
