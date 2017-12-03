import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import api from '../Services/WeatherApi'

import { Images } from '../Themes'
import TodayWeather from '../Components/TodayWeather';
import Forecast from '../Components/Forecast';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      status: '',
      date: new Date(),
      isLoading: true
    };
  }

   getData() {
     let self = this;
     api().then(data => {
      self.setState({status: data, isLoading: false});
    });

  }

  componentWillMount() {
    this.getData();
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.weatherBackground} style={styles.backgroundImage} resizeMode='stretch'/>
        <TodayWeather status={this.state.status} isLoading={this.state.isLoading}/>
        <Forecast status={this.state.status} isLoading={this.state.isLoading}/>
      </View>
    )
  }
}
