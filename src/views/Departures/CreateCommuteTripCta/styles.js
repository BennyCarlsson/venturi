import Paragraph from 'components/Paragraph'
import styled from 'styled-components'
import Colors from 'tokens/colors'
import spacings from 'tokens/spacings'
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'

export const CreateCommuteTripCtaWrapper = styled.a`
  position: absolute;
  bottom: ${spacings.bottomMenuHeight};
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${Colors.vBlack};
  border-bottom: 1px solid white;
`

export const StyledPlusIcon = styled(PlusIcon)`
  stroke: white;
  margin-left: 40px;
`

export const StyledParagraph = styled(Paragraph)`
  padding: 14px 21px;
`
