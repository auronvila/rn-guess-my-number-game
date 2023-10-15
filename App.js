import {StatusBar} from 'expo-status-bar';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react';
import GameScreen from './src/screens/GameScreen';
import {Colors} from './constants/colors';
import GameOverScreen from './src/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen startGameHandler={startGameHandler}/>

  if (userNumber) {
    screen = <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen/>
  }


  return (
    <LinearGradient colors={[Colors.primary450, Colors.accent500,]} style={styles.rootScreen}>
      <ImageBackground
        imageStyle={{opacity: 0.15}}
        style={styles.rootScreen}
        resizeMode={'cover'}
        source={require('./assets/images/background.png')}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
