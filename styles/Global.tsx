import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const GlobalStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontFamily: 'NunitoRegular',
    fontSize: 18,
    color: '#333',
  },
  space: {
    marginTop: 25,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  details: {
    fontFamily: 'NunitoBold',
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    width: windowWidth - 30,
    height: 50,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#ad9e9e',
    borderWidth: 1,
  },
  reviewContainer: {
    flex: 1, // Use flex: 1 to make the container take the full height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
});
