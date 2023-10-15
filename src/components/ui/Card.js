import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../../constants/colors';

export default function Card(props){
  return(
    <View style={styles.inputContainer}>
      {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary400,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {height: 4, width: 3},
    shadowRadius: 9,
    shadowOpacity: 0.9,
    alignItems: 'center',
  },
})
