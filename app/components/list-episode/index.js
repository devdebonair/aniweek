import React from 'react'

import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import EpisodeCard from '../episdoe-card'

const renderItem = ({item}) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.containerCard}>
        <EpisodeCard {...item} />
      </View>
    </View>
  )
}

const listEpisode = ({ episodes=[] }) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      style={styles.list}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      data={episodes}
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
  shadow: {
    shadowOffset: {  width: 0,  height: 7.5,  },
    shadowColor: '#f2f2f2',
    shadowOpacity: 1.0,
    marginBottom: 12,
    marginRight: 12
  },
  containerCard: {
    width: Dimensions.get("screen").width - 20*2,
    overflow: "hidden",
    borderRadius: 8
  }
})

export default listEpisode