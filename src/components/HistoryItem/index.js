/* eslint-disable react/button-has-type */
import './index.css'
// import React from 'react'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="li-container">
      <div className="items-container">
        <p className="time-para">{timeAccessed}</p>
        <img className="domain-logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>

        <p className="domain-url">{domainUrl}</p>
      </div>
      <button className="delete-btn" data-testid="delete" onClick={onDelete}>
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
