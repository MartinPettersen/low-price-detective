import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.headline}>The Low Price Detective</Text>
        <Text style={styles.text}>Skan et produkt og se om den selges billigere nær deg</Text>
        <TouchableOpacity style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>

                Skan
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 18,
        marginTop: 200,
    },
    text: {
        fontSize: 30,
    },
    buttonText: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
    headline: {
        fontSize: 50,
        paddingBottom: 50,
    },
    button: {
        borderWidth: 2,
        marginTop: 50,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: "#343A40",
        borderColor: "#68C174"
    },
    shadow: {
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 3, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      justifyContent: "center",
      alignItems: "center",
    },
})

export default HomeScreen