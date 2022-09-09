import React, { useCallback, useEffect, useReducer } from 'react';
import reducer, { editField } from '../../reducer/punch-card';
import generateWeekData from '../../utils/get-week-data';
import DayCell from '../day-cell/DayCell';
import styles from './WeekTable.module.css';

export const DAYS_NAMES= ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const WeekTable = ({ data, year, month, week, monthName, dayName, onChange}) => {
  const weekData = data?.[year]?.[month]?.[week] || generateWeekData(data?.exercises.loadout1)
  const [punchCard, dispatch] = useReducer(reducer, weekData)

  const onChangeField = useCallback((day, exercise) => (value) => {
    dispatch(editField(day, exercise.value, value))
  }, [ ])

  useEffect(() => {
    onChange(year, month, week, punchCard)
  }, [onChange, punchCard, year, month, week ])

  return <table className={styles.table}>
    <thead>
      <tr>
        <th colSpan='8'>
          {year} - {monthName}
        </th>
      </tr>
      <tr>
        <th colSpan='8'>
          {dayName}
        </th>
      </tr>
      <tr>
        <th>Tipo</th>
        <th>Lunedi</th>
        <th>Martedi</th>
        <th>Mercoledi</th>
        <th>Giovedi</th>
        <th>Venerdi</th>
        <th>Sabato</th>
        <th>Domenica</th>
      </tr>
    </thead>
    <tbody>
      {
        data.exercises.loadout1.map((exercise, idx) => (
          <tr key={idx}>
            <td>{exercise.value}</td>
            { 
              DAYS_NAMES.map((day, idx) => (
                <td key={idx}>
                  <DayCell dayItem={punchCard?.[day]?.[exercise.value]} onChangeField={onChangeField(day, exercise)}/>
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
}

export default WeekTable;
