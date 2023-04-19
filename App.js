import { View } from 'react-native'

import WelcomeScreen from './screens/WelcomeScreen'

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-between',
				backgroundColor: '#495E57',
			}}>
			<LittleLemonHeader />
			<WelcomeScreen />
			<LittleLemonFooter />
		</View>
	)
}
