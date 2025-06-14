import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useCart } from "../components/CartContext.js";

const DetailScreen = ({ route, navigation }) => {
    const { title, author, price, image, description, id } = route.params;
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({
            id,
            title,
            author,
            price,
            image,
            description,
            quantity,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Blogs")}>
                    <Text style={styles.navButtonText}>Blogs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("About")}>
                    <Text style={styles.navButtonText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Cart")}>
                    <Text style={styles.navButtonText}>Cart</Text>
                </TouchableOpacity>
            </View>
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
                <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        addToCart({ title, author, price, image }) // Toevoegen aan winkelwagen
                    }
                >
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity> */}

                <Text style={styles.description}>{description}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a3b18a",
    },
    scrollContent: {
        alignItems: "center",
        padding: 10,
        margin: 20,
        backgroundColor: "#f5e6ca",
        borderRadius: 10,
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
    navButton: {
        marginTop: 12,
        backgroundColor: "#f5e6ca",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        alignItems: "center",
    },
    navButtonText: {
        color: "#795a4e",
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
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
