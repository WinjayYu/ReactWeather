import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
console.debug(styles);

export default class LaunchScreen extends React.Component {
  render () {

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={{textAlign:'center', fontSize:25, color:'#fff', marginTop:50}}>
              hah 
            </Text>
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
