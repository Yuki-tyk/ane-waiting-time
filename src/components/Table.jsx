import React from 'react'

export default function Table(props) {
  const { hospitals, updatedTime, fetchAPIData } = props
  console.log('hospitals', hospitals)
  console.log('updatedTime', updatedTime)

  return (
    <div className='mt-4 relative'>
      
      <table className=' mx-w-full min-w-screen w-auto place-items-auto m-auto'>
        <thead>
          <tr>
            <td className=''>
              As at {updatedTime}</td>
            <td className='float-right mr-1'>
              <button onClick={fetchAPIData}>
                <i className="fa-solid fa-rotate"></i>
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className='border-2 bg-slate-200 sticky top-0'>
            <td className='p-2'>
              <b >Hong Kong Island</b>
            </td>
            <td></td>
          </tr>
          {hospitals.map((hosp, i) => {
            if (hosp.region==="Hong Kong Island") {
              return (
                <tr key={i} className='p-2 border-2'>
                  <td className='p-2 pl-4'>
                    <a href={hosp.url} target='_blank' className='hover:underline'>{hosp.hospName}</a>
                  </td>
                  <td className='pt-2 mr-2 float-right'>
                    {hosp.topWait ? hosp.topWait : 'N/A'}
                  </td>
                </tr>
              )}
          })}

          <tr className='border-2 bg-slate-200 sticky top-0'>
            <td className='p-2'>
              <b >Kowloon</b>
            </td>
            <td></td>
          </tr>
          {hospitals.map((hosp, i) => {
            if (hosp.region==="Kowloon") {
              return (
                <tr key={i} className='p-2 border-2'>
                  <td className='p-2 pl-4'>
                    <a href={hosp.url} target='_blank' className='hover:underline'>{hosp.hospName}</a>
                  </td>
                  <td className='pt-2 mr-2 float-right'>
                    {hosp.topWait ? hosp.topWait : 'N/A'}
                  </td>
                </tr>
            )}
          })}

          <tr className='border-2 bg-slate-200 sticky top-0'>
            <td className='p-2'>
              <b >New Territories</b>
            </td>
            <td></td>
          </tr>
          {hospitals.map((hosp, i) => {
            if (hosp.region==="New Territories") {
              return (
                <tr key={i} className='p-2 border-2'>
                  <td className='p-2 pl-4'>
                    <a href={hosp.url} target='_blank' className='hover:underline'>{hosp.hospName}</a>
                  </td>
                  <td className='pt-2 mr-2 float-right'>
                    {hosp.topWait ? hosp.topWait : 'N/A'}
                  </td>
                </tr>
            )}
          })}
        </tbody>
      </table>
      

    </div>
  )
}
