import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

// Test AdMob IDs - Replace these with your actual AdMob IDs in production
const TEST_BANNER_ID_ANDROID = 'ca-app-pub-3940256099942544/6300978111';
const TEST_BANNER_ID_IOS = 'ca-app-pub-3940256099942544/2934735716';

const AdBanner: React.FC = () => {
  // Use appropriate test ID based on platform
  const bannerAdUnitId = Platform.select({
    ios: TEST_BANNER_ID_IOS,
    android: TEST_BANNER_ID_ANDROID,
  });

  const handleError = (error: string) => {
    console.warn('AdMob Banner Error:', error);
  };

  return (
    <View style={styles.bannerContainer}>
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID={bannerAdUnitId || ''}
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={handleError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 5,
  },
});

export default AdBanner;
