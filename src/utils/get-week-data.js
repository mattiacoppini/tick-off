import { DAYS_NAMES } from '../components/week-table/WeekTable'

const generateBooleans = (count) => {
 return (count && count > 1) ? Array(count).fill(false) : false
}

const generateByLoadout = (loadout) => {
  return loadout.reduce((acc, item) => ({
    ...acc,
    [item.value]: generateBooleans(item.count)
  }), {})
}
const generateWeekData = (loadout) => {
  return DAYS_NAMES.reduce((acc, day) => ({
    ...acc,
    [day]: generateByLoadout(loadout)
  }), {})
}

export default generateWeekData