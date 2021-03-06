import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: 'absolute', left: 0, right: 0, bottom: 0
  },
  cardButton: {
    backgroundColor: '#604166',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#665059',
    borderStyle: 'solid',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  temperatureText: {
    fontSize: 25,
    marginBottom: 10,
    color: '#fff',
  },
  TopTemperatureTextSizeAndColor: {
    fontSize:80,
    color: '#fff'
  },
  cardImg: {
    width: 50,
    height: 50,
    marginTop: 20
  },
  textView: {
    flexDirection:'row',
    flexWrap: 'nowrap',
    marginTop: 20
  },
  dayText: {
    color: '#e3e3e3',
    fontSize: 20
  },
  todayWea: {
    flex: 1,
    alignItems: 'center'
  },
  MarginTop0: {
    marginTop: 0
  },
  marginTop20: {
    marginTop: 20
  },
  marginLeft10: {
    marginLeft: 20
  }
})
