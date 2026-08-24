import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors, radius } from "../constants/theme";
type TextAnswerInputProps = { value: string; onChangeText: (value: string) => void };
export default function TextAnswerInput({ value, onChangeText }: TextAnswerInputProps) { return <View style={[styles.container, value.trim().length > 0 && styles.active]}><TextInput value={value} onChangeText={onChangeText} multiline placeholder="Write what feels true to you..." placeholderTextColor={colors.deepInk} style={styles.input} textAlignVertical="top" /></View>; }
const styles = StyleSheet.create({ container: { minHeight: 420, padding: 30, borderWidth: 8, borderColor: colors.border, borderRadius: radius.lg, backgroundColor: colors.white }, active: { borderColor: colors.primary, backgroundColor: colors.softAccent }, input: { flex: 1, minHeight: 350, fontSize: 20, lineHeight: 28, color: colors.deepInk } });