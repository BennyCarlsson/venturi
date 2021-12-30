import Paragraph from "components/Paragraph";
import styled from "styled-components";
import Colors from "tokens/colors";
import { motion } from "framer-motion";

export const Box = styled.div`
  background-color: ${Colors.vBlack};
  color: ${Colors.white};
`;

export const Top = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid gray;
`;

export const TitleParagraph = styled(Paragraph)``;

export const Content = styled(motion.div)`
  overflow: hidden;
`;

export const DepartureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid gray;
  &:last-child {
    border-bottom: 1px solid ${Colors.white};
  }
`;

export const TimeAndDirectionWrapper = styled.div`
  display: flex;
`;

export const DirectionParagraph = styled(Paragraph)`
  padding-left: 32px;
`;

export const NameBox = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${Colors.white};
`;
