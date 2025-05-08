import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type CurrentAffairsProps = {
  onViewAllPress?: () => void;
};

export function CurrentAffairs({ onViewAllPress }: CurrentAffairsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Current Affairs</Text>
        <TouchableOpacity onPress={onViewAllPress}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Latest</Text>
          <Text style={styles.cardSubtitle}>Current Affairs</Text>
        </View>
        <Image 
          source={require('@/assets/images/actionAfair.png')} 
          style={styles.cardImage} 
          resizeMode="cover"
        />
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 500,
    color: '#000'
  },
  viewAll: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  cardContent: {
    padding: 20,
    flex: 1
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginBottom: 4
  },
  cardSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000'
  },
  cardImage: {
    width: 150,
    height: 150,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16
  }
});