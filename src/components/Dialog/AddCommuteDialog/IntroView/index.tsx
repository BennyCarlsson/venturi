import Button from 'components/Button'
import Heading from 'components/Heading'
import image from 'assets/images/bus-stop/background-bus-stop.jpg'
import {
  BottomPart,
  IntroViewWrapper,
  StyledImage,
  StyledParagraph,
  StyledTitleHeading,
} from './styles'

type IntroViewProps = {
  goToChooseDestionationView: () => void
}

const IntroView = ({ goToChooseDestionationView }: IntroViewProps) => {
  return (
    <IntroViewWrapper>
      <span>
        <StyledTitleHeading
          headingType={'h1'}
          fontSize={28}
          color='#719FB0'
          fontWeight={400}
        >
          Venturi
        </StyledTitleHeading>
        <Heading
          headingType='h2'
          fontSize={28}
          fontWeight={700}
          color={'#35F39'}
        >
          Commute trip planner
        </Heading>
        <StyledParagraph fontSize={14} fontWeight={500}>
          Have a quick way to get information about your most common trip.
        </StyledParagraph>
        <StyledParagraph fontSize={14} fontWeight={500}>
          The specified trip will be easily acceible with current status and
          more.
        </StyledParagraph>
      </span>
      <BottomPart>
        <StyledImage src={image} />
        <Button onClick={goToChooseDestionationView}>Get Started!</Button>
      </BottomPart>
    </IntroViewWrapper>
  )
}

export default IntroView
