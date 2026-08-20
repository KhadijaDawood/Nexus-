import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius } from "../constants/theme";

type NovaCardProps = {
  message: string;
};

export default function NovaCard({ message }: NovaCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>N</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>Nova</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    marginRight: 14,
  },

  avatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.white,
  },

  content: {
    flex: 1,
  },

  name: {
    marginBottom: 6,
    fontSize: 15,
    fontWeight: "600",
    color: colors.deepInk,
  },

  message: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.deepInk,
  },
});
