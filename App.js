import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import theme from "./app/config/colors";
import Constants from "expo-constants";

import { FontAwesome } from "@expo/vector-icons";

export default function App() {
	return (
		<View style={styles.container}>
			{/* Hours Bar */}
			<TouchableOpacity
				style={styles.longBar}
				onPress={() => console.log("Hour Pressed")}
			>
				<Text style={styles.marginedText}>Hours</Text>
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
				<Text style={styles.marginedText}>Minutes</Text>
				<FontAwesome
					name="angle-right"
					size={24}
					color="white"
					style={styles.icon}
				/>
			</TouchableOpacity>
			{/* AM/PM and findButton Bar */}
			<View style={styles.buttonContainer}>
				{/* am/pm button */}
				<TouchableOpacity style={styles.button}>
					<Text style={styles.marginedText}>AM</Text>
				</TouchableOpacity>
				{/* findButton */}
				<TouchableOpacity
					style={[
						styles.button,
						{
							backgroundColor: theme.colors.primary,
							borderColor: "#00000000",
							alignItems: "center",
							justifyContent: "center",
						},
					]}
				>
					<Text style={styles.boldText}>Find</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.sleepNowButton}>
				<Text style={styles.text}>Sleep Now</Text>
			</TouchableOpacity>
			{/* Switch method button */}
			<TouchableOpacity style={styles.switchMethodButton}>
				<Text
					style={[
						styles.boldText,
						{
							textDecorationLine: "underline",
							color: theme.colors.primary,
						},
					]}
				>
					I plan to fall asleep at
				</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight + 20,
		flex: 1,
		backgroundColor: "#000",
		paddingHorizontal: 30,
		padding: 20,
	},
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
	text: {
		color: theme.colors.white,
		fontSize: theme.fontSize,
	},
	marginedText: {
		color: theme.colors.white,
		fontSize: theme.fontSize,
		marginLeft: 20,
	},
	boldText: {
		color: theme.colors.white,
		fontSize: theme.fontSize,
		fontWeight: 500,
	},
	icon: {
		marginLeft: "auto",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 40,
	},
	button: {
		height: 62,
		width: "45%",
		borderWidth: 2,
		borderRadius: 20,
		borderColor: theme.colors.primary,
		justifyContent: "center",
	},
	sleepNowButton: {
		height: 250,
		width: 250,
		borderWidth: 5,
		borderColor: theme.colors.primary,
		borderRadius: 250,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
	},
	switchMethodButton: {
		alignSelf: "center",
		marginTop: "auto",
	},
});
