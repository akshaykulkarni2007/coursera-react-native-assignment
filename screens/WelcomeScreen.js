import { useState } from 'react'
import {
	Text,
	View,
	ScrollView,
	TextInput,
	Image,
	StyleSheet,
	useColorScheme,
} from 'react-native'

// import MenuItems from '../components/MenuItems'
// import MenuItemSectionList from '../components/MenuItemSectionList'
// import LoginScreen from '../components/LoginScreen'

export default function WelcomeScreen() {
	// const [firstName, onChangeFirstName] = useState('')
	const colorScheme = useColorScheme()

	return (
		<ScrollView
			indicatorStyle="white"
			style={[
				styles.container,
				colorScheme === 'light'
					? { backgroundColor: '#fff' }
					: { backgroundColor: '#333333' },
			]}>
			{/* Welcome text */}
			<View style={styles.headerWrapper}>
				<Image
					style={styles.image}
					source={require('../img/logo.png')}
					resizeMode="cover"
					accessible={true}
					accessibilityLabel={'Little Lemon Logo'}
				/>

				<Text
					style={[
						styles.title,
						colorScheme === 'light'
							? { color: '#333333' }
							: { color: '#EDEFEE' },
					]}>
					Welcome to Little Lemon
				</Text>
			</View>

			<Text
				style={[
					styles.description,
					colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
				]}>
				Little Lemon is a charming neighborhood bistro that serves simple food
				and classic cocktails in a lively but casual environment. We would love
				to hear more about your experience with us!
			</Text>

			{/* Login */}
			{/* <LoginScreen /> */}

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
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 10,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 20,
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
