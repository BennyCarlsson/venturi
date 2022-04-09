import Heading from 'components/Heading'
import styled from 'styled-components'

export const TripListItemWrapper = styled.div`
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
export const TripDotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Dot = styled.div`
  width: 1px;
  height: 7px;
  margin-top: 2px;
  margin-bottom: 2px;
  background-color: #719fb0;
  border-radius: 1px;
`
export const LetterCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #719fb0;
  height: 24px;
  width: 24px;
  box-shadow: -1px 4px 7px 2px rgb(0 0 0 / 31%);
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
`
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  padding-top: 3px;
  padding-bottom: 3px;
`
