import { Image } from 'expo-image';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Image
          source={require('../assets/images/search_outline_28.png')} style={styles.searchIcon}/>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#666"
        />
        <TouchableOpacity>
        
         <Image
          source={require('../assets/images/circle-microphone 1.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1
  },
  icon: {
    width: 25,
    height: 25,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    padding: 0
  },
  voiceButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 18,
    marginLeft: 8
  }
});