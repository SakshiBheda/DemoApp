import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HelpLineItem = {
  id: string;
  title: string;
  icon: any; 
};

type EssentialsHelpLineProps = {
  onViewAllPress?: () => void;
  onItemPress?: (itemId: string) => void;
};

export function EssentialsHelpLine({ onViewAllPress, onItemPress }: EssentialsHelpLineProps) {

  const helpLineItems: HelpLineItem[] = [
    {
      id: '1',
      title: 'Farmers',
      icon: require('@/assets/images/fi_2354266.png'),
    },
    {
      id: '2',
      title: 'Senior Citizen',
      icon: require('@/assets/images/Group (1).png'), 
    },
    {
      id: '3',
      title: 'Police',
      icon: require('@/assets/images/fi_3065701.png'), 
    },
    {
      id: '4',
      title: 'Health',
      icon: require('@/assets/images/fi_2957990.png'), 
    },
    {
      id: '5',
      title: 'Student',
      icon: require('@/assets/images/fi_7941552.png'),
    },
    {
      id: '6',
      title: 'Women',
      icon: require('@/assets/images/fi_53176.png'),
    },
    {
      id: '7',
      title: 'Child',
      icon: require('@/assets/images/Group 1410102635.png'), 
    },
    {
      id: '8',
      title: 'Indian Railways',
      icon: require('@/assets/images/Railway Station.png'),
    },
  ];

  const handleItemPress = (itemId: string) => {
    if (onItemPress) {
      onItemPress(itemId);
    } else {
      console.log(`Help line item ${itemId} pressed`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image 
            source={require('@/assets/images/Phone.png')}
            style={styles.phoneIcon} 
          />
          <Text style={styles.title}>Essentials Help Line Number</Text>
        </View>
       
      </View>

      <View style={styles.gridContainer}>
        {helpLineItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.gridItem}
            onPress={() => handleItemPress(item.id)}
          >
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.icon} resizeMode="contain" />
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  phoneIcon: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -8
  },
  gridItem: {
    width: '25%',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 16
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#E6F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  icon: {
    width: 22,
    height: 22
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center'
  }
});