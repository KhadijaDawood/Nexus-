import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import NexusButton from "../components/NexusButton";
import { colors, typography } from "../constants/theme";
import { IntroductionPage } from "../constants/discoveryContent";

type Props = { page: IntroductionPage; index: number; onContinue: () => void; onBack: () => void };
export default function IntroductionScreen({ page, index, onContinue, onBack }: Props) {
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><Image source={require("../assets/branding/nexus-wordmark.jpg")} style={styles.wordmark} resizeMode="contain" /><View style={styles.copy}><Text style={styles.title}>{page.title}</Text>{page.paragraphs.map((paragraph) => <Text key={paragraph} style={styles.paragraph}>{paragraph}</Text>)}</View><View style={styles.actions}>{index > 0 && <Text onPress={onBack} style={styles.back}>← Back</Text>}<NexusButton title={index === 7 ? "Continue  →" : "Continue  →"} onPress={onContinue} /></View></ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.background }, content: { flexGrow: 1, padding: 44, paddingTop: 64 }, wordmark: { width: 208, height: 68, alignSelf: "flex-start" }, copy: { flex: 1, justifyContent: "center", paddingVertical: 72 }, title: { ...typography.h1, marginBottom: 92, textAlign: "center", color: colors.deepInk }, paragraph: { marginBottom: 26, fontSize: 20, lineHeight: 32, color: colors.deepInk }, actions: { alignItems: "center", gap: 18 }, back: { fontSize: 18, color: colors.mutedText } });