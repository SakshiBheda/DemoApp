import { Tabs } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 20,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e5e5e5',
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93'
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/Compass-r.png')} 
              style={[styles.tabIcon, focused && styles.activeTabIcon]} 
              resizeMode="contain"
            />
          )
        }}
      />
      <Tabs.Screen
        name="apmc"
        options={{
          title: 'APMC',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/Leaf-r.png')} 
              style={[styles.tabIcon, focused && styles.activeTabIcon]} 
              resizeMode="contain"
            />
          )
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.homeIconContainer, focused && styles.homeIconContainerActive]}>
              <Image 
                source={require('@/assets/images/House-r.png')} 
                style={styles.homeIcon} 
                resizeMode="contain"
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/Vector.png')} 
              style={[styles.tabIcon, focused && styles.activeTabIcon]} 
              resizeMode="contain"
            />
          )
        }}
      />
      <Tabs.Screen
        name="forms"
        options={{
          title: 'Forms',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/ClipboardText-r.png')} 
              style={[styles.tabIcon, focused && styles.activeTabIcon]} 
              resizeMode="contain"
            />
          )
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  homeIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    opacity: 0.9,
    top: 10
  },
  homeIconContainerActive: {
    opacity: 1,
    transform: [{ scale: 1.1 }]
  },
  homeIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff'
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: '#8E8E93'
  },
  activeTabIcon: {
    tintColor: '#007AFF'
  }
});
