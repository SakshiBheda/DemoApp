import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IconSymbol } from './ui/IconSymbol';

export function Header() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/Group.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <ThemedText style={styles.appName}>OneApp</ThemedText>
      </View>
      
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.locationButton}>
          <ThemedText style={styles.locationText}>Amreli</ThemedText>
          <IconSymbol name="chevron.down" size={16} color="#666" />
        </TouchableOpacity>
        
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.notificationDot} />
            <View style={styles.bellContainer}>
              <IconSymbol name="bell" size={24} color="#666" />
            </View>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity>
          <Image 
            source={require('../assets/images/image.png')} 
            style={styles.profilePic} 
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  logo: {
    width: 32,
    height: 32
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20
  },
  locationText: {
    fontSize: 14,
    color: '#666'
  },
  iconButtonContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderRadius: 20
  },
  iconButton: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bellContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationDot: {
    position: 'absolute',
    top: 1,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 1
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});