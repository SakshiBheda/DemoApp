import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const WelcomeImage = memo(() => (
  <View style={styles.imageContainer}>
    <Image 
      source={require('../assets/images/Illustration.png')}
      style={styles.illustration}
      resizeMode="contain"
    />
  </View>
));

const WelcomeContent = memo(() => (
  <View style={styles.textContent}>
    <ThemedText style={styles.title}>Welcome to OneApp</ThemedText>
    <ThemedText style={styles.subtitle}>
      Lorem ipsum dolor sit amet consectetur, quam iaculis et sollicitudin sed ante vitae.
    </ThemedText>
  </View>
));

const GetStartedButton = memo(({ onPress }: { onPress: () => void }) => (
  <ThemedView style={styles.button} onTouchEnd={onPress}>
    <ThemedText style={styles.buttonText}>Get Started</ThemedText>
  </ThemedView>
));

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    router.push('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <WelcomeImage />
        <WelcomeContent />
      </View>
      <GetStartedButton onPress={handleGetStarted} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  illustration: {
    width: '80%',
    height: '100%'
  },
  textContent: {
    alignItems: 'center',
    paddingHorizontal: 40
  },
  title: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0
  },
  subtitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
    letterSpacing: 0
  },
  button: {
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#fff',
    fontSize: 16,
    letterSpacing: 0
  }
});