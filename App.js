import { View, StyleSheet } from 'react-native'

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'

import Routes from './routes'

export default function App() {
	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			<Routes />
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
