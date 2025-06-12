import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BlogCard = ({ name, summary, date, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name} numberOfLines={2}>{name}</Text>
                <Text style={styles.summary} numberOfLines={3}>{summary}</Text>
                <Text style={styles.date}>{new Date(date).toDateString()}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f5e6ca",
        borderRadius: 10,
        overflow: "hidden",
        width: 160,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 100,
        resizeMode: "cover",
    },
    textContainer: {
        padding: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#795a4e",
        marginBottom: 4,
    },
    summary: {
        fontSize: 12,
        color: "#5f4b44",
        marginBottom: 6,
    },
    date: {
        fontSize: 10,
        color: "#a68a75",
        textAlign: "right",
    },
});

export default BlogCard;
