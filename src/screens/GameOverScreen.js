import {Dimensions, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import {Colors} from '../../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const deviceWidth = Dimensions.get('window').width;

export default function GameOverScreen(props) {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Title>
        GAME OVER!
      </Title>
      <View style={styles.imageContainerStyle}>
        <Image style={styles.imageStyle} source={require('../../assets/images/success.png')}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the <Text
        style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <PrimaryButton onPress={props.onStartNewGame}>Play Again!</PrimaryButton>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainerStyle: {
    borderRadius: 200,
    width: deviceWidth < 390 ? 200 : 300,
    height: deviceWidth < 390 ? 200 : 300,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: 'hidden',
    margin: 36,
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans-regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})