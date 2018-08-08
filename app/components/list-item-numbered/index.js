import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Separator from '../hairline'

const listItemNumbered = ({ number, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}.</Text>
      <View style={styles.containerText}>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        <View style={styles.separator}>
          <Separator />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  containerText: {
    width: "100%"
  },
  number: {
    marginRight: 25,
    fontWeight: "bold",
    fontSize: 21
  },
  title: {
    fontWeight: "600",
    fontSize: 16
  },
  separator: {
    marginTop: 17.5
  }
})

export default listItemNumbered