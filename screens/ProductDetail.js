import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const DetailScreen = ({ route }) => {
    const { title, author, price, image, description } = route.params;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image source={image} style={styles.img} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author}</Text>
                <Text style={styles.price}>€{price}</Text>

                <View style={styles.quantityControls}>
                    <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{quantity}</Text>

                    <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.totalPrice}>Total: €{price * quantity}</Text>

                <Text style={styles.description}>{description}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5e6ca",
    },
    scrollContent: {
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#795a4e",
        textAlign: "center",
    },
    author: {
        fontSize: 18,
        marginBottom: 8,
        color: "#795a4e",
        textAlign: "center",
    },
    price: {
        fontSize: 20,
        color: "#CC0000",
        textAlign: "center",
    },
    description: {
        paddingTop: 20,
        fontSize: 18,
        color: "#795a4e", 
        paddingHorizontal: 16,
    },
    img: {
        width: 250,
        height: 340,
        borderRadius: 8,
        marginBottom: 12,
    },
    quantityControls: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 12,
        gap: 12,
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: "#a3b18a",
        padding: 10,
        borderRadius: 6,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 25,
        color: "#795a4e",
        textAlign: "center",
    },
    quantityText: {
        fontSize: 18,
        color: "#795a4e",
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        color: "#795a4e",
        textAlign: "center",
    },
});

export default DetailScreen;
