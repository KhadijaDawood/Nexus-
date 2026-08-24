import React from "react";
import { StyleSheet, View } from "react-native";
import { colors, radius } from "../constants/theme";

type ProgressBarProps = { progress: number; segments?: number; width?: number };
export default function ProgressBar({ progress, segments = 1, width = 320 }: ProgressBarProps) {
  return <View style={[styles.track, { width }]}><View style={[styles.fill, { width: `${Math.max(0, Math.min(1, progress)) * 100}%` }]} />{Array.from({ length: Math.max(0, segments - 1) }).map((_, index) => <View key={index} style={[styles.divider, { left: `${((index + 1) / segments) * 100}%` }]} />)}</View>;
}
const styles = StyleSheet.create({ track: { height: 14, overflow: "hidden", borderWidth: 2, borderColor: colors.deepInk, borderRadius: radius.card, backgroundColor: colors.border }, fill: { height: "100%", backgroundColor: colors.secondary }, divider: { position: "absolute", top: 0, width: 2, height: "100%", backgroundColor: colors.white } });