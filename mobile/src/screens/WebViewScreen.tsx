import React, { useState, useRef } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import AdBanner from '../components/AdBanner';

const WebViewScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const webViewRef = useRef<WebView | null>(null);

  const onReload = () => {
    setError(false);
    webViewRef.current?.reload();
  };

  return (
    <View style={styles.container}>
      {/* Header with navigation controls */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => webViewRef.current?.goBack()}
          style={styles.headerButton}
        >
          <Text style={styles.headerButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReload} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>

      {/* Main WebView */}
      <View style={styles.webViewContainer}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Failed to load page</Text>
            <TouchableOpacity onPress={onReload} style={styles.retryButton}>
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <WebView
            ref={webViewRef}
            source={{ uri: 'https://cropdoctor.in' }}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
            style={styles.webView}
          />
        )}
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        )}
      </View>

      {/* AdMob Banner */}
      <AdBanner />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
    paddingHorizontal: 16,
  },
  headerButton: {
    padding: 8,
  },
  headerButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  webViewContainer: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#ff0000',
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default WebViewScreen;
