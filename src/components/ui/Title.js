import {StyleSheet, Text} from 'react-native';

export default function Title(props) {
  return (
    <Text style={styles.title}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontFamily:'open-sans-bold'
  }
})