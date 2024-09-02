import React from 'react'
import Table from './Table'

export default function Content(props) {
  const { hospitals, updatedTime, fetchAPIData } = props
  function reload() {
    fetchAPIData()
    const btn = document.getElementById('reload-btn')
    btn.classList.remove('rotate-once')
    void btn.offsetWidth
    btn.classList.add('rotate-once')
  }

  return (
    <div id="content">
      <p id='clarity-statement'>
          Priority will be accorded to patients triaged as critical, emergency and urgent.
      </p>
      <div id='table-container'>
        <div id='updated-time-statement'>
          As at {updatedTime}
          <button id="reload-btn" onClick={reload}>
            <i className="fa-solid fa-rotate"></i>
          </button>
        </div>
        <Table hospitals={hospitals} updatedTime={updatedTime}/>
      </div>
    </div>
  )
}
