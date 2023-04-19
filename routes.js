import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'

// const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function Routes() {
	return (
		<NavigationContainer>
			{/* <Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator> */}
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ size }) => {
						let iconName
						if (route.name === 'Welcome') {
							iconName = 'ios-home'
						} else if (route.name === 'Login') {
							iconName = 'ios-enter'
						}
						return <Ionicons name={iconName} size={size} />
					},
				})}
				initialRouteName="Login">
				<Tab.Screen name="Welcome" component={WelcomeScreen} />
				<Tab.Screen name="Login" component={LoginScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
