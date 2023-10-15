import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';

export default function PrimaryButton(props) {
  function handlePress() {
    props.onPress();
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer,] : styles.buttonInnerContainer}
        android_ripple={{color: Colors.primary600}}
        onPress={handlePress}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 4},
    shadowRadius: 4,
    shadowOpacity: 0.9,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 4},
    shadowRadius: 4,
    shadowOpacity: 0.9,
  }
})