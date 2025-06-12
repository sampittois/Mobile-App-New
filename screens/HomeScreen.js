import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, onPress } from "react-native";
import ProductCard from "../components/ProductCard.js";

import { Picker } from "@react-native-picker/picker";

const categoryNames = {
    "": "Alle categorieën",
    "67d5b512dc72582cf723c611": "Books",
    "67d5b57ea85123519ee321ed": "Audiobooks",
    "67d5b5898bb68546dd0de9a4": "eBooks",
}

const HomeScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("price-asc");

    useEffect(() => {
        fetch(
            "https://api.webflow.com/v2/sites/67ae0d90e65a0b625014ef64/products",
            {
                headers: {
                    Authorization:
                        "Bearer aebbfa0bb7aac43c0f8c005fc4acbd2d91cfec9c68db2a7f613a376e46c83dea",
                },
            }
        )

            .then((res) => res.json())
            .then((data) =>
                setProducts(
                    data.items.map((item) => ({
                        id: item.product.id,
                        title: item.product.fieldData.name,
                        author: item.product.fieldData.author,
                        description: item.product.fieldData.description,
                        price: (item.skus[0]?.fieldData.price.value || 0) / 100,
                        image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
                        category:
                            categoryNames[item.product.fieldData.category[0]] || "Unknown",
                    }))
                )
            )
            .catch(console.error);
    }, []);

    const filteredProducts = products.filter(
        (p) =>
            (selectedCategory === "" || p.category === selectedCategory) &&
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        if (sortOption === "name-asc") return a.title.localeCompare(b.title);
        if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    })

    


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Blogs")}>
                    <Text style={styles.buttonText}>Blogs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("About")}>
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cart")}>
                    <Text style={styles.buttonText}>Cart</Text>
                </TouchableOpacity>
            </View>
            {/* <Text style={styles.heading}>Books</Text> */}
            <View>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Types..."
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
                        <Picker.Item label="Price (low-high)" value="price-asc" />
                        <Picker.Item label="Price (high-low)" value="price-desc" />
                        <Picker.Item label="Name (A - Z)" value="name-asc" />
                        <Picker.Item label="Name (Z - A)" value="name-desc" />
                    </Picker>

                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={setSelectedCategory}
                        style={styles.picker}
                    >
                        <Picker.Item label="All Categories" value="" />
                        {[...new Set(products.map((p) => p.category))].map((category) => (
                            <Picker.Item key={category} label={category} value={category} />
                        ))}
                    </Picker>
                </View>

            </View>

            <ScrollView style={styles.cardContainer}>
                <View style={styles.row}>
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            author={product.author}
                            price={product.price}
                            image={product.image}
                            onPress={() => navigation.navigate("Details", product)}
                        />
                    ))}
                </View>
            </ScrollView>
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

export default HomeScreen;
