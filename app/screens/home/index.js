import React from 'react';
import { connect } from 'react-redux';

import { LinearGradient } from "expo"
import { View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import ListEpisode from '../../components/list-episode'
import HeaderSection from '../../components/header-section'
import Hairline from '../../components/hairline'
import ListPosterDescription from "../../components/list-poster-description"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ListNumbered from '../../components/list-numbered'

import upNext from '../../util/getAnime'

const UP_NEXT = "UP_NEXT"
const AIRING_THIS_SEASON = "AIRING_THIS_SEASON"
const HEADER = "HEADER"

const state = {
  sections: [HEADER, UP_NEXT, AIRING_THIS_SEASON],
  upNext: [
    {
      title: "Sword Art Online Alternative: Gun Gale Online",
      description: "Episode 8 - Booby Trap",
      imageURL: "https://img1.ak.crunchyroll.com/i/spire4-tmb/3925f531fc37c683e5bfb7846442c92d1527940785_full.jpg"
    },
    {
      title: "Boku No Hero Academia",
      description: "Episode 48 - Symbol of Peace",
      imageURL: "https://img1.ak.crunchyroll.com/i/spire3-tmb/1adfa737b2b6e3a0f68ff6c5ee9253161528515337_full.jpg"
    },
    {
      title: "Shokugeki no Souma: San no Sara",
      description: "Episode 21 - The Pioneer of the Wastelands",
      imageURL: "https://img1.ak.crunchyroll.com/i/spire4-tmb/ca911615b85851e9798d2ae524f0406e1528066902_full.jpg"
    },
  ],
  airingThisSeason: [
    {
      imageURL: "https://pre00.deviantart.net/de59/th/pre/i/2018/053/8/e/a_place_further_than_the_universe_by_miniyippo-dc3y63z.jpg",
      meta: "Adventure | Slice of Life",
      title: "A Place Further Than The Universe",
      description: "The anime's story centers on high school girls going to the South Pole, \"a place further than the universe.\" They struggle and grow together as they cope with extreme conditions."
    },
    {
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/71jloykHu5L._SL1130_.jpg",
      meta: "Sci-Fi | Mecha",
      title: "Darling in the FranXX",
      description: "The story is set in the distant future. The land is ruined, and humanity establishes…"
    },
    {
      imageURL: "http://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2018/03/05/my-hero-academia-season-3-key-art.jpg",
      meta: "Shounen",
      title: "My Hero Academia",
      description: "The third season of Boku no Hero Academia."
    }
  ],
  trending: [
    "Boku No Hero Academia",
    "A Place Further Than The Universe",
    "Violet Evergarden",
    "Steins;Gate 0",
    "Sword Art Online Alternative: Gun Gale Online",
    "Tokyo Ghoul: Re",
    "Wotaku ni Koi wa Muzukashii",
    "Hinamatsuri",
    "Megalo Box",
    "Shokugeki no Souma: San…"
  ]
}

class Home extends React.Component {
  render() {
    return (
      <LinearGradient colors={['#fff', '#f2f2f2']} start={[0, 0.7]} end={[0,1]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={[styles.margin, styles.containerSection]}>
            <HeaderSection title="Watch Now" showLine fontSize={35} fontWeight="800" />
          </View>
          <View style={styles.margin}>
            <HeaderSection title="Up Next" />
          </View>
          <View>
            <ListEpisode episodes={state.upNext} />
          </View>
          <View style={styles.separator}>
            <Hairline />
          </View>
          <View style={styles.margin}>
            <HeaderSection title="Airing This Season" />
          </View>
          <View>
            <ListPosterDescription posters={state.airingThisSeason} />
          </View>
          <View style={styles.separator}>
            <Hairline />
          </View>
          <View style={styles.margin}>
            <HeaderSection title="Popularity" />
          </View>
          <View style={[styles.margin, styles.trending]}>
            <ListNumbered items={state.trending} />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  margin: {
    marginHorizontal: 20
  },
  scrollView: {
    width: Dimensions.get("screen").width
  },
  containerSection: {
    marginTop: 60,
  },
  separator: {
    width: "100%",
    marginTop: 20,
    marginBottom: 0,
    marginHorizontal: 20
  },
  trending: {
    marginTop: 25
  }
});

export default Home;