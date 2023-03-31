import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import theme from "../config/colors";
import Constants from "expo-constants";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import AppModal from "./AppModal";
import { useState } from "react";
import * as array from "../utils/timeArray";
import sleeptime from "../utils/sleeptime";

export default function MainComponent() {
	const [hoursModalVisible, setHoursModalVisible] = useState(false);
	const [minutesModalVisible, setMinutesModalVisible] = useState(false);
	const [hours, setHours] = useState({ color: "#a0a0a0", value: "Hours" });
	const [minutes, setMinutes] = useState({
		color: "#a0a0a0",
		value: "Minutes",
	});
	const [amPm, setAmPm] = useState({ visible: "AM", hidden: "PM" });
	const [result, setResult] = useState([]);
	const [conditionRender, setConditionRender] = useState({
		timeQuery: true,
		timeResult: false,
	});

	const handleHourButton = () => {
		setHoursModalVisible(true);
	};
	const handleMinuteButton = () => {
		setMinutesModalVisible(true);
	};
	const handleAmPmButton = () => {
		let myAmPm = { ...amPm };
		myAmPm = { visible: amPm.hidden, hidden: amPm.visible };
		setAmPm(myAmPm);
	};
	const handleFindButton = (fall_asleep_at) => {
		let hrs = parseInt(hours.value);
		let mins = parseInt(minutes.value);
		if (amPm.visible === "PM") hrs += 12;
		let time = sleeptime(hrs, mins, amPm.visible, false, false);
		setResult(time);
		setConditionRender({ timeQuery: false, timeResult: true });
	};
	const handleSleepNowButton = () => {
		let time = sleeptime(true);
		setResult(time);
		setConditionRender({ timeQuery: false, timeResult: true });
	};
	const handleReset = () => {
		setConditionRender({ timeQuery: true, timeResult: false });
	};
	const handleSwtichMethodButton = () => {
		console.log("Switch Method");
	};

	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.boldText,
					{
						color: theme.colors.primary,
						alignSelf: "center",
						marginBottom: 20,
					},
				]}
			>
				I want to wake up at...
			</Text>
			{conditionRender.timeQuery && (
				<View>
					{/* Hours Bar */}
					<TouchableOpacity
						style={styles.longBar}
						onPress={handleHourButton}
					>
						<Text
							style={[
								styles.marginedText,
								{ color: hours.color },
							]}
						>
							{hours.value}
						</Text>
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
						onPress={handleMinuteButton}
					>
						<Text
							style={[
								styles.marginedText,
								{ color: minutes.color },
							]}
						>
							{minutes.value}
						</Text>
						<FontAwesome
							name="angle-right"
							size={24}
							color="white"
							style={styles.icon}
						/>
					</TouchableOpacity>
					{/* two modals for each button */}
					<AppModal
						visible={hoursModalVisible}
						setVisible={setHoursModalVisible}
						array={array.hours}
						time={hours}
						setTime={setHours}
					/>
					<AppModal
						visible={minutesModalVisible}
						setVisible={setMinutesModalVisible}
						array={array.minutes}
						time={minutes}
						setTime={setMinutes}
					/>
					{/* AM/PM and findButton Bar */}
					<View style={styles.buttonContainer}>
						{/* am/pm button */}
						<TouchableOpacity
							style={styles.button}
							onPress={handleAmPmButton}
						>
							<Text style={styles.marginedText}>
								{amPm.visible}
							</Text>
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
							onPress={handleFindButton}
						>
							<Text style={styles.boldText}>Find</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.sleepNowButton}
						onPress={handleSleepNowButton}
					>
						<Text style={styles.text}>Sleep Now</Text>
					</TouchableOpacity>
				</View>
			)}
			{conditionRender.timeQuery && (
				/* Switch method button */
				<TouchableOpacity
					style={styles.switchMethodButton}
					onPress={handleSwtichMethodButton}
				>
					<Text
						style={[
							styles.boldText,
							{
								textDecorationLine: "underline",
								color: theme.colors.secondary,
							},
						]}
					>
						I plan to fall asleep at
					</Text>
				</TouchableOpacity>
			)}
			{conditionRender.timeResult && (
				<View style={styles.resultContainer}>
					<View style={styles.resultComponent}>
						<Text style={styles.serialNumberText}>1</Text>
						<Text style={styles.timeText}>{result[0]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text style={styles.serialNumberText}>2</Text>
						<Text style={styles.timeText}>{result[1]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text style={styles.serialNumberText}>3</Text>
						<Text style={styles.timeText}>{result[2]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text style={styles.serialNumberText}>4</Text>
						<Text style={styles.timeText}>{result[3]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text style={styles.serialNumberText}>5</Text>
						<Text style={styles.timeText}>{result[4]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text style={styles.serialNumberText}>6</Text>
						<Text style={styles.timeText}>{result[5]}</Text>
					</View>
					<TouchableOpacity
						style={styles.resetButton}
						onPress={handleReset}
					>
						<MaterialCommunityIcons
							name="autorenew"
							color={theme.colors.white}
							size={30}
						/>
						<Text
							style={{
								color: "white",
								fontSize: 20,
								marginTop: 2,
							}}
						>
							Reset
						</Text>
					</TouchableOpacity>
				</View>
			)}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
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
	resultContainer: {
		flex: 1,
		alignItems: "center",
	},
	resultComponent: {
		flexDirection: "row",
		alignItems: "center",
	},
	serialNumberText: {
		color: theme.colors.primary,
		fontSize: 45,
		marginRight: 10,
	},
	timeText: {
		color: "white",
		fontSize: theme.fontSize,
		fontWeight: "600",
	},
	resetButton: {
		backgroundColor: theme.colors.primary,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		padding: 20,
		marginTop: 30,
	},
});
