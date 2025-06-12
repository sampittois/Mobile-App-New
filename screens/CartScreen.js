import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useCart } from "../components/CartCard";

const CartScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cart</Text>
            <ScrollView contentContainerStyle={styles.cartContent}>
                <Text style={styles.body}>Nothing in your cart yet...</Text>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Books")}>
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
        alignItems: "center"
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
        color: "#795a4e"
    },
    cartContent: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5e6ca",
        borderRadius: 10,
        margin: 10,
        width: "90%",
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
        fontWeight: "bold"
    },
    body: {
        color: "#795a4e",
        fontSize: 14
    },
});

export default CartScreen;
