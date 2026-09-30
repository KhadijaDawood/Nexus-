import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import NexusButton from "../components/NexusButton";

type WelcomeScreenProps = {
  onBegin?: () => void;
};

export default function WelcomeScreen({ onBegin }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topBrand}>
          <Image
            source={require("../assets/branding/nexus-symbol.jpg")}
            style={styles.symbol}
            resizeMode="contain"
          />

          <Image
            source={require("../assets/branding/nexus-wordmark.jpg")}
            style={styles.wordmark}
            resizeMode="contain"
          />
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.title}>
            Where Self-Awareness{"\n"}Becomes Direction
          </Text>

          <Text style={styles.tagline}>
            Your Signals. Your Patterns. Your Direction.
          </Text>

          <View style={styles.buttonContainer}>
            <NexusButton
              title="Begin My Discovery →"
              onPress={() => onBegin?.()}
            />
          </View>
        </View>

        <Text style={styles.footer}>
          Your journey is yours.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F7FF",
  },

  container: {
    flex: 1,
    backgroundColor: "#F8F7FF",
    paddingHorizontal: 24,
    paddingVertical: 28,
    justifyContent: "space-between",
    alignItems: "center",
  },

  topBrand: {
    alignItems: "center",
    marginTop: 42,
  },

  symbol: {
    width: 82,
    height: 82,
    marginBottom: 14,
  },

  wordmark: {
    width: 112,
    height: 34,
  },

  mainContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },

  title: {
    maxWidth: 360,
    textAlign: "center",
    fontSize: 31,
    lineHeight: 39,
    fontWeight: "700",
    color: "#111827",
  },

  tagline: {
    marginTop: 42,
    textAlign: "center",
    fontSize: 10,
    lineHeight: 16,
    color: "#A5A2B3",
    letterSpacing: 0.2,
  },

  buttonContainer: {
      width: "100%",
        maxWidth: 330,
          marginTop: 132,
            alignItems: "center",
            },


  footer: {
    marginBottom: 22,
    fontSize: 10,
    lineHeight: 15,
    color: "#A5A2B3",
    textAlign: "center",
  },
});
