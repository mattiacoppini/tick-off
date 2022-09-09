import defaultData from '../mocks/default-data'

const getBaseData = () => {
  let data = JSON.parse(localStorage.getItem('config'))
  if(!data || !data?.exercises || !data?.exercises?.list || !data?.exercises?.loadout1) {
    data = defaultData
    sessionStorage.setItem('config', JSON.stringify(data))
  }

  return data;
}

export default getBaseData