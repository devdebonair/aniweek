import React from 'react'
import { View, StyleSheet } from 'react-native'
import ListItemNumbered from '../list-item-numbered'

const mapItemsToComponents = (items=[]) => {
  return items.map((item, index) => {
    return (
        <View style={styles.containerItem} key={index}>
          <ListItemNumbered title={item} number={index+1} />
        </View>
    )
  })
}

const listNumbered = ({ items }) => {
  return mapItemsToComponents(items)
}

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: 17.5
  }
})

export default listNumbered