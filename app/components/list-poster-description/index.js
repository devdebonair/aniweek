import React from 'react'

import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import PosterDescription from '../poster-description'

const renderItem = ({item}) => {
  return (
    <View style={styles.containerPoster}>
      <PosterDescription {...item} />
    </View>
  )
}

const listPosterDescription = ({ posters=[] }) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      style={styles.list}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      data={posters}
      keyExtractor={(item, index) => index.toString()} />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20
  },
  list: {
    width: "100%"
  },
  containerPoster: {
    marginRight: 12,
    width: Dimensions.get("screen").width - 20*2,
  }
})

export default listPosterDescription