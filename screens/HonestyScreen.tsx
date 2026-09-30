import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import NexusButton from "../components/NexusButton";
import { colors, typography } from "../constants/theme";

type Props = {
  onContinue: () => void;
  onBack: () => void;
};

export default function HonestyScreen({ onContinue }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.wordmark}>NEXUS</Text>

        <View style={styles.main}>
          <Text style={styles.title}>Begin with honesty</Text>

          <Text style={styles.paragraph}>Take your time.</Text>

          <Text style={styles.paragraph}>
            There is no "right" version of you to discover here.
          </Text>

          <Text style={styles.paragraph}>
            We're not trying to create a better version of you.
          </Text>

          <Text style={styles.paragraph}>
            We're trying to understand the real one.
          </Text>
        </View>

        <View style={styles.action}>
          <NexusButton
            title="Continue"
            onPress={onContinue}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 36,
    paddingTop: 34,
    paddingBottom: 40,
  },

  wordmark: {
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -1,
    color: colors.deepInk,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    ...typography.display,
    textAlign: "center",
    color: colors.deepInk,
    marginBottom: 52,
  },

  paragraph: {
    fontSize: 20,
    lineHeight: 32,
    color: colors.deepInk,
    marginBottom: 18,
  },

  action: {
    width: "100%",
    marginTop: 40,
  },
});
