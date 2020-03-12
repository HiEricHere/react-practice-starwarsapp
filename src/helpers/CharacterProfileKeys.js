import { compose } from './compose'

// list of key attributes for character profiles

const attributesKey = [
  "height",
  "mass",
  "hair_color",
  "skin_color",
  "eye_color",
  "birth_year",
  "gender",
  "homeworld",
  "films",
  "species",
  "vehicles",
  "starships",
]

const attributesToFetchKey = ["homeworld", "films", "species", "vehicles", "starships"]

const filterUnloaded = attrKeys => unfilteredObj => {
  attrKeys.map(key => [key, unfilteredObj[key]])
}

const filterAttr = filterUnloaded(attributesKey)
const filterFetchList = filterUnloaded(attributesToFetchKey)

export { filterAttr, filterFetchList }