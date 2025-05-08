import { APMCData } from '@/components/APMCData';
import { Carousel } from '@/components/Carousel';
import { CurrentAffairs } from '@/components/CurrentAffairs';
import { EssentialsHelpLine } from '@/components/EssentialsHelpLine';
import { FeaturedForms } from '@/components/FeaturedForms';
import { FestivalReligion } from '@/components/FestivalReligion';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { WeatherInformation } from '@/components/WeatherInformation';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const carouselItems = [
    {
      id: '1',
      title: 'Discover government',
      subtitle: 'campaign for you',
      description: 'Find Personalized campaign Based Of Eligibility',
      image: require('@/assets/images/carousel.png')
    },
    {
      id: '2',
      title: 'Discover government',
      subtitle: 'campaign for you',
      description: 'Find Personalized campaign Based Of Eligibility',
      image: require('@/assets/images/carousel.png')
    },
    {
      id: '3',
      title: 'Discover government',
      subtitle: 'campaign for you',
      description: 'Find Personalized campaign Based Of Eligibility',
      image: require('@/assets/images/carousel.png') 
    },
  ];

  const handleReadAloud = () => {
    console.log('Read aloud pressed');
  };

  const handleViewAll = () => {
    console.log('View all pressed');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        scrollEnabled={true}
      >
        <Header />
        <SearchBar />
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingEmoji}>👋</Text>
          <Text style={styles.greetingText}>Hey, Manoj</Text>
          <TouchableOpacity style={styles.readAloudButton} onPress={handleReadAloud}>
            <Image source={require('@/assets/images/megaphone 1.png')} />
            <Text style={styles.readAloudText}>Read Aloud</Text>
          </TouchableOpacity>
        </View>
        <Carousel items={carouselItems} />
        <CurrentAffairs onViewAllPress={handleViewAll} />
        <FestivalReligion onViewAllPress={handleViewAll} />
        <WeatherInformation onViewAllPress={handleViewAll} />
        <APMCData onViewAllPress={handleViewAll} />
        <FeaturedForms onViewAllPress={handleViewAll} />
        <EssentialsHelpLine onViewAllPress={handleViewAll} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'relative'
  },
  greetingEmoji: {
    fontSize: 24,
    fontWeight: 'semibold',
    marginRight: 8
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  },
  readAloudButton: {
    position: 'absolute',
    right: 16,
    backgroundColor: '#D7E7FF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  readAloudText: {
    color: '#007AFF',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500'
  }
});
