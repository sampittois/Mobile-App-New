import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, onPress } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BlogCard from "../components/BlogCard.js";

// function removetime(str){
//   return str.slice(0, -14);
// }

const BlogScreen = ({ navigation }) => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("price-asc");

    useEffect(() => {
        fetch(
            "https://api.webflow.com/v2/collections/67bb7d64a6b94206c07eb277/items",
            {
                headers: {
                    Authorization:
                        "Bearer aebbfa0bb7aac43c0f8c005fc4acbd2d91cfec9c68db2a7f613a376e46c83dea",
                },
            }
        )

            .then((res) => res.json())
            .then((data) =>
                setBlogs(
                    data.items.map((item) => ({
                        id: item.id,
                        title: item.fieldData.name,
                        summary: item.fieldData.summary,
                        post: item.fieldData.post,
                        date: item.fieldData.date,
                        image: { uri: item.fieldData["thumbnail-image"]?.url },
                    }))
                )
            )
            .catch((err) => console.error("Error:", err));
    }, []);

    const filteredBlogs = blogs.filter(
        (b) =>
            (b.title?.toLowerCase() || "").includes(searchQuery.toLowerCase())
    );



    const sortedBlogs = [...filteredBlogs].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (sortOption === "date-asc") return dateA - dateB;
        if (sortOption === "date-desc") return dateB - dateA;
        return 0;
    });


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search Blogs..."
                placeholderTextColor="#795a4e"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <View style={styles.filtersRow}>

                <Picker
                    selectedValue={sortOption}
                    onValueChange={setSortOption}
                    style={styles.picker}
                >
                    <Picker.Item label="Date (newest first)" value="date-desc" />
                    <Picker.Item label="Date (oldest first)" value="date-asc" />
                </Picker>
            </View>

            <ScrollView contentContainerStyle={styles.ScrollContainer}>
                <View style={styles.row}>
                    {sortedBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            name={blog.title}
                            summary={blog.summary}
                            date={blog.date}
                            image={blog.image}
                            onPress={() => navigation.navigate("Post", blog)}
                        />

                    ))}
                </View>

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
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
        color: "#795a4e",
    },
    searchInput: {
        backgroundColor: "#f5e6ca",
        borderRadius: 10,
        fontSize: 14,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 10,
        width: "330",
        color: "#795a4e",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    filtersRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        width: "90%",
        marginBottom: 20,
        backgroundColor: "#f5e6ca",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    picker: {
        flex: 1,
        color: "#795a4e",
    },
    cardContainer: {
        width: "100%",
        paddingHorizontal: 24,

    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
    },
    card: {
        width: 160,
        margin: 8,
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
export default BlogScreen;
