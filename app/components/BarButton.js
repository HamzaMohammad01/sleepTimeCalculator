import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import theme from "../config/colors";

export default function BarButton({ text }) {
	return (
		<TouchableOpacity
			style={styles.longBar}
			onPress={() => console.log("Hour Pressed")}
		>
			<Text style={styles.marginedText}>{text}</Text>
			<FontAwesome
				name="angle-right"
				size={24}
				color="white"
				style={styles.icon}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		longBar: {
			paddingRight: 25,
			height: 62,
			borderColor: theme.colors.primary,
			borderWidth: 1.5,
			borderRadius: 20,
			marginBottom: 30,
			alignItems: "center",
			flexDirection: "row",
		},
		marginedText: {
			color: theme.colors.white,
			fontSize: theme.fontSize,
			marginLeft: 20,
		},
	},
});
