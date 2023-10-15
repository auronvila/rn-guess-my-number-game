import {Alert, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import {useEffect, useState} from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import {Colors} from '../../constants/colors';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
export default function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber)
  const [currentGues, setCurrentGues] = useState(initialGuess)

  useEffect(() => {
    if (currentGues === props.userNumber) {
      props.gameOverHandler();
    }
  }, [currentGues, props.userNumber, props.gameOverHandler]);

  function nextGuesshandler(direction) {
    if ((direction === 'lower' && currentGues < props.userNumber) || (direction === 'greater' && currentGues > props.userNumber)) {
      Alert.alert('Do not Lie', 'You know that this is wrong...', [{text: 'sorry!', style: 'cancel'}])
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGues;
    } else {
      minBoundary = currentGues + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGues);
    setCurrentGues(newRndNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Oponents Guess</Title>
      <NumberContainer>{currentGues}</NumberContainer>
      <Card>
        <Text style={styles.instructionTextStyle}>Lower or Higher</Text>
        <View style={styles.buttonContainer}>
          <View style={{flex: 1}}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <Text>Log the rounds</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    padding: 14
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructionTextStyle: {
    color: Colors.primary600,
    fontSize: 24,
    marginBottom:15,
  }
})