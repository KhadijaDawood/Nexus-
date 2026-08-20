import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors } from "../constants/theme";

type NexusHeaderProps = {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
};

export default function NexusHeader({
  title = "Nexus",
  showBack = false,
  onBack,
}: NexusHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {showBack && (
          <Pressable
            onPress={onBack}
            style={styles.backButton}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Text style={styles.backText}>‹</Text>
          </Pressable>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.side} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },

  side: {
    width: 44,
    alignItems: "flex-start",
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    fontSize: 32,
    lineHeight: 34,
    color: colors.deepInk,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.deepInk,
  },
});
