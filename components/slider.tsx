import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

const { width } = Dimensions.get('window');

type CarouselItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string | React.ReactNode; 
  image: any; 
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Slider({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {items.map((item, index) => (
          <View key={item.id} style={styles.slide}>
            <View style={styles.contentContainer}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
              <View style={styles.textContent}>
                <ThemedText style={styles.title}>{item.title}</ThemedText>
                <ThemedText style={styles.subtitle}>{item.subtitle}</ThemedText>
                <ThemedText style={styles.description}>{item.description}</ThemedText>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.pagination}>
        {items.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.paginationDotActive : styles.paginationDotInactive
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 16
  },
  slide: {
    width: width - 32,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f0f8ff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    position: 'relative'
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
    paddingLeft: 16
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000'
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },
  image: {
    width: 100,
    height: 100,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  },
  paginationDotActive: {
    backgroundColor: '#007AFF',
    width: 24
  },
  paginationDotInactive: {
    backgroundColor: '#CCCCCC'
  }
});