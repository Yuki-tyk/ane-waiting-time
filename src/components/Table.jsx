import React from 'react'

export default function Table(props) {
  const { hospitals, updatedTime, fetchAPIData } = props
  console.log('hospitals', hospitals)
  console.log('updatedTime', updatedTime)

  return (
    <table id='table' className=''>
      <tbody>
        <tr className='region-row'>
          <td className='region'>
            <b >Hong Kong Island</b>
          </td>
          <td></td>
        </tr>
        {hospitals.map((hosp, i) => {
          if (hosp.region==="Hong Kong Island") {
            return (
              <tr key={i} className='hosp-row'>
                <td className='hosp-name'>
                  <a href={hosp.url} target='_blank'>{hosp.hospName}</a>
                </td>
                <td className='hosp-topWait'>
                  {hosp.topWait ? hosp.topWait : 'N/A'}
                </td>
              </tr>
            )}
        })}

        <tr className='region-row'>
          <td className='region'>
            <b >Kowloon</b>
          </td>
          <td></td>
        </tr>
        {hospitals.map((hosp, i) => {
          if (hosp.region==="Kowloon") {
            return (
              <tr key={i} className='hosp-row'>
                <td className='hosp-name'>
                  <a href={hosp.url} target='_blank'>{hosp.hospName}</a>
                </td>
                <td className='hosp-topWait'>
                  {hosp.topWait ? hosp.topWait : 'N/A'}
                </td>
              </tr>
          )}
        })}

        <tr className='region-row'>
          <td className='region'>
            <b >New Territories</b>
          </td>
          <td></td>
        </tr>
        {hospitals.map((hosp, i) => {
          if (hosp.region==="New Territories") {
            return (
              <tr key={i} className='hosp-row'>
                <td className='hosp-name'>
                  <a href={hosp.url} target='_blank'>{hosp.hospName}</a>
                </td>
                <td className='hosp-topWait'>
                  {hosp.topWait ? hosp.topWait : 'N/A'}
                </td>
              </tr>
          )}
        })}
      </tbody>
    </table>   
  )
}
