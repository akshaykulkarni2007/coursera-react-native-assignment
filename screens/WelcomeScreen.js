import { Text, View, ScrollView, StyleSheet } from 'react-native'

import MenuItems from '../components/MenuItems'
import MenuItemSectionList from '../components/MenuItemSectionList'

export default function WelcomeScreen() {
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

			{/* Form*/}

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
})
