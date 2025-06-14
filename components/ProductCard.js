import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../components/CartContext.js";



const ProductCard = ({ title, author, price, description, image, onPress }) => {
    const navigation = useNavigation();
    const { addToCart } = useCart(); // functie ophalen

    return (
        <View style={styles.card}>
            <Image source={image} style={styles.img} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.price}>€{price}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>View Book</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() =>
                        addToCart({ title, author, price, image }) // Toevoegen aan winkelwagen
                    }
                >
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 16,
        backgroundColor: "#f5e6ca",
        borderRadius: 8,
        marginBottom: 16,
        alignItems: "center",
    },
    img: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
        color: "#795a4e",
    },
    author: {
        fontSize: 14,
        color: "#795a4e",
        marginTop: 4,
    },
    price: {
        fontSize: 16,
        marginTop: 8,
        color: "#795a4e",
    },
    button: {
        marginTop: 12,
        backgroundColor: "#a3b18a",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: {
        color: "#f5e6ca",
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
    }
});

export default ProductCard;