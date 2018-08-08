const SEASON_WINTER = "winter"
const SEASON_SPRING = "spring"
const SEASON_SUMMER = "summer"
const SEASON_FALL = "fall"

// @param {Date} date
module.exports = function getSeason(date) {
  const month = date.getMonth()
  
  const winter = [11,0,1]
  const spring = [2,3,4]
  const summer = [5,6,7]
  const fall = [8,9,10]

  if(winter.includes(month)) return SEASON_WINTER
  if(spring.includes(month)) return SEASON_SPRING
  if(summer.includes(month)) return SEASON_SUMMER
  if(fall.includes(month)) return SEASON_FALL

  return
}