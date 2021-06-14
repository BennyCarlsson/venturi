import Button from 'components/Button';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import styled from 'styled-components';

export const AddCommuteDialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledToParagraph = styled(Paragraph)`
  padding-top: 14px;
`;

export const StyledTitleHeading = styled(Heading)`
  text-align: center;
  padding-top: 32px;
  padding-bottom: 16px;
`;

export const StyledParagraph = styled(Paragraph)`
  padding: 0 16px;
  padding-bottom: 48px;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 56px;
`;
