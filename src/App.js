import styles from './App.module.css';
import WeekTable from './components/week-table/WeekTable';
import { DateTime } from 'luxon';
import getBaseData from './utils/get-base-data';

function App() {
  let data = getBaseData()
  const date = DateTime.now()

  const onChangePunchCard = (year, month, week, punchCard) => {
    const newData = {
      ...data,
      [year]: {
        ...data?.[year],
        [month]: {
          ...data?.[year]?.[month],
          [week]: punchCard
        }
      }
    }
    localStorage.setItem('config', JSON.stringify(newData))
  };

  return (
    <div className={`${styles.App}`}>
      <div className={styles.container}>
        <WeekTable data={data} year={date.year} month={date.month} week={date.weekNumber} monthName={date.monthLong} dayName={date.weekdayLong} onChange={onChangePunchCard}/>
      </div>
    </div>
  );
}

export default App;
