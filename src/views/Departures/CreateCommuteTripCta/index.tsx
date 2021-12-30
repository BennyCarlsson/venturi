import Colors from 'tokens/colors'
import {
  CreateCommuteTripCtaWrapper,
  StyledParagraph,
  StyledPlusIcon,
} from './styles'

type CreateCommuteTripCtaProps = {
  onClick: () => void
}

const CreateCommuteTripCta = ({ onClick }: CreateCommuteTripCtaProps) => {
  return (
    <CreateCommuteTripCtaWrapper
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      <StyledPlusIcon />
      <StyledParagraph fontSize={18} color={Colors.white}>
        Create commute trip
      </StyledParagraph>
    </CreateCommuteTripCtaWrapper>
  )
}

export default CreateCommuteTripCta
