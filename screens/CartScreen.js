import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useCart } from "../components/CartContext.js";


const CartScreen = ({ navigation }) => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cart</Text>

            {cartItems.length === 0 ? (
                <View style={styles.card}>
                    <Text style={styles.body}>Nothing in your Cart yet...</Text>
                </View>
            ) : (
                <ScrollView style={styles.scrollContainer}>
                    {cartItems.map((item, index) => (
                        <View key={index} style={styles.card}>
                            {item.image?.uri && (
                                <Image source={{ uri: item.image.uri }} style={styles.image} />
                            )}
                            <Text style={styles.body}>{item.title}</Text>
                            <Text style={styles.body}>by {item.author}</Text>
                            <Text style={styles.body}>€{item.price.toFixed(2)}</Text>

                            <TouchableOpacity
                                style={styles.removeButton}
                                onPress={() => removeFromCart(index)}
                            >
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Books")}
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
    },
    body: {
        padding: 10,
        fontSize: 14,
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
    scrollContainer: {
        width: "100%",
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
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