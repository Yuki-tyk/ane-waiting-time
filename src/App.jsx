import { useState, useEffect } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { HOSPITALS } from './data/hospitals'

function App() {
  const [updatedTime, setUpdatedTime] = useState(null)
  const [hospitals, setHospitals] = useState(HOSPITALS)

  async function fetchAPIData() {
    const url = "https://www.ha.org.hk/opendata/aed/aedwtdata-en.json"
    const response = await fetch(url)
    const data = await response.json()
    setUpdatedTime(data.updateTime)

    const updatedHospitals = hospitals.map((hosp, i) => {
      const updatedTopWait = data.waitTime.find(temp => temp.hospName === hosp.hospName)?.topWait || hosp.topWait
      return {
        ...hosp, topWait: updatedTopWait
      }
    })
    setHospitals(updatedHospitals)
  }

  useEffect(() => {
    fetchAPIData()
  }, [])

  return (
    <div id="container">
      <Header />
      <Content hospitals={hospitals} updatedTime={updatedTime} fetchAPIData={fetchAPIData}/>
      {/* <Footer /> */}
    </div>
  )
}

export default App