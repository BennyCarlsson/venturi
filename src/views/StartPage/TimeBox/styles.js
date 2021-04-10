import styled from 'styled-components';
import Colors from 'tokens/colors';
import { ReactComponent as MapPinLogo } from 'assets/icons/map-pin.svg';

export const TimeBoxWrapper = styled.div`
  padding: 16px 32px;
  margin: 48px 24px;
  background: ${Colors.white};
  border: 1px solid #f3f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const TimeLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const TimeWrapper = styled.div``;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMapPinLogo = styled(MapPinLogo)`
  height: 22px;
  width: 18px;
  padding-right: 16px;
  stroke: ${Colors.vBlue};
`;

export const NumberAndNameWrapper = styled.div`
  display: flex;
`;

export const NumberBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 4px;
  height: 20px;
  width: 20px;
  background-color: ${Colors.vBlack};
`;
