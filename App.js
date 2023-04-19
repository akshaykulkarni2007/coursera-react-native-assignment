import { View } from 'react-native'

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
			<LittleLemonFooter />
		</View>
	)
}
