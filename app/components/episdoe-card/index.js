import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native"

const EpisodeCard = ({ title, imageURL, description }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageURL}} />
      <View style={styles.containerText}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    aspectRatio: (16/9)
  },
  containerText: {
    marginHorizontal: 8,
    marginVertical: 10
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    marginBottom: 2
  },
  description: {
    fontWeight: "600",
    color: "#9B9B9B",
    fontSize: 15
  }
})

export default EpisodeCard