import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";

import { colors, radius } from "../constants/theme";

type NexusButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export default function NexusButton({
  title,
  onPress,
  variant = "primary",
  disabled = false,
}: NexusButtonProps) {
  const isSecondary = variant === "secondary";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        isSecondary ? styles.secondary : styles.primary,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text
        style={[
          styles.text,
          isSecondary ? styles.secondaryText : styles.primaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

type Styles = {
  base: ViewStyle;
  primary: ViewStyle;
  secondary: ViewStyle;
  pressed: ViewStyle;
  disabled: ViewStyle;
  text: TextStyle;
  primaryText: TextStyle;
  secondaryText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  base: {
    minHeight: 52,
    paddingHorizontal: 24,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.deepInk,
  },

  pressed: {
    opacity: 0.8,
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
  },

  primaryText: {
    color: colors.white,
  },

  secondaryText: {
    color: colors.deepInk,
  },
});
