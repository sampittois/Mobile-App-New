import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About Us</Text>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image source={require('../img/books.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }} />
                    <Image source={require('../img/ebooks.jpeg')} style={{ width: 100, height: 100, borderRadius: 10 }} />
                    <Image source={require('../img/audiobooks.jpeg')} style={{ width: 100, height: 100, borderRadius: 10 }} />
                </View>
                <Text style={styles.body}>Welcome to <Text style={{ fontWeight: "bold" }}>Nook & Novel</Text>{"\n\n"}
                    At <Text style={{ fontWeight: "bold" }}>Nook & Novel</Text>, we believe every story deserves a special place. Explore our carefully curated collection of{" "}
                    <Text style={{ fontWeight: "bold" }}>Books</Text>, <Text style={{ fontWeight: "bold" }}>Audiobooks</Text>, and <Text style={{ fontWeight: "bold" }}>eBooks</Text> designed to suit every kind of reader and listener.{"\n\n"}
                    Whether you love the feel of a printed book, the convenience of listening on the go, or the flexibility of digital reading, Nook & Novel has you covered. Discover inspiring authors, captivating stories, and a seamless browsing experience that makes finding your next great read effortless.{"\n\n"}
                    Step into your perfect literary escape — all just a click away at Nook & Novel.{"\n\n"}
                    Happy reading!</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Books")}>
                <Text style={styles.buttonText}>Go back to shop</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a3b18a",
        paddingTop: 10,
        alignItems: "center",
    },
    card: {
        width: 400,
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
});
export default AboutScreen;