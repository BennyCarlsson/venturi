import styled from "styled-components";
import Colors from "tokens/colors";
import { ReactComponent as TrainLogo } from "assets/icons/train.svg";
import { motion } from "framer-motion";
import MotionParagraph from "components/MotionParagraph";

export const NextDepartureWrapper = styled(motion.div)`
  border-radius: 0 0 8px 8px;
  background-color: ${Colors.vBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const TopPart = styled(motion.div)`
  padding: 24px;
  border-bottom: 1px solid ${Colors.borderWhite};
`;

export const BottomPart = styled.div`
  display: flex;
`;

export const BottomLeftPart = styled(motion.div)`
  padding: 16px 24px;
  width: 100%;
  border-right: 1px solid ${Colors.borderWhite};
`;

export const BottomRightPart = styled(motion.div)`
  padding: 16px 24px;
  width: 100%;
`;

export const BottomParagraph = styled(MotionParagraph)`
  padding-top: 8px;
`;

export const StyledTrailLogo = styled(TrainLogo)`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  path {
    fill: ${Colors.white};
  }
`;

export const DepartsWrapper = styled.div`
  display: flex;
  padding-top: 8px;
`;
