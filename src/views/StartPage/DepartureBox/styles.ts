import styled from 'styled-components';
import colors from 'tokens/colors';
import { ReactComponent as TrainLogo } from 'assets/icons/train.svg';
import Paragraph from 'components/Paragraph';

export const NextDepartureWrapper = styled.div`
  border-radius: 0 0 8px 8px;
  background-color: ${colors.vBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const TopPart = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${colors.borderWhite};
`;

export const BottomPart = styled.div`
  display: flex;
`;

export const BottomLeftPart = styled.div`
  padding: 16px 24px;
  width: 100%;
  border-right: 1px solid ${colors.borderWhite};
`;

export const BottomRightPart = styled.div`
  padding: 16px 24px;
  width: 100%;
`;

export const BottomParagraph = styled(Paragraph)`
  padding-top: 8px;
`;

export const StyledTrailLogo = styled(TrainLogo)`
  width: 32px;
  height: 32px;
  padding-right: 16px;
  path {
    fill: ${colors.white};
  }
`;

export const DepartsWrapper = styled.div`
  display: flex;
  padding-top: 8px;
`;
