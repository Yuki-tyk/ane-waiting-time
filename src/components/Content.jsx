import React from 'react'
import Table from './Table'

export default function Content(props) {
  const { hospitals, updatedTime, fetchAPIData } = props
  return (
    <div className='flex-auto mx-auto mt-10 pt-4 relative max-w-full z-auto'>
        <div className='px-2'>
          <p className='text-base md:text-lg font-semibold text-red-500'>
              Priority will be accorded to patients triaged as critical, emergency and urgent.
          </p>

          <div className='mt-3 mx-auto place-items-center'>
            As at {updatedTime}
            <div className='float-right mr-1'>
              <button onClick={fetchAPIData}>
                <i className="fa-solid fa-rotate"></i>
              </button>
            </div>
          </div>
        </div>
        <Table hospitals={hospitals} updatedTime={updatedTime} fetchAPIData={fetchAPIData}/>
    </div>
  )
}
