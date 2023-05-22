
import HomeScreen from "./screens/HomeScreen";

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation-stack';
import BuscaAnimalScreen from "./screens/BuscaAnimalScreen";

const Stack = createStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <StackActions.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: true}} />
                <Stack.Screen name='Buscar animal' component={BuscaAnimalScreen} options={{headerShown: true}} />
            </StackActions.Navigator>
        </NavigationContainer>
    )

}