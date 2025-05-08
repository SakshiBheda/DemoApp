import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Slider } from './slider';


type APMCDataProps = {
  onViewAllPress?: () => void;
};


export function APMCData({ onViewAllPress }: APMCDataProps) {
  const commoditiesData = [
    {
      id: '1',
      name: 'Groundnut',
      location: 'Amreli',
      distance: '46KM',
      maxPrice: '₹1015',
      minPrice: '₹1012',
      quantity: '20 KG',
      updatedDate: '08-04-2025',
      image: require('@/assets/images/pngimg.com - peanut_PNG21 1.png'),
    },
    {
      id: '2',
      name: 'Groundnut',
      location: 'Amreli',
      distance: '46KM',
      maxPrice: '₹1015',
      minPrice: '₹1012',
      quantity: '20 KG',
      updatedDate: '08-04-2025',
      image: require('@/assets/images/image (1).png'),
    },
    {
      id: '3',
      name: 'Groundnut',
      location: 'Amreli',
      distance: '46KM',
      maxPrice: '₹1015',
      minPrice: '₹1012',
      quantity: '20 KG',
      updatedDate: '08-04-2025',
      image: require('@/assets/images/pngimg.com - peanut_PNG21 1.png'),
    }
  ];

  const carouselItems = commoditiesData.map(item => ({
    id: item.id,
    title: item.name,
    subtitle: item.location,
    description: (
         <View>
      <Text>
        <Text>{item.maxPrice} </Text>
        <Text style={{ color: 'green' }}>↑</Text>
        <Text> - {item.minPrice} </Text>
        <Text style={{ color: 'red' }}>↓</Text>
        <Text> | {item.quantity}</Text>
      </Text>
      <Text style={{ color: '#888', fontSize: 12, marginTop: 2 }}>
        Updated on {item.updatedDate}
      </Text>
    </View>
      ),
    image: item.image
  }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>APMC Data</Text>
        <TouchableOpacity onPress={onViewAllPress}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <Slider items={carouselItems} />
    
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
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  viewAll: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500'
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 24
  }
});