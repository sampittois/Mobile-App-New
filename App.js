import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen.js";
import ProductDetail from "./screens/ProductDetail.js";
import BlogScreen from "./screens/BlogScreen.js";
import BlogDetail from "./screens/BlogDetail.js";
import AboutScreen from "./screens/AboutScreen.js";
import CartScreen from "./screens/CartScreen.js";
import { CartProvider } from "./components/CartContext.js";


const Stack = createStackNavigator();

export default function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#f5e6ca",
                        },
                        headerTintColor: "#795a4e",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                >
                    <Stack.Screen name="Books" component={HomeScreen} />
                    <Stack.Screen name="Details" component={ProductDetail} />
                    <Stack.Screen name="Blogs" component={BlogScreen} />
                    <Stack.Screen name="Post" component={BlogDetail} />
                    <Stack.Screen name="About" component={AboutScreen} />
                    <Stack.Screen name="Cart" component={CartScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}
