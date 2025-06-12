import React, { createContext, useContext, useState } from "react";

const CartCard = ({ title, author, price, description, image, onPress }) => {
    const navigation = useNavigation();

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
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export const useCart = () => useContext(CartCard);