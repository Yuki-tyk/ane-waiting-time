import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import { HOSPITALS } from './utils/hospitals'

function App() {
  const [updatedTime, setUpdatedTime] = useState(null)
  const [hospitals, setHospitals] = useState(HOSPITALS)
  // console.log(hospitals)

  async function fetchAPIData() {
    const url = "https://www.ha.org.hk/opendata/aed/aedwtdata-en.json"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setUpdatedTime(data.updateTime)
    // setAnEWaitingTIme(data.waitTime)
    hospitals.forEach((hosp, i) => {
      data.waitTime.forEach((temp, j) => {
        if (hosp.hospName ===  temp.hospName) {
          hosp.topWait = temp.topWait
        }
      })
    })

  }

  useEffect(() => {
    fetchAPIData()
  }, [])

  // useEffect(() => {
  //   console.log("AnEWaitingTime", AnEWaitingTime);
  //   console.log("updatedTime", updatedTime);
  //   hospitals.forEach((hosp, i) => {
  //     AnEWaitingTime.forEach((temp , i) => {
  //       if (hosp.hospName === temp.hospName) {
  //         hosp.waitingTime = temp.topWait
  //         // console.log('found. temp', temp)
  //       }
  //     })
  //     // console.log('hosp', hosp)
  //     // console.log('AnEWaitingTime', AnEWaitingTime)
  //   })
  // }, [AnEWaitingTime, updatedTime]);


  return (
    <div className='text-slate-600 mx-full min-h-screen relative' >
      <Header />
      <Content hospitals={hospitals} updatedTime={updatedTime} fetchAPIData={fetchAPIData}/>
      <Footer />
    </div>
  )
}

export default App
