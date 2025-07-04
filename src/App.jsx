import { styled } from "styled-components"

import RobotCard from "./components/RobotCard"
import { GlobalStyle } from "./GlobalStyle"

const Container = styled.div`
  max-width: 1280px;
`

const Cards = styled.div`
  margin: 24px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Cards>
          <RobotCard />
        </Cards>
      </Container>
    </>
  )
}

export default App
