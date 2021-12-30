import styled from 'styled-components'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import ClosedIconButton from 'components/CloseIconButton'

export const TopCTAButtonTitleSubtitle = styled.div`
  margin-top: 8px;
`

export const CTAButtonTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`

export const StyledParagraph = styled(Paragraph)`
  padding-top: 48px;
`

export const StyledTitleHeading = styled(Heading)`
  margin-left: 24px;
`
export const Input = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #726a95;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  padding: 8px;
`
export const StyledButton = styled(Button)`
  margin-bottom: 56px;
`

export const StyledClosedIconButton = styled(ClosedIconButton)``
