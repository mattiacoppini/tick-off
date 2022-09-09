import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const SingleCell = ({ checked, onChangeField }) => {
  const onChange = useCallback((event) => {
    onChangeField(event.target.checked)
  }, [ onChangeField ])

  return <input type='checkbox' checked={!!checked} onChange={onChange} />
}

const MultiCell = ( { items, onChangeField }) => {
  const onChange = useCallback((idx) => (value) => {
    items[idx] = value
    onChangeField(items)
  }, [onChangeField, items])
  return items.map((item, idx) => <SingleCell key={idx} checked={item} onChangeField={onChange(idx)} />)
}

export const DayCell = ({ dayItem, onChangeField }) => {
  const isSingleCell = !Array.isArray(dayItem)
  
  return isSingleCell ? <SingleCell checked={dayItem} onChangeField={onChangeField}/> : <MultiCell items={dayItem} onChangeField={onChangeField}/>
}

DayCell.propTypes = {
  dayItem: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired
}

export default DayCell