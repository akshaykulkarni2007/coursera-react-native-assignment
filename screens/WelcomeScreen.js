import { View, Text } from 'react-native'

export default function WelcomeScreen() {
	return (
		<View style={{ paddingHorizontal: 16 }}>
			<Text
				style={{
					color: '#fff',
					fontSize: 24,
					textAlign: 'center',
					marginBottom: 20,
				}}>
				Welcome to Little Lemon
			</Text>
			<Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
				Little Lemon is a charming neighborhood bistro that serves simple food
				and classic cocktails in a lively but casual environment. We would love
				to hear more about your experience with us!
			</Text>
		</View>
	)
}
