import Paragraph from 'components/Paragraph'
import { useAppDispatch } from 'hooks/redux'
import { Location } from 'redux/locationsSlice'
import { FontWeight } from 'types'
import { setCurrentTable } from 'redux/tripSlice'
import TripDots from './TripDots'
import {
  Content,
  NameWrapper,
  StyledHeading,
  Top,
  TripListItemWrapper,
} from './styles'

type TripListItemProps = {
  trip: { name: string; origin: Location; destination: Location }
}

const TripListItem = ({ trip, ...props }: TripListItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <TripListItemWrapper
      onClick={() => {
        dispatch(
          setCurrentTable({
            origin: trip?.origin,
            destination: trip?.destination,
          })
        )
      }}
      {...props}
    >
      <Top>
        <StyledHeading
          color='#ffffff'
          fontSize={14}
          fontWeight={FontWeight.bold}
          headingType='h2'
        >
          {trip.name}
        </StyledHeading>
      </Top>
      <Content>
        <TripDots />
        <NameWrapper>
          <Paragraph
            color='#2f2e41'
            fontSize={14}
            fontWeight={FontWeight.medium}
          >
            {trip.origin?.name}
          </Paragraph>
          <Paragraph
            color='#2f2e41'
            fontSize={14}
            fontWeight={FontWeight.medium}
          >
            {trip.destination?.name}
          </Paragraph>
        </NameWrapper>
      </Content>
    </TripListItemWrapper>
  )
}

export default TripListItem
