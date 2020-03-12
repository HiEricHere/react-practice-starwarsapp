import { lens, compose, reducer } from './compose'

const ping = x => {
  console.log('ping')
  return x
}
const getResults = lens('results')
const getResultsTrack = compose(ping, getResults)

const getCount = lens('count')
const calcPageCount = c => Math.ceil(c/10)
const getPageTotal = reducer([calcPageCount, parseInt, getCount])

const combineCountResults = (getPageTotal, getResults) => json => [getPageTotal(json), getResults(json)]
const getFirstPageData = combineCountResults(getPageTotal, getResults)

export { getFirstPageData, getResults, getResultsTrack }