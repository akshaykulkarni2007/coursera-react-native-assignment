import { View, StyleSheet } from 'react-native'

import WelcomeScreen from './screens/WelcomeScreen'

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'

export default function App() {
	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<WelcomeScreen />
			<LittleLemonFooter />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
		justifyContent: 'space-between',
	},
})
