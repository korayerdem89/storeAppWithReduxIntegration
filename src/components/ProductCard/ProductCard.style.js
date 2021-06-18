import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    margin: 10,
    flexDirection: 'row',
  },
  body_container: {
    padding: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    fontSize: 13,
    fontStyle: 'italic',
  },
  image: {
    width: 100,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
    minHeight: 100,
  },
});
