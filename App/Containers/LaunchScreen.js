import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import api from '../Services/WeatherApi'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      status: '',
      date: new Date()
    };
  }

   getData() {
    api().then(data => {
      this.setState({status: data});
    });

  }

  componentDidMount() {
    this.getData();
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.weatherBackground} style={styles.backgroundImage} resizeMode='stretch' />
        {/*<ScrollView style={styles.container}>*/}
          {/*<View style={styles.centered}>*/}
            {/*<Image source={Images.emojiKiss} style={styles.logo} />*/}
          {/*</View>*/}
          {/*/!*<DevscreensButton />*!/*/}
        {/*</ScrollView>*/}
        <View style={styles.todayWea}>
          <Text style={[styles.temperatureText, styles.marginTop20]}>{this.state.status.weather ? this.state.status.weather[0].now.text : '...'}</Text>
          <View style={[styles.textView, styles.MarginTop0]}>
            <Text style={[styles.temperatureText, styles.TopTemperatureTextSizeAndColor, styles.marginLeft10]}>{this.state.status.weather ? this.state.status.weather[0].now.temperature : ''}</Text>
            <Text style={styles.TopTemperatureTextSizeAndColor}>°</Text>
          </View>
          <Text style={styles.temperatureText}>{this.state.status.weather ? this.state.status.weather[0].city_name : ''}</Text>
          <Text style={styles.dayText}>Today, {this.state.date.toLocaleTimeString()}</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardButton}>
            <Text style={[styles.cardText, styles.marginTop20]}>Mon</Text>
            <Image source={Images.sun} style={styles.cardImg}/>
            <View style={styles.textView}>
              <Text style={styles.temperatureText}>20</Text>
              <Text style={{color: '#fff'}}>°</Text>
            </View>
          </View>
          <View style={styles.cardButton}>
            <Text style={[styles.cardText, styles.marginTop20]}>Mon</Text>
            <Image source={Images.sun} style={styles.cardImg}/>
            <View style={styles.textView}>
              <Text style={styles.temperatureText}>20</Text>
              <Text style={{color: '#fff'}}>°</Text>
            </View>
          </View>
          <View style={styles.cardButton}>
            <Text style={[styles.cardText, styles.marginTop20]}>Mon</Text>
            <Image source={Images.sun} style={styles.cardImg}/>
            <View style={styles.textView}>
              <Text style={styles.temperatureText}>20</Text>
              <Text style={{color: '#fff'}}>°</Text>
            </View>
          </View>
          <View style={styles.cardButton}>
            <Text style={[styles.cardText, styles.marginTop20]}>Mon</Text>
            <Image source={Images.sun} style={styles.cardImg}/>
            <View style={styles.textView}>
              <Text style={styles.temperatureText}>20</Text>
              <Text style={{color: '#fff'}}>°</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
