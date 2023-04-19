import { View, StyleSheet } from 'react-native'

// Week 1
// import WelcomeScreen from './screens/WelcomeScreen'

// Week 2
import MenuItems from './components/MenuItems'
import MenuItemSectionList from './components/MenuItemSectionList'

import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'

export default function App() {
	return (
		<View style={styles.container}>
			<LittleLemonHeader />
			{/* <WelcomeScreen /> */}
			{/* <MenuItems /> */}
			<MenuItemSectionList />
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
