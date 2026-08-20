import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import NexusButton from "../components/NexusButton";
import NovaCard from "../components/NovaCard";
import { colors } from "../constants/theme";

type WelcomeScreenProps = {
  onBegin?: () => void;
};

export default function WelcomeScreen({
  onBegin,
}: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.brandArea}>
          <Image
            source={require("../assets/branding/nexus-symbol.png")}
            style={styles.symbol}
            resizeMode="contain"
          />

          <Image
            source={require("../assets/branding/nexus-wordmark.png")}
            style={styles.wordmark}
            resizeMode="contain"
          />
        </View>

        <View style={styles.introduction}>
          <Text style={styles.eyebrow}>
            YOUR DISCOVERY STARTS HERE
          </Text>

          <Text style={styles.heading}>
            Discover what makes you, you.
          </Text>

          <Text style={styles.description}>
            Nexus helps you explore your identity, strengths, interests,
            values, personality, barriers, vision, and growth — and connect
            them into a clearer picture of where you want to go.
          </Text>
        </View>

        <NovaCard
          message="There are no right or wrong answers. Take your time and answer honestly."
        />

        <View style={styles.action}>
          <NexusButton
            title="Begin My Discovery"
            onPress={() => onBegin?.()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: "space-between",
  },

  brandArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  symbol: {
    width: 38,
    height: 38,
  },

  wordmark: {
    width: 110,
    height: 38,
  },

  introduction: {
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
  },

  eyebrow: {
    marginBottom: 14,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1.5,
    color: colors.primary,
    textAlign: "center",
  },

  heading: {
    marginBottom: 16,
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "700",
    color: colors.deepInk,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: colors.deepInk,
    opacity: 0.75,
    textAlign: "center",
  },

  action: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },
});
