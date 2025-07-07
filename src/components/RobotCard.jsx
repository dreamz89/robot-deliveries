import { useState } from "react"
import { styled } from "styled-components"

import BatteryIcon from "@/assets/icons/Battery"
import RobotIcon from "@/assets/icons/Robot"
import Button from "@/ui/Button"

const StyledRobotCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 340px;
  overflow: hidden;
`

const RobotDetails = styled.div`
  background-color: ${({ theme }) => theme.color.blue200};
  padding: ${({ theme }) => theme.spacings.l};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Battery = styled.div`
  display: flex;
  column-gap: 4px;
`

const BatteryPercentage = styled.p`
  font-size: 14px;
`

const Status = styled.div`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: ${({ theme }) => `${theme.spacings.m} 0`};
`

const InfoRow = styled.div`
  display: flex;
  column-gap: 24px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

const InfoLabel = styled.div`
  color: ${({ theme }) => theme.color.gray600};
  font-size: 12px;
`

const OrderDetails = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-height: 137px;
  padding: ${({ theme }) => theme.spacings.l};
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  width: 100%;
`

const PlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Placeholder = styled.p`
  color: ${({ theme }) => theme.color.gray600};
`

const RobotCard = ({ robotId, model, status, batteryLevel, currentOrder }) => {
  const [currentStatus, setCurrentStatus] = useState(status)

  const isIdle = currentStatus === "Idle"
  const isOnDelivery = currentStatus === "On Delivery"
  const estimatedDelivery = new Date(
    currentOrder.estimatedDelivery
  ).toLocaleString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const handleClick = () => {
    if (isIdle || isOnDelivery) setCurrentStatus("Returning")
  }

  return (
    <StyledRobotCard>
      <RobotDetails>
        <Row>
          <RobotIcon />
          <Battery>
            <BatteryPercentage>{batteryLevel}%</BatteryPercentage>
            <BatteryIcon
              percentage={batteryLevel}
              isCharging={currentStatus === "Charging"}
            />
          </Battery>
        </Row>
        <Status>{currentStatus}</Status>
        <Row>
          <InfoRow>
            <Info>
              <InfoLabel>Robot ID</InfoLabel>
              <p>{robotId}</p>
            </Info>
            <Info>
              <InfoLabel>Model</InfoLabel>
              <p>{model}</p>
            </Info>
          </InfoRow>
          {isOnDelivery || isIdle ? (
            <Button onClick={handleClick}>Return To Base</Button>
          ) : null}
        </Row>
      </RobotDetails>
      <OrderDetails>
        {isOnDelivery ? (
          <InfoGrid>
            <Info>
              <InfoLabel>Order ID</InfoLabel>
              <p>{currentOrder.orderId}</p>
            </Info>
            <Info>
              <InfoLabel>Address</InfoLabel>
              <p>{currentOrder.deliveryAddress}</p>
            </Info>
            <Info>
              <InfoLabel>Customer Name</InfoLabel>
              <p>{currentOrder.customerName}</p>
            </Info>
            <Info>
              <InfoLabel>Estimated Delivery</InfoLabel>
              <p>{estimatedDelivery}</p>
            </Info>
          </InfoGrid>
        ) : (
          <PlaceholderWrapper>
            <Placeholder>No current delivery</Placeholder>
          </PlaceholderWrapper>
        )}
      </OrderDetails>
    </StyledRobotCard>
  )
}

export default RobotCard
