import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
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
          <Text style={[styles.temperatureText, styles.marginTop20]}>晴</Text>
          <View style={[styles.textView, styles.MarginTop0]}>
            <Text style={[styles.temperatureText, styles.TopTemperatureTextSizeAndColor, styles.marginLeft10]}>20</Text>
            <Text style={styles.TopTemperatureTextSizeAndColor}>°</Text>
          </View>
          <Text style={styles.temperatureText}>武汉</Text>
          <Text style={styles.dayText}>Today, 4:05pm</Text>
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
