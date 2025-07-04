import { useEffect, useState } from "react"
import { styled } from "styled-components"
import axios from "axios"

// import RobotCard from "./components/RobotCard"
import { GlobalStyle } from "./GlobalStyle"

const Container = styled.div`
  max-width: 1280px;
`

const Cards = styled.div`
  margin: 24px;
`

function App() {
  const [robotsData, setRobotsData] = useState()

  const getData = async () => {
    try {
      const response = await axios.get("robots.json")
      setRobotsData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Cards>
          {/* {robotsData.map((data) => (
            <RobotCard key={data.robotId} {...data} />
          ))} */}
        </Cards>
      </Container>
    </>
  )
}

export default App
