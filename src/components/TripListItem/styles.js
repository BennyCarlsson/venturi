import Heading from 'components/Heading'
import styled from 'styled-components'

export const TripListItemWrapper = styled.button`
  padding: 0;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #f3f3f3;
  border-radius: 8px;
  margin-bottom: 32px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  background-color: #719fb0;
  border-radius: 8px;
`
export const StyledHeading = styled(Heading)`
  padding-left: 24px;
`

export const Content = styled.div`
  display: flex;
  padding: 8px 16px 24px 16px;
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  padding-top: 3px;
  padding-bottom: 3px;
`
