import React from 'react'
import { View, StyleSheet } from 'react-native'

const hairline = () => {
  return (
    <View style={styles.line}></View>
  )
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#c8c7cc"
  }
})

export default hairline