import Paragraph from 'components/Paragraph'
import React from 'react'
import {
  CTAButtonTitleWrapper,
  Input,
  StyledButton,
  StyledClosedIconButton,
  StyledParagraph,
  StyledTitleHeading,
  TopCTAButtonTitleSubtitle,
} from './styles'

type NameCommuteViewProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  createTrip: () => void
  goToChooseDestionationView: () => void
}

const NameCommuteView = ({
  createTrip,
  goToChooseDestionationView,
  name,
  setName,
  ...props
}: NameCommuteViewProps) => {
  return (
    <React.Fragment {...props}>
      <TopCTAButtonTitleSubtitle>
        <CTAButtonTitleWrapper>
          <StyledClosedIconButton
            data-testid='close-dialog-button'
            onClick={(e) => {
              goToChooseDestionationView()
            }}
          />
          <StyledTitleHeading headingType={'h2'} fontSize={28}>
            Your Trip
          </StyledTitleHeading>
        </CTAButtonTitleWrapper>
        <Paragraph fontSize={14}>
          To keep track of your trips, a good idea is to name the specific trip
          you are about to create. It's optional but a good idea.
        </Paragraph>
        <StyledParagraph fontSize={18}>Trip name</StyledParagraph>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </TopCTAButtonTitleSubtitle>
      <StyledButton onClick={createTrip}>Create Commute trip</StyledButton>
    </React.Fragment>
  )
}

export default NameCommuteView
