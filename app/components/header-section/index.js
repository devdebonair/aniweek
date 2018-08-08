import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const HeaderSection = ({ title, showLine=false, fontSize=22, fontWeight="800", children }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: fontSize, fontWeight: fontWeight }]}>{title}</Text>
      {showLine ? <View style={styles.line}></View> : null}
      {children ? <View>{children}</View> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  line: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#c8c7cc"
  },
  title: {
    color: "black",
    marginVertical: 10,
    letterSpacing: -0.5
  }
})

export default HeaderSection