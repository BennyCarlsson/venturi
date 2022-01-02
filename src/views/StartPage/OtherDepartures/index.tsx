import Paragraph from 'components/Paragraph'
import Colors from 'tokens/colors'
import { FontWeight } from 'types'
import { Trip, Trips } from 'redux/tripSlice'
import ChevronIcon from './ChevronIcon'
import {
  Box,
  DepartureWrapper,
  NameBox,
  TimeAndDirectionWrapper,
  DirectionParagraph,
  TitleParagraph,
  Top,
  Content,
} from './styles'

type Departures = {
  handleOnClick: () => void
  showContent: boolean
  trips: Trips[]
}

const OtherDepartures = ({ handleOnClick, showContent, trips }: Departures) => {
  const variant = {
    initial: { height: 0 },
    animate: {
      height: showContent ? 'fit-content' : 0,
      transition: { duration: 0.3 },
    },
  }

  const chevron = {
    animate: { rotate: showContent ? 180 : 0, transition: { duration: 0.2 } },
  }

  const renderDeparture = (trip: Trip, i: number) => (
    <DepartureWrapper key={`key:${i}`}>
      <TimeAndDirectionWrapper>
        <Paragraph fontSize={18} color={Colors.white}>
          {trip.departureTime}
        </Paragraph>
        <DirectionParagraph fontSize={18} color={Colors.white}>
          {trip.direction}
        </DirectionParagraph>
      </TimeAndDirectionWrapper>
      <NameBox>
        <Paragraph fontSize={14}>{trip.number}</Paragraph>
      </NameBox>
    </DepartureWrapper>
  )

  return (
    <Box>
      <Top
        onClick={(e) => {
          e.preventDefault()
          handleOnClick()
        }}
      >
        <span />
        <TitleParagraph
          center
          color={Colors.white}
          fontSize={18}
          fontWeight={FontWeight.medium}
        >
          Other departures
        </TitleParagraph>
        <ChevronIcon variants={chevron} animate={'animate'} />
      </Top>

      <Content variants={variant} animate={'animate'} initial={'initial'}>
        {trips.map((trip, i) => {
          //Todo leg can be an array of legs if trip contains multiple steps
          if (!Array.isArray(trip)) {
            return renderDeparture(trip, i)
          } else {
            return renderDeparture(trip[0], i)
          }
        })}
      </Content>
    </Box>
  )
}

export default OtherDepartures
