import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type WeatherInformationProps = {
  onViewAllPress?: () => void;
};

export function WeatherInformation({ onViewAllPress }: WeatherInformationProps) {
  const weatherData = {
    location: 'Amreli',
    currentTemp: '29°',
    condition: 'Sunny',
    highTemp: '30°',
    lowTemp: '13°',
    hourlyForecast: [
      { hour: '1PM', temperature: '29°', icon: require('@/assets/images/Sun.png') },
      { hour: '2PM', temperature: '28°', icon: require('@/assets/images/Sun.png') },
      { hour: '3PM', temperature: '27°', icon: require('@/assets/images/Sun.png') },
      { hour: '4PM', temperature: '23°', icon: require('@/assets/images/Sun.png') },
      { hour: '5PM', temperature: '19°', icon: require('@/assets/images/Sun.png') },
      { hour: '6PM', temperature: '17°', icon: require('@/assets/images/Sun.png') },
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather Information & Alerts</Text>
        <TouchableOpacity onPress={onViewAllPress}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <View style={styles.mainWeather}>
          <View style={styles.leftContent}>
            <Text style={styles.location}>{weatherData.location}</Text>
            <Text style={styles.temperature}>{weatherData.currentTemp}</Text>
          </View>
          <View style={styles.rightContent}>
            <Image 
              source={require('@/assets/images/Sun.png')} 
              style={styles.weatherIcon} 
            />
            <Text style={styles.condition}>{weatherData.condition}</Text>
            <Text style={styles.highLow}>H:{weatherData.highTemp} L:{weatherData.lowTemp}</Text>
          </View>
        </View>
        
        <View style={styles.hourlyContainer}>
          {weatherData.hourlyForecast.map((item, index) => (
            <View key={index} style={[styles.hourlyItem]}>
              <Text style={styles.hourText}>{item.hour}</Text>
              <Image source={item.icon} style={styles.hourlyIcon} />
              <Text style={styles.hourTemp}>{item.temperature}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000'
  },
  viewAll: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16
  },
  mainWeather: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  leftContent: {
    justifyContent: 'center'
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8
  },
  temperature: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000'
  },
  rightContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  weatherIcon: {
    width: 18,
    height: 18,
    marginBottom: 8
  },
  condition: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4
  },
  highLow: {
    fontSize: 13,
    color: '#666'
  },
  hourlyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 8
  },
  hourlyItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 8,
    width: '15%',
    marginBottom: 10
  },
  hourText: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4
  },
  hourlyIcon: {
    width: 18,
    height: 18,
    marginBottom: 4
  },
  hourTemp: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});