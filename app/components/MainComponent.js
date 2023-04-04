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
	const [color, setColor] = useState({
		primary: "#5786FF",
		secondary: "#E20000",
	});
	const [methodText, setMethodText] = useState({
		heading: "I want to wake up at",
		bottomLine: "I plan to fall asleep at",
	});
	const [resultMethodText, setResultMethodText] = useState({
		visible: "Then you should sleep at :-",
		hidden: "Then you should wake up at :-",
	});
	const [fall_asleep_at, setFall_asleep_at] = useState({
		visible: false,
		hidden: true,
	});
	const [hoursModalVisible, setHoursModalVisible] = useState(false);
	const [minutesModalVisible, setMinutesModalVisible] = useState(false);
	const [hours, setHours] = useState({
		color: "#a0a0a0",
		value: "Hours",
		tapped: false,
	});
	const [minutes, setMinutes] = useState({
		color: "#a0a0a0",
		value: "Minutes",
		tapped: false,
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
		if (hours.tapped === true && minutes.tapped === true) {
			if (amPm.visible === "PM") hrs += 12;
			// if (fall_asleep_at === true) {let time = }
			let time = sleeptime(
				hrs,
				mins,
				amPm.visible,
				false,
				fall_asleep_at
			);
			setResult(time);
			setConditionRender({ timeQuery: false, timeResult: true });
		}
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
		// console.log("Switch Method");
		let myColor = { ...color };
		myColor = { primary: color.secondary, secondary: color.primary };

		let myMethodText = { ...methodText };
		myMethodText = {
			heading: methodText.bottomLine,
			bottomLine: methodText.heading,
		};

		let myFall_asleep_at = { ...fall_asleep_at };
		myFall_asleep_at = {
			visible: fall_asleep_at.hidden,
			hidden: fall_asleep_at.visible,
		};

		setColor(myColor);
		setMethodText(myMethodText);
		setFall_asleep_at(myFall_asleep_at);
	};

	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.boldText,
					{
						color: color.primary,
						alignSelf: "center",
						marginBottom: 20,
					},
				]}
			>
				{methodText.heading}
			</Text>
			{conditionRender.timeQuery && (
				<View>
					{/* Hours Bar */}
					<TouchableOpacity
						style={[styles.longBar, { borderColor: color.primary }]}
						onPress={handleHourButton}
					>
						<Text
							style={[
								styles.marginedText,
								{ color: hours.color },
							]}
						>
							{hours.value.toString()}
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
						style={[styles.longBar, { borderColor: color.primary }]}
						onPress={handleMinuteButton}
					>
						<Text
							style={[
								styles.marginedText,
								{ color: minutes.color },
							]}
						>
							{minutes.value.toString()}
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
						color={color}
					/>
					<AppModal
						visible={minutesModalVisible}
						setVisible={setMinutesModalVisible}
						array={array.minutes}
						time={minutes}
						setTime={setMinutes}
						color={color}
					/>
					{/* AM/PM and findButton Bar */}
					<View style={styles.buttonContainer}>
						{/* am/pm button */}
						<TouchableOpacity
							style={[
								styles.button,
								{ borderColor: color.primary },
							]}
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
									backgroundColor: color.primary,
									borderColor: "#00000000",
									alignItems: "center",
									justifyContent: "center",
									borderColor: color.primary,
								},
							]}
							onPress={() =>
								handleFindButton(fall_asleep_at.visible)
							}
						>
							<Text style={styles.boldText}>Find</Text>
						</TouchableOpacity>
					</View>
					{/* Sleep now button */}
					<View
						style={{
							height: "48%",
							width: "100%",
							justifyContent: "space-around",
						}}
					>
						<TouchableOpacity
							style={[
								styles.sleepNowButton,
								{ borderColor: color.primary },
							]}
							onPress={handleSleepNowButton}
						>
							<Text style={styles.text}>Sleep Now</Text>
						</TouchableOpacity>
					</View>
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
								color: color.secondary,
							},
						]}
					>
						{methodText.bottomLine}
					</Text>
				</TouchableOpacity>
			)}
			{conditionRender.timeResult && (
				<View style={styles.resultContainer}>
					<View style={styles.resultComponent}>
						<Text
							style={[
								styles.serialNumberText,
								{ color: color.primary },
							]}
						>
							1
						</Text>
						<Text style={styles.timeText}>{result[0]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text
							style={[
								styles.serialNumberText,
								{ color: color.primary },
							]}
						>
							2
						</Text>
						<Text style={styles.timeText}>{result[1]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text
							style={[
								styles.serialNumberText,
								{ color: color.primary },
							]}
						>
							3
						</Text>
						<Text style={styles.timeText}>{result[2]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text
							style={[
								styles.serialNumberText,
								{ color: color.primary },
							]}
						>
							4
						</Text>
						<Text style={styles.timeText}>{result[3]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text
							style={[
								styles.serialNumberText,
								{ color: color.primary },
							]}
						>
							5
						</Text>
						<Text style={styles.timeText}>{result[4]}</Text>
					</View>
					<View style={styles.resultComponent}>
						<Text
							style={[
								styles.serialNumberText,
								{ color: color.primary },
							]}
						>
							6
						</Text>
						<Text style={styles.timeText}>{result[5]}</Text>
					</View>
					<TouchableOpacity
						style={[
							styles.resetButton,
							{ backgroundColor: color.primary },
						]}
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
		marginBottom: 20,
	},
	button: {
		height: 62,
		width: "45%",
		borderWidth: 2,
		borderRadius: 20,
		justifyContent: "center",
	},
	sleepNowButton: {
		height: "90%",
		width: "80%",
		borderWidth: 5,
		borderRadius: 2500,
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
		fontSize: 45,
		marginRight: 10,
	},
	timeText: {
		color: "white",
		fontSize: theme.fontSize,
		fontWeight: "600",
	},
	resetButton: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		padding: 20,
		marginTop: 30,
	},
});
