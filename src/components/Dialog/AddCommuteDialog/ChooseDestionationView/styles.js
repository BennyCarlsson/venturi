import styled from "styled-components";
import Button from "components/Button";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import ClosedIconButton from "components/CloseIconButton";

export const TopCTAButtonTitleSubtitle = styled.div`
  margin-top: 8px;
  padding-bottom: 48px;
`;
export const CTAButtonTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`;
export const StyledToParagraph = styled(Paragraph)`
  padding-top: 14px;
`;

export const StyledTitleHeading = styled(Heading)`
  margin-left: 24px;
`;

export const InputDropDownWrapper = styled.div`
  position: relative;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 56px;
`;

export const StyledClosedIconButton = styled(ClosedIconButton)``;
