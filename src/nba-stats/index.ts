import { getQueryString } from './utils'
import { StatsApiParam, UrlParams } from './nba-stats.types'

export async function get<R>(url: string, params: UrlParams): Promise<R> {
  const response = await fetch(url + getQueryString(params))
  return response.json()
}

export * from './nba-stats.service'
