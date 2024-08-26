import React from 'react'
import Table from './Table'

export default function Content(props) {
  const { hospitals, updatedTime, fetchAPIData } = props
  return (
    <div className='mt-12 pt-4 p-2 relative max-w-full z-auto'>
        <p className='text-base md:text-lg font-semibold text-red-500'>
            Priority will be accorded to patients triaged as critical, emergency and urgent.
        </p>
        <Table hospitals={hospitals} updatedTime={updatedTime} fetchAPIData={fetchAPIData}/>
    </div>
  )
}
