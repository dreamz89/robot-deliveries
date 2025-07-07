import { useEffect, useState } from "react"
import { styled, ThemeProvider } from "styled-components"
import axios from "axios"

import RobotCard from "@/components/RobotCard"
import { GlobalStyle } from "@/assets/styles/global"
import { theme } from "@/assets/styles/theme"

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Cards>
          {/* {robotsData.map((data) => (
            <RobotCard key={data.robotId} {...data} />
          ))} */}
        </Cards>
      </Container>
    </ThemeProvider>
  )
}

export default App
