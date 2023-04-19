import { useState } from 'react'
import { Text, View, ScrollView, TextInput, StyleSheet } from 'react-native'

// import MenuItems from '../components/MenuItems'
// import MenuItemSectionList from '../components/MenuItemSectionList'
import LoginScreen from '../components/LoginScreen'

export default function WelcomeScreen() {
	const [firstName, onChangeFirstName] = useState('')

	return (
		<ScrollView indicatorStyle="white" style={styles.container}>
			{/* Welcome text */}
			<View>
				<Text style={styles.title}>Welcome to Little Lemon</Text>
				<Text style={styles.description}>
					Little Lemon is a charming neighborhood bistro that serves simple food
					and classic cocktails in a lively but casual environment. We would
					love to hear more about your experience with us!
				</Text>
			</View>

			{/* Login */}
			<LoginScreen />

			{/* Lists */}
			{/* <MenuItems />
			<MenuItemSectionList /> */}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		padding: 40,
		fontSize: 24,
		color: '#EDEFEE',
		textAlign: 'center',
	},
	description: {
		fontSize: 16,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center',
	},
	inputBox: {
		height: 40,
		maxWidth: '90%',
		marginHorizontal: '5%',
		marginVertical: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 16,
		borderColor: '#EDEFEE',
		backgroundColor: '#EDEFEE',
	},
})
