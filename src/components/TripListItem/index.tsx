import Paragraph from 'components/Paragraph'
import { Location } from 'redux/locationsSlice'
import { FontWeight } from 'types'
import {
  Content,
  Dot,
  LetterCircle,
  NameWrapper,
  StyledHeading,
  Top,
  TripDotsWrapper,
  TripListItemWrapper,
} from './styles'

type TripListItemProps = {
  trip: { name: string; origin?: Location; destination?: Location }
}

const TripListItem = ({ trip, ...props }: TripListItemProps) => {
  return (
    <TripListItemWrapper {...props}>
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
        <TripDotsWrapper>
          <LetterCircle>A</LetterCircle>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <LetterCircle>B</LetterCircle>
        </TripDotsWrapper>
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
