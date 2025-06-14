import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useCart } from "../components/CartContext.js";


const CartScreen = ({ navigation }) => { // ontvangt navigation prop om tussen screen te navigeren.
    const { cartItems, removeFromCart } = useCart(); // Haalt de inhoud van de winkelwagen en de functie om een item te verwijderen

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cart</Text>

            {cartItems.length === 0 ? ( // Als de winkelwagen leeg is: dit bericht
                <View style={styles.card}>
                    <Text style={styles.body}>Nothing in your Cart yet...</Text>
                </View>
            ) : (
                <ScrollView style={styles.scrollContainer}> {/*Scrollen, items weergeven */}
                    {cartItems.map((item, index) => (
                        <View key={index} style={styles.row}>
                            {item.image?.uri && (
                                <Image source={{ uri: item.image.uri }} style={styles.image} />
                            )}
                            <View style={styles.body}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.author}>by {item.author}</Text>
                                <Text style={styles.price}>€{item.price.toFixed(2)}</Text>
                                <View style={styles.amountRow}>
                                    {item.quantity > 1 && (
                                        <>
                                            <Text style={styles.amount}>{item.quantity}x</Text>
                                            <Text style={styles.amount}>
                                                Total: €{(item.price * item.quantity).toFixed(2)}
                                            </Text>
                                        </>
                                    )}
                                </View>


                                <TouchableOpacity // Button: verwijderen uit de index
                                    style={styles.removeButton}
                                    onPress={() => removeFromCart(index)}
                                >
                                    <Text style={styles.removeButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            )}
            <View>
                <Text style={styles.totalText}>Cart Total: €{total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Books")} // navigatie naar HomeScreen
            >
                <Text style={styles.buttonText}>Go back to shop</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a3b18a",
        paddingTop: 10,
        alignItems: "center",
    },
    card: {
        width: 390,
        padding: 16,
        backgroundColor: "#f5e6ca",
        borderRadius: 8,
        marginBottom: 16,
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
        color: "#795a4e",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
        width: 390,
        padding: 16,
        backgroundColor: "#f5e6ca",
        borderRadius: 8,
        marginBottom: 16,
    },
    body: {
        padding: 10,
        color: "#795a4e",
    },
    title: {
        fontSize: 20,
        color: "#795a4e",
    },
    author: {
        fontSize: 16,
        color: "#795a4e",
    },
    price: {
        fontSize: 16,
        color: "#795a4e",
    },
    button: {
        marginTop: 12,
        backgroundColor: "#f5e6ca",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: "#795a4e",
        fontWeight: "bold",
    },
    amount: {
        fontSize: 16,
        color: "#795a4e",
    },
    amountRow: {
        flexDirection: "row",
        gap: 10,
    },
    totalText: {
        fontSize: 16,
        color: "#795a4e",
        fontWeight: "bold",
    },
    scrollContainer: {
        width: "100%",
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 140,
        marginBottom: 10,
        borderRadius: 8,
    },
    removeButton: {
        marginTop: 10,
        backgroundColor: "#a3b18a",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    removeButtonText: {
        color: "#f5e6ca",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CartScreen;