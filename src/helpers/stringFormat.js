import { compose } from './compose'

const filterUnderScore = x => x.replace('_', ' ')
const upper = x => x.toUpperCase()
const getFirst = x => x[0]
const firstUpper = compose(upper, getFirst)
const getTail = x => x.slice(1)
const capitalize = x => firstUpper(x) + getTail(x)

const normalizeKey = compose(capitalize, filterUnderScore)

export { normalizeKey, capitalize }