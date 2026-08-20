import React, { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { colors, radius } from "../constants/theme";

type NexusCardProps = {
  children: ReactNode;
  title?: string;
  style?: ViewStyle;
};

export default function NexusCard({
  children,
  title,
  style,
}: NexusCardProps) {
  return (
    <View style={[styles.card, style]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 24,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
  },

  title: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "600",
    color: colors.deepInk,
  },

  content: {
    width: "100%",
  },
});
