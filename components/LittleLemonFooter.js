import { View, Text, StyleSheet } from 'react-native'

export default function LittleLemonFooter() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>All rights reserved by Little Lemon, 2022</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EE9972',
		padding: 20,
	},
	text: {
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		fontStyle: 'italic',
	},
})
