import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import BuscaAnimalScreen from "./screens/BuscaAnimalScreen";
import BuscaCorScreen from "./screens/BuscaCorScreen";
import BuscaFrutaScreen from "./screens/BuscaFrutaScreen";
import BuscaSerVivoScreen from "./screens/BuscaSerVivo";
import BuscaTransformersScreen from "./screens/BuscaTransformersScreen";
import BuscaPlanetaScreen from "./screens/BuscaPlanetaScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Buscar cor"
          component={BuscaCorScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Buscar animal"
          component={BuscaAnimalScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Buscar fruta"
          component={BuscaFrutaScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Buscar ser vivo"
          component={BuscaSerVivoScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Buscar Transformers"
          component={BuscaTransformersScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Buscar Planetas"
          component={BuscaPlanetaScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
