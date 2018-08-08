const axios = require("axios")
const getSeason = require("./getSeason")

const query = `
query ($page: Int, $perPage: Int, $season: MediaSeason, $year: Int) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (season: $season, seasonYear: $year) {
      id
      season
      episodes
      title {
        english
        romaji
      }
      popularity
      trending
      isAdult
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      description
      bannerImage,
      genres
    }
  }
}
`
const dateCurrent = new Date()
const season = getSeason(dateCurrent)

var variables = {
  "page": 1,
  "perPage": 50,
  "season": season.toUpperCase(),
  "year": dateCurrent.getFullYear()
}

const url = 'https://graphql.anilist.co',
      options = {
        url: url,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        data: JSON.stringify({
          query: query,
          variables: variables
        })
      }

module.exports = async function getAnime() {
  try {
    const response = await axios(options)
    return response.data
  } catch(e) {
    throw e
  }
}