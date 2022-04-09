import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import { Location } from 'redux/locationsSlice'
import { TripListItemWrapper } from './styles'

type TripListItemProps = {
  trip: { name: string; origin?: Location; destination?: Location }
}

const TripListItem = ({ trip, ...props }: TripListItemProps) => {
  return (
    <TripListItemWrapper {...props}>
      <Heading headingType='h2'>{trip.name}</Heading>
      <Paragraph>{trip.origin?.name}</Paragraph>
      <Paragraph>{trip.origin?.name}</Paragraph>
      <Paragraph>{trip.destination?.name}</Paragraph>
    </TripListItemWrapper>
  )
}

export default TripListItem
