import * as moment from 'moment'

import { get } from './index'
import { NBA_STATS_BASE_URL, NBA_LEAGUE_ID } from './constants'
import { Team } from './nba-stats.types'

interface Score {
  homeTeam: Team,
  awayTeam: Team,
  homeTeamScore: number,
  awayTeamScore: number,
}

interface Scoreboard {
  scores: Score[]
}

export function getDailyGames<Scoreboard>(date: moment.Moment) {
  return get(`${NBA_STATS_BASE_URL}/scoreboard`, {
    GameDate: date.format('MM/DD/YYYY'),
    LeagueID: NBA_LEAGUE_ID,
    DayOffset: 0,
  })
}
