import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import theme from "./app/config/colors";
import Constants from "expo-constants";

import { FontAwesome } from "@expo/vector-icons";

export default function App() {
	return (
		<View style={styles.container}>
			{/* Hours Bar (Contains extra styles) */}
			<TouchableOpacity
				style={[styles.longBar, { marginTop: 20 }]}
				onPress={() => console.log("Hour Pressed")}
			>
				<Text style={styles.text}>Hours</Text>
				<FontAwesome
					name="angle-right"
					size={24}
					color="white"
					style={styles.icon}
				/>
			</TouchableOpacity>
			{/* Minutes Bar */}
			<TouchableOpacity
				style={styles.longBar}
				onPress={() => console.log("Hour Pressed")}
			>
				<Text style={styles.text}>Minutes</Text>
				<FontAwesome
					name="angle-right"
					size={24}
					color="white"
					style={styles.icon}
				/>
			</TouchableOpacity>
			{/* AM/PM and findButton Bar */}
			<View style={styles.buttonContainer}>
				<View style={styles.amPmButton}></View>
				<View style={styles.findButton}></View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		backgroundColor: "#000",
	},
	longBar: {
		marginHorizontal: 30,
		paddingRight: 25,
		height: 62,
		borderColor: theme.colors.primary,
		borderWidth: 1.5,
		borderRadius: 20,
		marginBottom: 30,
		alignItems: "center",
		flexDirection: "row",
	},
	text: {
		color: theme.colors.white,
		fontSize: theme.fontSize,
		marginLeft: 20,
	},
	icon: {
		marginLeft: "auto",
	},
});
