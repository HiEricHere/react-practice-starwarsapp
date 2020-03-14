// list of key attributes for character profiles
import { normalizeKey } from './stringFormat'

const attributesKey = [
  "height",
  "mass",
  "hair_color",
  "skin_color",
  "eye_color",
  "birth_year",
  "gender"
]

const attributesToFetchKey = ["species", "films", "vehicles", "starships"]

const filterUnloaded = attrKeys => unfilteredObj => 
  attrKeys.map(key => [normalizeKey(key), unfilteredObj[key]])

const filterAttr = filterUnloaded(attributesKey)
const filterFetchList = filterUnloaded(attributesToFetchKey)

export { filterAttr, filterFetchList }