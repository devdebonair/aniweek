import React from 'react'
import { View, Image, Text, StyleSheet } from "react-native"

const posterDescription = ({ imageURL, meta, title, description }) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: imageURL}} />
      <Text style={styles.meta}>{meta}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 14,
    borderRadius: 4
  },
  meta: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
    color: "#00B9FE"
  },
  title: {
    fontSize: 17,
    marginBottom: 4
  },
  description: {
    fontSize: 15,
    color: "#9B9B9B",
    lineHeight: 20
  }
})

export default posterDescription