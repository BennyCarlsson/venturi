import styled from 'styled-components'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

export const IntroViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`
export const StyledParagraph = styled(Paragraph)`
  margin-top: 24px;
`

export const StyledTitleHeading = styled(Heading)`
  margin-bottom: 8px;
`

export const BottomPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledImage = styled.img`
  margin-top: 48px;
  margin-bottom: 64px;
  width: 100%;
  max-width: 800px;
`
