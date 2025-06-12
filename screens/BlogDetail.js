import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import RenderHTML from "react-native-render-html";

const DetailScreen = ({ route }) => {
    const { title, image, summary, post, date, width } = route.params;


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image source={image} style={styles.img} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.summary}>{summary}</Text>
                {/* Convert blog text (from Postman) to HTML */}
                <RenderHTML
                    contentWidth={width}
                    source={{ html: post }}
                    tagsStyles={{
                        p: styles.post,
                        h3: { fontSize: 20, fontWeight: "bold", color: "#795a4e" },
                        h1: { fontSize: 20, fontWeight: "bold", color: "#795a4e" },
                        em: { fontStyle: "italic", color: "#795a4e" },
                    }}
                />
                <Text style={styles.date}>{new Date(date).toDateString()}</Text>
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
        padding: 16,
        backgroundColor: "#f5e6ca",
        borderRadius: 10,
        margin: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#795a4e",
        textAlign: "center",
    },
    summary: {
        fontSize: 16,
        marginBottom: 8,
        color: "#795a4e",
        textAlign: "center",
    },
    date: {
        fontSize: 12,
        color: "#795a4e",
        textAlign: "center",
    },
    post: {
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
