// App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/store/storeRedux";
import HomeScreen from "./src/views/screens/Home";

const Stack = createStackNavigator();
export const queryClient = new QueryClient();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Tela Inicial" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
