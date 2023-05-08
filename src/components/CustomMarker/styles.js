import {StyleSheet} from 'react-native';

const styles = isSelected => {
  return StyleSheet.create({
    container: {
      backgroundColor: isSelected ? 'black' : 'white',
      padding: 5,
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 20,
    },
    text: {
      fontWeight: 'bold',
      color: isSelected ? 'white' : 'black',
    },
  });
};

export default styles;
