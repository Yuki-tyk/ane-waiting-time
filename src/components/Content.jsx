import React from 'react'
import Table from './Table'

export default function Content(props) {
  const { hospitals, updatedTime, fetchAPIData } = props
  return (
    <div id="content">
      <p id='clarity-statement'>
          Priority will be accorded to patients triaged as critical, emergency and urgent.
      </p>

      <div id='table-container'>
        <div id='updated-time-statement'>
          As at {updatedTime}
          <div id='reload-btn'>
            <button onClick={fetchAPIData}>
              <i className="fa-solid fa-rotate"></i>
            </button>
          </div>
        </div>
        <Table hospitals={hospitals} updatedTime={updatedTime} fetchAPIData={fetchAPIData}/>
      </div>
    </div>
  )
}
