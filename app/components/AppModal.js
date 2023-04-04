import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Modal,
	TouchableOpacity,
	Text,
	ScrollView,
} from "react-native";
import theme from "../config/colors";
import { hours } from "../utils/timeArray";
// props :-
// visible = Boolean,
// animationType = fade, slide, none

export default function AppModal({
	animationType = "slide",
	array,
	visible,
	setVisible,
	setTime,
	time,
	color,
}) {
	const handleCloseButton = () => {
		setVisible(false);
	};

	return (
		<Modal visible={visible} animationType={animationType}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.closeButton}
					onPress={handleCloseButton}
				>
					<Text
						style={[
							styles.closeButtonText,
							{ color: color.primary },
						]}
					>
						Close
					</Text>
				</TouchableOpacity>

				<ScrollView>
					{array.map((item) => (
						<TouchableOpacity
							style={[
								styles.textContainer,
								{ borderColor: color.primary },
							]}
							key={item.id}
							onPress={() => {
								// console.log(item.time);
								let myTime = { ...time };
								myTime = {
									color: theme.colors.white,
									value: item.time,
									tapped: true,
								};
								setTime(myTime);
								setVisible(false);
							}}
						>
							<Text style={styles.text}>{item.time}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		flex: 1,
	},
	closeButton: {
		alignSelf: "center",
	},
	closeButtonText: {
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	textContainer: {
		width: "90%",
		height: 50,
		alignSelf: "center",
		borderWidth: 1.5,
		marginBottom: 10,
		borderRadius: 20,
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: theme.fontSize,
		marginLeft: 20,
	},
});
